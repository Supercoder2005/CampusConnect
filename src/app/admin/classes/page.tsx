import { DashboardHeader } from '@/components/common/DashboardHeader';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ClassList } from './ClassList';
import { CreateClassDialog } from './CreateClassDialog';

export default function ClassManagementPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader title="Class Management" />
      <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Classes</CardTitle>
              <CardDescription>Create, edit, and assign teachers to classes.</CardDescription>
            </div>
            <CreateClassDialog />
          </CardHeader>
          <CardContent>
            <ClassList />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
