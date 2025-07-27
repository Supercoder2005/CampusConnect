import { DashboardHeader } from '@/components/common/DashboardHeader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const results = {
    midTerm: [
        { subject: "Mathematics", grade: "A-", marks: "91/100" },
        { subject: "Physics", grade: "B+", marks: "88/100" },
        { subject: "English", grade: "A", marks: "95/100" },
        { subject: "Chemistry", grade: "B", marks: "82/100" },
    ],
    finalTerm: [
        { subject: "Mathematics", grade: "A", marks: "96/100" },
        { subject: "Physics", grade: "A-", marks: "92/100" },
        { subject: "English", grade: "A-", marks: "93/100" },
        { subject: "Chemistry", grade: "B+", marks: "89/100" },
    ]
};

export default function StudentResultsPage() {
    return (
        <div className="flex flex-col">
            <DashboardHeader title="My Results" />
            <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <Accordion type="single" collapsible defaultValue="item-2" className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-headline">Mid-Term Examination</AccordionTrigger>
                        <AccordionContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Subject</TableHead>
                                        <TableHead>Marks</TableHead>
                                        <TableHead className="text-right">Grade</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {results.midTerm.map((res, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium">{res.subject}</TableCell>
                                            <TableCell>{res.marks}</TableCell>
                                            <TableCell className="text-right font-bold">{res.grade}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-headline">Final Examination</AccordionTrigger>
                        <AccordionContent>
                           <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Subject</TableHead>
                                        <TableHead>Marks</TableHead>
                                        <TableHead className="text-right">Grade</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {results.finalTerm.map((res, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium">{res.subject}</TableCell>
                                            <TableCell>{res.marks}</TableCell>
                                            <TableCell className="text-right font-bold">{res.grade}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </main>
        </div>
    );
}
