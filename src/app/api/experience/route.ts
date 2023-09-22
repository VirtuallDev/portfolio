import { NextRequest, NextResponse } from "next/server";
import fsPromises from 'fs/promises';
import path from 'path'

const EXP_PATH = path.join(process.cwd() + '/public/exp.json');

export async function GET() {
    try {
        const jsonData = await fsPromises.readFile(EXP_PATH, 'utf-8');
        const exps= JSON.parse(jsonData);
        return NextResponse.json(exps);
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ message: "Failed to fetch experience cards!"}), { status: 404, headers: {'content-type': 'application/json'}});
    }
}