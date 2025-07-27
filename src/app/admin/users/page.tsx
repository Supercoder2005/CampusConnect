import { PlusCircle, Search } from 'lucide-react';

import { DashboardHeader } from '@/components/common/DashboardHeader';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const users = [
  {
    name: 'Liam Johnson',
    email: 'liam@example.com',
    avatar: 'https://placehold.co/40x40.png',
    role: 'Student',
  },
  {
    name: 'Olivia Smith',
    email: 'olivia@example.com',
    avatar: 'https://placehold.co/40x40.png',
    role: 'Teacher',
  },
  {
    name: 'Noah Williams',
    email: 'noah@example.com',
    avatar: 'https://placehold.co/40x40.png',
    role: 'Student',
  },
  {
    name: 'Emma Brown',
    email: 'emma@example.com',
    avatar: 'https://placehold.co/40x40.png',
    role: 'Parent',
  },
  {
    name: 'James Jones',
    email: 'james@example.com',
    avatar: 'https://placehold.co/40x40.png',
    role: 'Teacher',
  },
];

export default function UserManagementPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader title="User Management" />
      <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>
              Manage all student, teacher, and parent accounts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search users..." className="pl-10" />
              </div>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add User
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.email}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>
                            {user.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.role === 'Teacher' ? 'default' : 'secondary'}>
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
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
