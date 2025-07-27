import { BookMarked, Calendar, GraduationCap } from 'lucide-react';
import { DashboardHeader } from '@/components/common/DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const schedule = [
    { time: '09:00 - 10:00', subject: 'Mathematics', teacher: 'Mrs. Smith' },
    { time: '10:00 - 11:00', subject: 'Physics', teacher: 'Mr. Jones' },
    { time: '11:30 - 12:30', subject: 'English', teacher: 'Ms. Davis' },
];

const assignments = [
    { title: "Algebra Worksheet", subject: "Mathematics", dueDate: "2024-09-20" },
    { title: "Lab Report", subject: "Physics", dueDate: "2024-09-22" },
]

export default function StudentDashboardPage() {
    return (
        <div className="flex flex-col">
            <DashboardHeader title="Student Dashboard" />
            <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5"/> Today's Timetable</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {schedule.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                                        <div>
                                            <p className="font-semibold">{item.subject}</p>
                                            <p className="text-sm text-muted-foreground">{item.teacher}</p>
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
                                <CardTitle className="flex items-center gap-2"><BookMarked className="h-5 w-5"/> Upcoming Assignments</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {assignments.map((item, index) => (
                                    <div key={index} className="flex items-start justify-between mb-3">
                                        <div>
                                            <p className="font-semibold">{item.title}</p>
                                            <p className="text-sm text-muted-foreground">{item.subject}</p>
                                        </div>
                                        <Badge>{item.dueDate}</Badge>
                                    </div>
                                ))}
                                <Button asChild variant="link" className="p-0 h-auto">
                                    <Link href="/student/assignments">View all assignments</Link>
                                </Button>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><GraduationCap className="h-5 w-5"/> Recent Grades</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between items-baseline">
                                    <p>Mathematics Mid-Term</p>
                                    <p className="font-bold text-xl">A-</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
}
