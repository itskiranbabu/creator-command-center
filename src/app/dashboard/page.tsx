'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [leads, setLeads] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setIsLoading(true)
        // Try to fetch leads from API
        const response = await fetch('/api/leads')
        if (response.ok) {
          const data = await response.json()
          setLeads(data)
        }
      } catch (err) {
        console.error('Error loading dashboard:', err)
        setError('Failed to load leads')
      } finally {
        setIsLoading(false)
      }
    }

    loadDashboard()
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-semibold">Loading dashboard...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-400">Creator Command Center - Lead Management</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 mb-6">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
            <div className="text-gray-400 text-sm">Total Leads</div>
            <div className="text-3xl font-bold mt-2">{leads.length}</div>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
            <div className="text-gray-400 text-sm">Qualified</div>
            <div className="text-3xl font-bold mt-2">0</div>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
            <div className="text-gray-400 text-sm">This Week</div>
            <div className="text-3xl font-bold mt-2">0</div>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
            <div className="text-gray-400 text-sm">Conversion Rate</div>
            <div className="text-3xl font-bold mt-2">0%</div>
          </div>
        </div>

        <div className="bg-slate-700/50 rounded-lg border border-slate-600 p-6">
          <h2 className="text-xl font-bold mb-4">Recent Leads</h2>
          {leads.length === 0 ? (
            <div className="text-gray-400 text-center py-8">
              <p>No leads yet</p>
              <p className="text-sm mt-2">Leads will appear here once they're captured</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-3 px-4 font-semibold">Name</th>
                    <th className="text-left py-3 px-4 font-semibold">Email</th>
                    <th className="text-left py-3 px-4 font-semibold">Source</th>
                    <th className="text-left py-3 px-4 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead: any) => (
                    <tr key={lead.id} className="border-b border-slate-600 hover:bg-slate-600/20">
                      <td className="py-3 px-4">{lead.name || 'N/A'}</td>
                      <td className="py-3 px-4">{lead.email || 'N/A'}</td>
                      <td className="py-3 px-4">{lead.source || 'N/A'}</td>
                      <td className="py-3 px-4">{new Date(lead.created_at).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
