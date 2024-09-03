import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request){
    try {
        const body = await req.json();
        const {id, email_addresses, first_name } = body?.data;
        const email = email_addresses[0]?.email_address;
        console.log( body );

        await db.user.upsert({
            where: {
                clerkId: id
            },
            update: {
                email,
                name: first_name,

            },
            create: {
                clerkId: id,
                email,
                name: first_name || '',

            }
        })
        return new NextResponse('User updated in database successfully', {
            status: 200
        });
    } catch (error) {
         console.log('error updating database: ', error)
         return new NextResponse('error updating user in databse', { status: 500 })
    }
}