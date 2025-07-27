'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Wand2, Loader2, Copy } from 'lucide-react';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import type { GenerateAnnouncementOutput } from '@/ai/flows/announcement-generator';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }).max(200, {
    message: 'Description must not exceed 200 characters.',
  }),
});

type AnnouncementGeneratorProps = {
  generate: (input: { description: string }) => Promise<GenerateAnnouncementOutput>;
};

export default function AnnouncementGenerator({ generate }: AnnouncementGeneratorProps) {
  const [isPending, startTransition] = useTransition();
  const [generatedText, setGeneratedText] = useState('');
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const result = await generate(values);
      if (result?.announcementText) {
        setGeneratedText(result.announcementText);
      } else {
        toast({
            variant: "destructive",
            title: "Generation Failed",
            description: "Could not generate the announcement. Please try again."
        })
      }
    });
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText);
    toast({
        title: "Copied!",
        description: "Announcement text copied to clipboard.",
    })
  }

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., Annual school sports day on October 30th, from 9 AM to 2 PM. All students to participate."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Provide the key details for the announcement.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending}>
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Generate
          </Button>
        </form>
      </Form>
      {generatedText && (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <FormLabel>Generated Announcement</FormLabel>
                <Button variant="ghost" size="sm" onClick={handleCopy}>
                    <Copy className="mr-2 h-4 w-4"/>
                    Copy
                </Button>
            </div>
            <Textarea
                readOnly
                value={generatedText}
                className="min-h-[150px] bg-secondary"
            />
        </div>
      )}
    </div>
  );
}
