import { Save } from 'lucide-react';
import { DashboardHeader } from '@/components/common/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const students = ["Liam Johnson", "Noah Williams", "Oliver Jones", "Elijah Brown", "James Davis"];

export default function TeacherResultsPage() {
    return (
        <div className="flex flex-col">
            <DashboardHeader title="Results Management" />
            <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Enter Student Grades</CardTitle>
                        <CardDescription>Select a class and exam to input student marks.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                            <div className="flex-1 w-full">
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a class" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="g10a">Grade 10 - Section A</SelectItem>
                                        <SelectItem value="g10b">Grade 10 - Section B</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex-1 w-full">
                                 <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select an exam" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="midterm">Mid-Term Examination</SelectItem>
                                        <SelectItem value="final">Final Examination</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Student Name</TableHead>
                                    <TableHead className="w-48 text-right">Marks (out of 100)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {students.map((student, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{student}</TableCell>
                                        <TableCell className="text-right">
                                            <Input type="number" min="0" max="100" className="w-32 ml-auto" placeholder="e.g., 85" />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <div className="flex justify-end mt-6">
                            <Button>
                                <Save className="mr-2 h-4 w-4" />
                                Save Results
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
