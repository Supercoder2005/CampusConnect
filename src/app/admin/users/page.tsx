import { DashboardHeader } from '@/components/common/DashboardHeader';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { UserList } from './UserList';
import { AddUserDialog } from './AddUserDialog';

export default function UserManagementPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader title="User Management" />
      <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
                <CardTitle>Users</CardTitle>
                <CardDescription>
                Manage all student, teacher, and parent accounts.
                </CardDescription>
            </div>
            <AddUserDialog />
          </CardHeader>
          <CardContent>
            <UserList />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
