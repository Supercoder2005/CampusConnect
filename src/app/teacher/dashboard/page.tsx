import { Bell, BookOpen, Calendar } from 'lucide-react';
import { DashboardHeader } from '@/components/common/DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const schedule = [
    { time: '09:00 - 10:00', subject: 'Mathematics', class: 'Grade 10 - A' },
    { time: '10:00 - 11:00', subject: 'Physics', class: 'Grade 10 - B' },
    { time: '11:30 - 12:30', subject: 'Mathematics', class: 'Grade 10 - A' },
    { time: '01:30 - 02:30', subject: 'Computer Science', class: 'Grade 12 - A' },
];

export default function TeacherDashboardPage() {
    return (
        <div className="flex flex-col">
            <DashboardHeader title="Teacher Dashboard" />
            <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5"/> Today's Schedule</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {schedule.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                                        <div>
                                            <p className="font-semibold">{item.subject}</p>
                                            <p className="text-sm text-muted-foreground">{item.class}</p>
                                        </div>
                                        <Badge variant="outline">{item.time}</Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    <div className="space-y-6">
                         <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5"/> My Classes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                                    <li>Grade 10 - Section A (Mathematics)</li>
                                    <li>Grade 10 - Section B (Physics)</li>
                                    <li>Grade 12 - Section A (CompSci)</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Bell className="h-5 w-5"/> Notifications</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">No new notifications.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
}
