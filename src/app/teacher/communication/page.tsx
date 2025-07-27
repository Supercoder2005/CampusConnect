import { Send } from 'lucide-react';
import { DashboardHeader } from '@/components/common/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function TeacherCommunicationPage() {
    return (
        <div className="flex flex-col h-screen">
            <DashboardHeader title="Communication Hub" />
            <main className="flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                <Card className="md:col-span-1 lg:col-span-1">
                    <CardHeader>
                        <CardTitle>Chats</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                           <Button variant="ghost" className="w-full justify-start gap-3 p-2 h-auto">
                             <Avatar>
                                <AvatarFallback>G10</AvatarFallback>
                             </Avatar>
                             <div className="text-left">
                                <p className="font-semibold">Grade 10 - Section A</p>
                                <p className="text-xs text-muted-foreground">Parent-Teacher Group</p>
                             </div>
                           </Button>
                           <Button variant="secondary" className="w-full justify-start gap-3 p-2 h-auto">
                             <Avatar>
                                <AvatarImage src="https://placehold.co/40x40"/>
                                <AvatarFallback>ES</AvatarFallback>
                             </Avatar>
                             <div className="text-left">
                                <p className="font-semibold">Emma Smith (Parent)</p>
                                <p className="text-xs text-muted-foreground">Okay, thank you for the update!</p>
                             </div>
                           </Button>
                        </div>
                    </CardContent>
                </Card>
                <div className="md:col-span-2 lg:col-span-3 flex flex-col">
                    <Card className="flex-1 flex flex-col">
                        <CardHeader className="border-b">
                            <CardTitle>Emma Smith (Parent of Liam Johnson)</CardTitle>
                            <CardDescription>Grade 10 - Section A</CardDescription>
                        </CardHeader>
                        <ScrollArea className="flex-1 p-4">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Avatar><AvatarFallback>ES</AvatarFallback></Avatar>
                                    <div className="bg-secondary p-3 rounded-lg max-w-xs">
                                        <p className="text-sm">Good morning, I had a question about the upcoming math test.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 justify-end">
                                    <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-xs">
                                        <p className="text-sm">Good morning! Of course, what would you like to know?</p>
                                    </div>
                                    <Avatar><AvatarFallback>T</AvatarFallback></Avatar>
                                </div>
                            </div>
                        </ScrollArea>
                        <CardContent className="p-4 border-t">
                             <div className="relative">
                                <Input placeholder="Type your message..." className="pr-12" />
                                <Button size="icon" className="absolute top-1/2 right-1 -translate-y-1/2 h-8 w-8">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
