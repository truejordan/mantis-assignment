import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'blocks.json');
    
    const data = await fs.readFile(filePath, 'utf-8');
    
    const jsonData = JSON.parse(data);

    return NextResponse.json(jsonData);
  } catch (error) {
    return NextResponse.json({ error: `Failed to fetch data: ${error}` }, { status: 500 });
  }
}
