import { PlusCircle, Search } from 'lucide-react';
import { DashboardHeader } from '@/components/common/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const feeRecords = [
    { student: "Liam Johnson", invoiceId: "INV-1023", amount: "$500", status: "Paid", dueDate: "2024-09-01" },
    { student: "Noah Williams", invoiceId: "INV-1024", amount: "$500", status: "Paid", dueDate: "2024-09-01" },
    { student: "Ava Miller", invoiceId: "INV-1025", amount: "$500", status: "Overdue", dueDate: "2024-09-01" },
    { student: "Elijah Davis", invoiceId: "INV-1026", amount: "$500", status: "Pending", dueDate: "2024-10-01" },
    { student: "Charlotte Garcia", invoiceId: "INV-1027", amount: "$500", status: "Paid", dueDate: "2024-09-01" },
];

export default function FeeManagementPage() {
    return (
        <div className="flex flex-col">
            <DashboardHeader title="Fee Management" />
            <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Student Fees</CardTitle>
                        <CardDescription>Manage invoices, track payments, and send reminders.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between gap-4 mb-6">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="Search by student or invoice ID..." className="pl-10" />
                            </div>
                            <Button>
                                <PlusCircle className="mr-2 h-4 w-4" />
                                Generate Invoice
                            </Button>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Student</TableHead>
                                    <TableHead>Invoice ID</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Due Date</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {feeRecords.map((record, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{record.student}</TableCell>
                                        <TableCell>{record.invoiceId}</TableCell>
                                        <TableCell>{record.amount}</TableCell>
                                        <TableCell>
                                            <Badge 
                                                variant={record.status === 'Paid' ? 'default' : (record.status === 'Overdue' ? 'destructive' : 'outline')}
                                                className={record.status === 'Paid' ? 'bg-green-500/20 text-green-700 border-green-500/20' : ''}
                                            >
                                                {record.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{record.dueDate}</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">View</Button>
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
