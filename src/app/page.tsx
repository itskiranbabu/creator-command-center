'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Creator Command Center</h1>
          <p className="text-xl text-gray-300 mb-8">AI-powered automation for content creators</p>
          <Link href="/dashboard">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold">
              Go to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
