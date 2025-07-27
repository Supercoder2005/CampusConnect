import { DashboardHeader } from '@/components/common/DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const recentGrades = [
    { subject: "Mathematics", grade: "A-" },
    { subject: "Physics", grade: "B+" },
    { subject: "English", grade: "A" },
]

const recentAssignments = [
    { title: "Essay: The Great Gatsby", status: "Graded", grade: "A-" },
    { title: "Historical Analysis", status: "Submitted" },
]

export default function ChildProfilePage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader title="Child's Profile" />
      <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
         <Card className="mb-6">
            <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-16 w-16">
                    <AvatarImage src="https://placehold.co/100x100.png" alt="Student Name" />
                    <AvatarFallback>LJ</AvatarFallback>
                </Avatar>
                <div>
                    <CardTitle className="text-xl font-headline">Liam Johnson</CardTitle>
                    <CardDescription>Grade 10 - Section A</CardDescription>
                </div>
            </CardHeader>
        </Card>
        <div className="grid gap-6 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Attendance</CardTitle>
                    <CardDescription>Overall attendance record for this academic year.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-muted-foreground">Presence</span>
                        <span className="font-bold">95%</span>
                    </div>
                    <Progress value={95} />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Recent Grades</CardTitle>
                    <CardDescription>Latest grades from mid-term exams.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        {recentGrades.map((item, index) => (
                            <div key={index} className="flex justify-between">
                                <span>{item.subject}</span>
                                <span className="font-bold">{item.grade}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Assignment Submissions</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Assignment</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Grade</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {recentAssignments.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.title}</TableCell>
                                <TableCell><Badge variant={item.status === "Graded" ? 'default': 'secondary'}>{item.status}</Badge></TableCell>
                                <TableCell>{item.grade || 'N/A'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
