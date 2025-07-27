import { PlusCircle } from 'lucide-react';
import { DashboardHeader } from '@/components/common/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea';

const assignments = [
    { title: "Algebra Worksheet", class: "Grade 10 - A", dueDate: "2024-09-20", submitted: 30, total: 35 },
    { title: "Newton's Laws Lab Report", class: "Grade 10 - B", dueDate: "2024-09-22", submitted: 28, total: 32 },
    { title: "Essay: The Great Gatsby", class: "Grade 11 - A", dueDate: "2024-09-25", submitted: 25, total: 29 },
];

export default function TeacherAssignmentsPage() {
    return (
        <div className="flex flex-col">
            <DashboardHeader title="Assignments" />
            <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle>Manage Assignments</CardTitle>
                            <CardDescription>Create, distribute, and grade assignments.</CardDescription>
                        </div>
                         <Dialog>
                            <DialogTrigger asChild>
                                <Button><PlusCircle className="mr-2 h-4 w-4" />Create Assignment</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                <DialogTitle>Create New Assignment</DialogTitle>
                                <DialogDescription>
                                    Fill in the details for the new assignment. Click save when you're done.
                                </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="title" className="text-right">Title</Label>
                                    <Input id="title" className="col-span-3" />
                                </div>
                                 <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="description" className="text-right">Description</Label>
                                    <Textarea id="description" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="dueDate" className="text-right">Due Date</Label>
                                    <Input id="dueDate" type="date" className="col-span-3" />
                                </div>
                                 <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="materials" className="text-right">Materials</Label>
                                    <Input id="materials" type="file" className="col-span-3" />
                                </div>
                                </div>
                                <DialogFooter>
                                <Button type="submit">Save Assignment</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Class</TableHead>
                                    <TableHead>Due Date</TableHead>
                                    <TableHead>Submissions</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {assignments.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{item.title}</TableCell>
                                        <TableCell>{item.class}</TableCell>
                                        <TableCell>{item.dueDate}</TableCell>
                                        <TableCell><Badge variant="secondary">{item.submitted} / {item.total}</Badge></TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">Grade</Button>
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
