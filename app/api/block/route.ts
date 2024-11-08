import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';
import blocks from '../../../data/blocks.json'

export async function GET() {
  try {
    // const filePath = path.join(process.cwd(), 'data', 'blocks.json');
    // console.log("Reading file from:", filePath);
    
    // // const data = await fs.readFile(filePath, 'utf-8');
    // const data = await fs.readFile(filePath, 'utf-8');
    // const jsonData = JSON.parse(data);

    console.log("Returning JSON data:", blocks);
    return NextResponse.json(blocks);
  } catch (error) {
    console.error("Error in /api/block handler:", error);
    return NextResponse.json({ error: `Failed to fetch data: ${error}` }, { status: 500 });
  }
}
