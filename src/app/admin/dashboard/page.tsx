import { DollarSign, Users, UserCheck, Megaphone } from 'lucide-react';
import { DashboardHeader } from '@/components/common/DashboardHeader';
import { StatCard } from '@/components/common/StatCard';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';


const recentAnnouncements = [
    { id: 1, title: "Annual Sports Day", date: "2024-09-15", author: "Mr. Smith" },
    { id: 2, title: "Parent-Teacher Meeting", date: "2024-09-10", author: "Admin" },
    { id: 3, title: "Science Fair Registration", date: "2024-09-05", author: "Ms. Jones" },
]

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader title="Admin Dashboard" />
      <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Students" value="1,254" icon={Users} helperText="+20.1% from last month" />
          <StatCard title="Teacher Presence" value="98%" icon={UserCheck} helperText="Daily average" />
          <StatCard title="Total Revenue" value="$54,231.89" icon={DollarSign} helperText="+12.2% from last month" />
          <StatCard title="Announcements" value="3 New" icon={Megaphone} helperText="This week" />
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Recent Announcements</CardTitle>
                <CardDescription>A quick look at the latest school-wide updates.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {recentAnnouncements.map((ann) => (
                        <TableRow key={ann.id}>
                            <TableCell className="font-medium">{ann.title}</TableCell>
                            <TableCell>{ann.author}</TableCell>
                            <TableCell>{ann.date}</TableCell>
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
