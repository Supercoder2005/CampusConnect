'use server';

import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

type Credentials = {
    email: string;
    password?: string;
}

export async function verifyAdminCredentials({ email, password }: Credentials): Promise<boolean> {
    try {
        const adminRef = collection(db, 'admin');
        const q = query(adminRef, where('credentialName', '==', email), where('credentialPassword', '==', password));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            console.log('No matching admin found or credentials incorrect');
            return false;
        }

        return true;

    } catch (error) {
        console.error("Error verifying admin credentials:", error);
        return false;
    }
}
