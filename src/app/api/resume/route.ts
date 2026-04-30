import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'resume.pdf')
  const fileBuffer = await readFile(filePath)

  return new NextResponse(fileBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Rishii-Kumar-Singh_Resume.pdf"',
    },
  })
}
