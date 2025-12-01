import { NextResponse } from 'next/server'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export async function GET() {
  try {
    if (!SUPABASE_URL || !SUPABASE_KEY) {
      return NextResponse.json(
        { error: 'Supabase credentials are missing' },
        { status: 500 }
      )
    }

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/leads?select=*&order=created_at.desc`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
        },
      }
    )

    if (!response.ok) {
      const error = await response.text()
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch leads from database' },
        { status: response.status }
      )
    }

    const leads = await response.json()
    return NextResponse.json(leads)
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
