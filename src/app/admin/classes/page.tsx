import { PlusCircle, Search } from 'lucide-react';
import { DashboardHeader } from '@/components/common/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const classes = [
    { id: "CLS-001", name: "Grade 10 - Section A", subject: "Mathematics", teacher: "Olivia Smith", students: 35 },
    { id: "CLS-002", name: "Grade 10 - Section B", subject: "Physics", teacher: "James Jones", students: 32 },
    { id: "CLS-003", name: "Grade 9 - Section A", subject: "English", teacher: "Sophia Davis", students: 38 },
    { id: "CLS-004", name: "Grade 11 - Section A", subject: "Chemistry", teacher: "Benjamin Garcia", students: 29 },
    { id: "CLS-005", name: "Grade 12 - Section A", subject: "Computer Science", teacher: "James Jones", students: 25 },
];


export default function ClassManagementPage() {
    return (
        <div className="flex flex-col">
            <DashboardHeader title="Class Management" />
            <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Classes</CardTitle>
                        <CardDescription>Create, edit, and assign teachers to classes.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between gap-4 mb-6">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="Search classes..." className="pl-10" />
                            </div>
                            <Button>
                                <PlusCircle className="mr-2 h-4 w-4" />
                                Create Class
                            </Button>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Class Name</TableHead>
                                    <TableHead>Subject</TableHead>
                                    <TableHead>Teacher</TableHead>
                                    <TableHead>Students</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {classes.map((cls) => (
                                    <TableRow key={cls.id}>
                                        <TableCell className="font-medium">{cls.name}</TableCell>
                                        <TableCell>{cls.subject}</TableCell>
                                        <TableCell>{cls.teacher}</TableCell>
                                        <TableCell>{cls.students}</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">Edit</Button>
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
