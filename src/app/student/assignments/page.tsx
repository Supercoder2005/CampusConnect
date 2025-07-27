import { DashboardHeader } from '@/components/common/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const pendingAssignments = [
    { title: "Algebra Worksheet", subject: "Mathematics", dueDate: "2024-09-20" },
    { title: "Newton's Laws Lab Report", subject: "Physics", dueDate: "2024-09-22" },
];

const submittedAssignments = [
    { title: "Essay: The Great Gatsby", subject: "English", submissionDate: "2024-09-15", status: "Graded", grade: "A-" },
    { title: "Historical Analysis", subject: "History", submissionDate: "2024-09-10", status: "Submitted" },
];

export default function StudentAssignmentsPage() {
    return (
        <div className="flex flex-col">
            <DashboardHeader title="My Assignments" />
            <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <Tabs defaultValue="pending">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="pending">Pending</TabsTrigger>
                        <TabsTrigger value="submitted">Submitted</TabsTrigger>
                    </TabsList>
                    <TabsContent value="pending">
                        <div className="grid gap-4 md:grid-cols-2 mt-4">
                            {pendingAssignments.map((item, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <CardTitle>{item.title}</CardTitle>
                                        <CardDescription>{item.subject}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">Due Date: <span className="font-semibold text-foreground">{item.dueDate}</span></p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button>Submit Work</Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="submitted">
                        <div className="grid gap-4 md:grid-cols-2 mt-4">
                           {submittedAssignments.map((item, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <CardTitle>{item.title}</CardTitle>
                                                <CardDescription>{item.subject}</CardDescription>
                                            </div>
                                            <Badge variant={item.status === 'Graded' ? 'default' : 'secondary'}>{item.status}</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">Submitted on: <span className="font-semibold text-foreground">{item.submissionDate}</span></p>
                                        {item.grade && <p className="text-sm text-muted-foreground">Grade: <span className="font-bold text-lg text-foreground">{item.grade}</span></p>}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    );
}
