import { FileDown, Filter } from 'lucide-react';
import { DashboardHeader } from '@/components/common/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const attendanceRecords = [
    { student: "Liam Johnson", class: "Grade 10 - Section A", date: "2024-09-12", status: "Present" },
    { student: "Noah Williams", class: "Grade 10 - Section A", date: "2024-09-12", status: "Present" },
    { student: "Ava Miller", class: "Grade 9 - Section A", date: "2024-09-12", status: "Absent" },
    { student: "Elijah Davis", class: "Grade 11 - Section A", date: "2024-09-12", status: "Late" },
    { student: "Charlotte Garcia", class: "Grade 10 - Section B", date: "2024-09-12", status: "Present" },
];

export default function AttendanceOverviewPage() {
    return (
        <div className="flex flex-col">
            <DashboardHeader title="Attendance Overview" />
            <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <Card>
                    <CardHeader>
                        <CardTitle>School-wide Attendance</CardTitle>
                        <CardDescription>View and filter attendance records for the entire school.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between gap-4 mb-6">
                            <div className="flex gap-2">
                                <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filter by Date</Button>
                                <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filter by Class</Button>
                            </div>
                            <Button>
                                <FileDown className="mr-2 h-4 w-4" />
                                Generate Report
                            </Button>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Student</TableHead>
                                    <TableHead>Class</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {attendanceRecords.map((record, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{record.student}</TableCell>
                                        <TableCell>{record.class}</TableCell>
                                        <TableCell>{record.date}</TableCell>
                                        <TableCell>
                                            <Badge variant={record.status === 'Absent' ? 'destructive' : (record.status === 'Late' ? 'outline' : 'default')}>
                                                {record.status}
                                            </Badge>
                                        </TableCell>
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
