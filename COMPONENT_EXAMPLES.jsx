/**
 * Quick Start Examples for shadcn Dashboard Components
 * Copy and paste these examples directly into your components
 */

// ============================================
// 1. BASIC CARD EXAMPLE
// ============================================
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './Card'

export function BasicCardExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Your content goes here</p>
      </CardContent>
    </Card>
  )
}

// ============================================
// 2. STATS OVERVIEW
// ============================================
import { Stat } from './Stat'

export function StatsOverviewExample() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Stat
        label="Total Consultations"
        value="156"
        icon="🩺"
        trend="12% from last month"
        trendDirection="up"
      />
      <Stat
        label="Avg Response Time"
        value="2.4hrs"
        icon="⏱️"
        trend="8% faster"
        trendDirection="up"
      />
      <Stat
        label="Patient Satisfaction"
        value="94%"
        icon="⭐"
        trend="2% improvement"
        trendDirection="up"
      />
    </div>
  )
}

// ============================================
// 3. FORM WITH BUTTONS
// ============================================
import { Button } from './Button'
import { Alert } from './Alert'

export function FormExampleWithButtons() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Settings</CardTitle>
        <CardDescription>Update your profile information</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-900">Name</label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-900">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              placeholder="Enter your email"
            />
          </div>

          <Alert
            variant="info"
            icon="ℹ️"
            title="Tip"
            description="Your information will be saved securely"
          />

          <div className="flex gap-2 pt-4">
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
            <Button variant="secondary" type="button">
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

// ============================================
// 4. DATA TABLE EXAMPLE
// ============================================
import { Badge } from './Badge'

export function DataTableExample() {
  const data = [
    { id: 1, name: 'John Doe', status: 'active', severity: 'Mild' },
    { id: 2, name: 'Jane Smith', status: 'completed', severity: 'Moderate' },
    { id: 3, name: 'Mike Johnson', status: 'pending', severity: 'Severe' },
  ]

  const getStatusBadge = (status) => {
    const variants = {
      active: 'primary',
      completed: 'success',
      pending: 'warning',
    }
    return variants[status] || 'default'
  }

  const getSeverityBadge = (severity) => {
    const variants = {
      Mild: 'success',
      Moderate: 'warning',
      Severe: 'danger',
    }
    return variants[severity] || 'default'
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Consultations</CardTitle>
        <CardDescription>Recent client consultations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Status</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Severity</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="px-4 py-4 text-sm text-slate-900">{row.name}</td>
                  <td className="px-4 py-4">
                    <Badge variant={getStatusBadge(row.status)}>{row.status}</Badge>
                  </td>
                  <td className="px-4 py-4">
                    <Badge variant={getSeverityBadge(row.severity)}>{row.severity}</Badge>
                  </td>
                  <td className="px-4 py-4">
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

// ============================================
// 5. MULTI-COLUMN GRID LAYOUT
// ============================================
export function DashboardGridExample() {
  return (
    <div className="space-y-6">
      {/* Top Row - Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Stat label="Total" value="1,234" icon="📊" />
        <Stat label="Active" value="567" icon="✓" />
        <Stat label="Pending" value="89" icon="⏳" />
        <Stat label="Failed" value="12" icon="✕" />
      </div>

      {/* Middle Row - Content Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
            <CardDescription>Key metrics overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Vata Balance</span>
                <span className="font-semibold">65%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200">
                <div className="h-full w-[65%] rounded-full bg-blue-500"></div>
              </div>

              <div className="flex justify-between">
                <span>Pitta Balance</span>
                <span className="font-semibold">40%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200">
                <div className="h-full w-[40%] rounded-full bg-orange-500"></div>
              </div>

              <div className="flex justify-between">
                <span>Kapha Balance</span>
                <span className="font-semibold">55%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200">
                <div className="h-full w-[55%] rounded-full bg-green-500"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
            <CardDescription>Common operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button className="w-full justify-start" variant="primary" size="lg">
                📝 New Assessment
              </Button>
              <Button className="w-full justify-start" variant="secondary" size="lg">
                📊 View Reports
              </Button>
              <Button className="w-full justify-start" variant="secondary" size="lg">
                📋 Export Data
              </Button>
              <Button className="w-full justify-start" variant="outline" size="lg">
                ⚙️ Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row - Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Latest alerts and messages</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Alert variant="info" icon="ℹ️" title="Info" description="New update available" />
          <Alert variant="warning" icon="⚠️" title="Warning" description="Please verify your settings" />
        </CardContent>
      </Card>
    </div>
  )
}

// ============================================
// 6. RESPONSIVE GRID
// ============================================
export function ResponsiveGridExample() {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <Card key={item}>
          <CardHeader>
            <CardTitle>Card {item}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">Item content goes here</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

// ============================================
// 7. USING COMPONENTS TOGETHER
// ============================================
export function CompleteExample() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="mt-2 text-slate-600">Welcome back! Here's your health overview.</p>
      </div>

      {/* Stats Row */}
      <StatsOverviewExample />

      {/* Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        <DataTableExample />
        <FormExampleWithButtons />
      </div>

      {/* Bottom Section */}
      <DashboardGridExample />
    </div>
  )
}
