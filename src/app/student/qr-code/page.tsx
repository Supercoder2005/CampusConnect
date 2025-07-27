import Image from 'next/image';
import { DashboardHeader } from '@/components/common/DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function StudentQrCodePage() {
    return (
        <div className="flex flex-col">
            <DashboardHeader title="My QR Code" />
            <main className="flex-1 flex items-center justify-center p-4 md:p-8">
                <Card className="w-full max-w-sm text-center shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl font-headline">Liam Johnson</CardTitle>
                        <CardDescription>Scan this QR code to mark your attendance.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center gap-4">
                        <div className="p-4 bg-white rounded-lg">
                            <Image 
                                src="https://placehold.co/256x256.png"
                                data-ai-hint="qr code"
                                alt="Student QR Code"
                                width={256}
                                height={256}
                            />
                        </div>
                        <p className="text-sm text-muted-foreground">
                            This code is unique to you. Do not share it with others.
                        </p>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
