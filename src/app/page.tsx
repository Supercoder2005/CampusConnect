'use client';

import { School, UserCog, History, User, GraduationCap, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Logo from '@/components/icons/Logo';
import { useToast } from '@/hooks/use-toast';
import { verifyAdminCredentials } from '@/actions/auth';

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState('srinjinee@campusconnect.edu');
  const [password, setPassword] = useState('admin@123');
  const [isLoading, setIsLoading] = useState(false);


  const handleLogin = async (role: 'admin' | 'teacher' | 'student' | 'parent') => {
    if (role === 'admin') {
      setIsLoading(true);
      try {
        const isValid = await verifyAdminCredentials({ email, password });
        if (isValid) {
          router.push('/admin/dashboard');
        } else {
          toast({
            variant: "destructive",
            title: "Login Failed",
            description: "Invalid credentials for admin.",
          });
        }
      } catch (error) {
        toast({
            variant: "destructive",
            title: "Login Error",
            description: "An error occurred during login. Please try again.",
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      router.push(`/${role}/dashboard`);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-4xl">
        <Card className="grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl">
          <div className="bg-sidebar text-sidebar-foreground p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Logo className="h-10 w-10 text-primary" />
                <h1 className="text-3xl font-bold font-headline text-sidebar-foreground">
                  CampusConnect
                </h1>
              </div>
              <p className="text-sidebar-foreground/80">
                Revolutionizing school management for a seamless educational experience.
              </p>
            </div>
            <div className="hidden md:block mt-8">
              <p className="text-sm text-sidebar-foreground/60">© {new Date().getFullYear()} CampusConnect. All rights reserved.</p>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl font-bold font-headline">Welcome Back</CardTitle>
              <CardDescription>
                Select a role to enter the dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="user@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <Button onClick={() => handleLogin('admin')} className="w-full" disabled={isLoading}>
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <UserCog className="mr-2 h-4 w-4" />}
                  Login as Admin
                </Button>
                <Button onClick={() => handleLogin('teacher')} className="w-full">
                  <GraduationCap className="mr-2 h-4 w-4" /> Login as Teacher
                </Button>
                <Button onClick={() => handleLogin('student')} className="w-full">
                  <User className="mr-2 h-4 w-4" /> Login as Student
                </Button>
                <Button onClick={() => handleLogin('parent')} className="w-full">
                   <User className="mr-2 h-4 w-4" /> Login as Parent
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
}
