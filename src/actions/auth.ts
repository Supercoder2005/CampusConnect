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
        const q = query(adminRef, where('email', '==', email));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            console.log('No matching admin found');
            return false;
        }

        const adminDoc = querySnapshot.docs[0];
        const adminData = adminDoc.data();

        if (adminData.password === password) {
            return true;
        } else {
            console.log('Password does not match');
            return false;
        }
    } catch (error) {
        console.error("Error verifying admin credentials:", error);
        return false;
    }
}
