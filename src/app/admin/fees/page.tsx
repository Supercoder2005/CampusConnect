'use client';

import { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot, Timestamp, addDoc } from 'firebase/firestore';
import { PlusCircle, Search } from 'lucide-react';
import { DashboardHeader } from '@/components/common/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { db } from '@/lib/firebase';

type FeeRecord = {
  id: string;
  student: string;
  invoiceId: string;
  amount: string;
  status: 'Paid' | 'Overdue' | 'Pending';
  dueDate: string;
};

export default function FeeManagementPage() {
    const [feeRecords, setFeeRecords] = useState<FeeRecord[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, 'fees'), orderBy('dueDate'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const records: FeeRecord[] = [];
            querySnapshot.forEach((doc) => {
                records.push({ id: doc.id, ...doc.data() } as FeeRecord);
            });
            setFeeRecords(records);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching fees: ", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

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
                                {loading ? (
                                    Array.from({ length: 5 }).map((_, i) => (
                                        <TableRow key={i}>
                                            <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                                            <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                                            <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                                            <TableCell><Skeleton className="h-6 w-20 rounded-full" /></TableCell>
                                            <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                                            <TableCell className="text-right"><Skeleton className="h-8 w-16 ml-auto" /></TableCell>
                                        </TableRow>
                                    ))
                                ) : feeRecords.length > 0 ? (
                                    feeRecords.map((record) => (
                                        <TableRow key={record.id}>
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
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={6} className="h-24 text-center">
                                            No fee records found.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
