import { NextResponse } from 'next/server';
import blocks from '../../../data/blocks.json'

export async function GET() {
  try {
    console.log("Returning JSON data:", blocks);
    return NextResponse.json(blocks);
  } catch (error) {
    console.error("Error in /api/block handler:", error);
    return NextResponse.json({ error: `Failed to fetch data: ${error}` }, { status: 500 });
  }
}
