'use server';

import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

type Credentials = {
    email: string;
    password?: string;
}

export async function verifyAdminCredentials({ email, password }: Credentials): Promise<boolean> {
    try {
        if (!email || !password) {
            console.log('Login failed: Email or password not provided.');
            return false;
        }

        const adminRef = collection(db, 'admin');
        const q = query(
            adminRef,
            where('credentialName', '==', email),
            where('credentialPassword', '==', password)
        );
        
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            console.log(`Login failed: No matching admin found for email: ${email}`);
            return false;
        }

        console.log(`Login successful: Found admin with email: ${email}`);
        return true;

    } catch (error) {
        console.error("Error verifying admin credentials:", error);
        return false;
    }
}
