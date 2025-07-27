import { Users, ClipboardCheck, BookMarked } from 'lucide-react';
import { DashboardHeader } from '@/components/common/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

const classes = [
    { id: "CLS-001", name: "Grade 10 - Section A", subject: "Mathematics", students: 35 },
    { id: "CLS-002", name: "Grade 10 - Section B", subject: "Physics", students: 32 },
    { id: "CLS-005", name: "Grade 12 - Section A", subject: "Computer Science", students: 25 },
];

export default function TeacherClassesPage() {
    return (
        <div className="flex flex-col">
            <DashboardHeader title="My Classes" />
            <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {classes.map((cls) => (
                        <Card key={cls.id}>
                            <CardHeader>
                                <CardTitle>{cls.name}</CardTitle>
                                <CardDescription>{cls.subject}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Users className="h-4 w-4" />
                                    <span>{cls.students} Students</span>
                                </div>
                            </CardContent>
                            <CardFooter className="flex gap-2">
                                <Button variant="outline" size="sm">
                                    <ClipboardCheck className="mr-2 h-4 w-4" />
                                    Attendance
                                </Button>
                                <Button variant="outline" size="sm">
                                    <BookMarked className="mr-2 h-4 w-4" />
                                    Assignments
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
}
