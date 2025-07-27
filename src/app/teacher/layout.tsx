'use client';

import {
  BookCopy,
  BookMarked,
  ClipboardCheck,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from '@/components/icons/Logo';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarFooter,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const navItems = [
  { href: '/teacher/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/teacher/classes', label: 'My Classes', icon: BookCopy },
  { href: '/teacher/attendance', label: 'Attendance', icon: ClipboardCheck },
  { href: '/teacher/results', label: 'Results', icon: GraduationCap },
  { href: '/teacher/assignments', label: 'Assignments', icon: BookMarked },
  { href: '/teacher/communication', label: 'Communication', icon: MessageSquare },
];

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-8 text-primary" />
            <span className="font-bold text-lg font-headline text-sidebar-foreground">
              CampusConnect
            </span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname.startsWith(item.href)}
                  tooltip={item.label}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarSeparator />
        <SidebarFooter>
          <SidebarMenu>
             <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <Link href="/">
                        <div className="flex items-center gap-3">
                             <Avatar className="h-8 w-8">
                                <AvatarImage src="https://placehold.co/40x40" alt="Teacher" />
                                <AvatarFallback>T</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col text-left">
                                <span className="text-sm font-semibold">Teacher User</span>
                                <span className="text-xs text-muted-foreground">teacher@example.com</span>
                            </div>
                        </div>
                    </Link>
                </SidebarMenuButton>
             </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
