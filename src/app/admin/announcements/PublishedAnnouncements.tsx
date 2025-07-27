'use client';

import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Skeleton } from '@/components/ui/skeleton';

type Announcement = {
  id: string;
  announcementText: string;
  createdAt: Timestamp;
};

export function PublishedAnnouncements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'announcements'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const announcementsData: Announcement[] = [];
        querySnapshot.forEach((doc) => {
          announcementsData.push({ id: doc.id, ...doc.data() } as Announcement);
        });
        setAnnouncements(announcementsData);
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching announcements: ', error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
      </div>
    );
  }

  if (announcements.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        <p>No announcements published yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
      {announcements.map((announcement) => (
        <div key={announcement.id} className="p-4 rounded-lg bg-secondary">
          <p className="text-sm text-secondary-foreground">
            {announcement.announcementText}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            {announcement.createdAt.toDate().toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}
