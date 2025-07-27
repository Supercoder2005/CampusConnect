import { CreditCard } from 'lucide-react';
import { DashboardHeader } from '@/components/common/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const feeHistory = [
    { invoiceId: "INV-1023", amount: "$500", status: "Paid", date: "2024-09-01", description: "Tuition Fee - Q3" },
    { invoiceId: "INV-0876", amount: "$500", status: "Paid", date: "2024-06-01", description: "Tuition Fee - Q2" },
    { invoiceId: "INV-0654", amount: "$500", status: "Paid", date: "2024-03-01", description: "Tuition Fee - Q1" },
];

export default function ParentFeesPage() {
    return (
        <div className="flex flex-col">
            <DashboardHeader title="Fee Payments" />
            <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Outstanding Balance</CardTitle>
                            <CardDescription>Next payment is due on December 1, 2024.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-4xl font-bold font-headline">$500.00</p>
                            <p className="text-muted-foreground">Tuition Fee - Q4</p>
                            <Button className="mt-4">
                                <CreditCard className="mr-2 h-4 w-4" />
                                Pay Now
                            </Button>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>Payment Methods</CardTitle>
                             <CardDescription>Your saved payment options.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                                <div className="flex items-center gap-3">
                                    <CreditCard className="h-6 w-6"/>
                                    <div>
                                        <p className="font-semibold">Visa ending in 1234</p>
                                        <p className="text-sm text-muted-foreground">Expires 12/26</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="sm">Edit</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                 <Card>
                    <CardHeader>
                        <CardTitle>Payment History</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Invoice ID</TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {feeHistory.map((item) => (
                                    <TableRow key={item.invoiceId}>
                                        <TableCell>{item.invoiceId}</TableCell>
                                        <TableCell>{item.description}</TableCell>
                                        <TableCell>{item.date}</TableCell>
                                        <TableCell>
                                            <Badge className="bg-green-500/20 text-green-700 border-green-500/20">{item.status}</Badge>
                                        </TableCell>
                                        <TableCell className="text-right font-medium">{item.amount}</TableCell>
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
