import { UserCheck, GraduationCap, Megaphone } from 'lucide-react';
import { DashboardHeader } from '@/components/common/DashboardHeader';
import { StatCard } from '@/components/common/StatCard';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ParentDashboardPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader title="Parent Dashboard" />
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
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <StatCard title="Today's Attendance" value="Present" icon={UserCheck} helperText="Marked at 8:55 AM" />
            <StatCard title="Recent Grade" value="A-" icon={GraduationCap} helperText="Mathematics Mid-Term" />
            <StatCard title="Latest Announcement" value="Annual Sports Day" icon={Megaphone} helperText="Published on 2024-09-15" />
        </div>
      </main>
    </div>
  );
}
