// src/ai/flows/announcement-generator.ts
'use server';

/**
 * @fileOverview Generates school-wide announcements using AI.
 *
 * - generateAnnouncement - A function that generates an announcement.
 * - GenerateAnnouncementInput - The input type for the generateAnnouncement function.
 * - GenerateAnnouncementOutput - The return type for the generateAnnouncement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAnnouncementInputSchema = z.object({
  description: z.string().describe('A brief description of the event or information to be announced.'),
});
export type GenerateAnnouncementInput = z.infer<typeof GenerateAnnouncementInputSchema>;

const GenerateAnnouncementOutputSchema = z.object({
  announcementText: z.string().describe('The generated school-wide announcement text.'),
});
export type GenerateAnnouncementOutput = z.infer<typeof GenerateAnnouncementOutputSchema>;

export async function generateAnnouncement(input: GenerateAnnouncementInput): Promise<GenerateAnnouncementOutput> {
  return generateAnnouncementFlow(input);
}

const announcementPrompt = ai.definePrompt({
  name: 'announcementPrompt',
  input: {schema: GenerateAnnouncementInputSchema},
  output: {schema: GenerateAnnouncementOutputSchema},
  prompt: `You are a school administrator responsible for creating clear, concise, and informative announcements for students, teachers, and parents.

  Based on the following description, generate a school-wide announcement:
  Description: {{{description}}}
  `,
});

const generateAnnouncementFlow = ai.defineFlow({
  name: 'generateAnnouncementFlow',
  inputSchema: GenerateAnnouncementInputSchema,
  outputSchema: GenerateAnnouncementOutputSchema,
}, async input => {
  const {output} = await announcementPrompt(input);
  return output!;
});
