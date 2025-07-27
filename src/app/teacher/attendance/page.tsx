import { QrCode, Save } from 'lucide-react';
import { DashboardHeader } from '@/components/common/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';


const students = ["Liam Johnson", "Noah Williams", "Oliver Jones", "Elijah Brown", "James Davis"];

export default function TeacherAttendancePage() {
    return (
        <div className="flex flex-col">
            <DashboardHeader title="Take Attendance" />
            <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Attendance Sheet</CardTitle>
                        <CardDescription>Select a class and date to mark attendance.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                            <div className="flex-1 w-full">
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a class" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="g10a">Grade 10 - Section A</SelectItem>
                                        <SelectItem value="g10b">Grade 10 - Section B</SelectItem>
                                        <SelectItem value="g12a">Grade 12 - Section A</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex-1 w-full">
                                <Input type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
                            </div>
                            <Button className="w-full md:w-auto">
                                <QrCode className="mr-2 h-4 w-4" />
                                Activate QR Code
                            </Button>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Student Name</TableHead>
                                    <TableHead className="text-center">Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {students.map((student, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{student}</TableCell>
                                        <TableCell>
                                            <RadioGroup defaultValue="present" className="flex justify-center gap-4 md:gap-8">
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="present" id={`p-${index}`} />
                                                    <Label htmlFor={`p-${index}`}>Present</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="absent" id={`a-${index}`} />
                                                    <Label htmlFor={`a-${index}`}>Absent</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="late" id={`l-${index}`} />
                                                    <Label htmlFor={`l-${index}`}>Late</Label>
                                                </div>
                                            </RadioGroup>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                         <div className="flex justify-end mt-6">
                            <Button>
                                <Save className="mr-2 h-4 w-4"/>
                                Save Attendance
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
