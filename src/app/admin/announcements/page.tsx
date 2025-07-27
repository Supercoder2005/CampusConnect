import { generateAnnouncement } from '@/ai/flows/announcement-generator';
import { DashboardHeader } from '@/components/common/DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AnnouncementGenerator from './AnnouncementGenerator';

export default function AnnouncementsPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader title="Announcements" />
      <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>AI Announcement Generator</CardTitle>
                <CardDescription>
                  Create school-wide announcements with the help of AI. Just provide a brief description.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AnnouncementGenerator generate={generateAnnouncement} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Published Announcements</CardTitle>
                <CardDescription>
                  View and manage previously published announcements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center text-muted-foreground py-8">
                  <p>No announcements published yet.</p>
                </div>
              </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
}
