import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DashboardHeader } from '@/components/common/DashboardHeader';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const InfoField = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between py-2">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium">{value}</span>
    </div>
);

export default function StudentProfilePage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader title="My Profile" />
      <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Card>
            <CardHeader className="flex flex-col md:flex-row items-center gap-6">
                <Avatar className="h-24 w-24">
                    <AvatarImage src="https://placehold.co/100x100.png" alt="Student Name" />
                    <AvatarFallback>SN</AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left">
                    <CardTitle className="text-2xl font-headline">Liam Johnson</CardTitle>
                    <CardDescription>Grade 10 - Section A | Roll No: 10A-23</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid gap-8 md:grid-cols-2">
                    <div>
                        <h3 className="font-semibold mb-2">Personal Information</h3>
                        <Separator />
                        <InfoField label="Email" value="liam@example.com" />
                        <InfoField label="Phone" value="+1 234 567 890" />
                        <InfoField label="Date of Birth" value="October 25, 2008" />
                        <InfoField label="Address" value="123 Education Lane, Knowledge City" />
                    </div>
                     <div>
                        <h3 className="font-semibold mb-2">Academic & Attendance</h3>
                        <Separator />
                        <InfoField label="Overall Grade" value="A-" />
                        <InfoField label="Attendance" value="95%" />
                        <InfoField label="Emergency Contact" value="Jane Johnson (Mother)" />
                         <InfoField label="Contact Phone" value="+1 098 765 4321" />
                    </div>
                </div>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
