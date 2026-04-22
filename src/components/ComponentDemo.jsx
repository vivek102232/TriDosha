import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/Card'
import { Button } from '../components/Button'
import { Badge } from '../components/Badge'
import { Stat } from '../components/Stat'
import { Alert } from '../components/Alert'

export function ComponentDemo() {
  return (
    <div className="space-y-8">
      {/* Section 1: Buttons */}
      <Card>
        <CardHeader>
          <CardTitle>Button Variants</CardTitle>
          <CardDescription>Different button styles and sizes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="outline">Outline</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Badges */}
      <Card>
        <CardHeader>
          <CardTitle>Badge Variants</CardTitle>
          <CardDescription>Badge color variations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Stat Cards</CardTitle>
          <CardDescription>Statistics display component</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Stat
              label="Total Users"
              value="2,543"
              icon="👥"
              trend="12% increase"
              trendDirection="up"
            />
            <Stat
              label="Active Sessions"
              value="1,234"
              icon="🔄"
              trend="8% decrease"
              trendDirection="down"
            />
            <Stat
              label="Revenue"
              value="$45,231"
              icon="💰"
              trend="23% increase"
              trendDirection="up"
            />
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Alert Variants</CardTitle>
          <CardDescription>Different alert states</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Alert
            variant="info"
            icon="ℹ️"
            title="Information"
            description="This is an informational alert message."
          />
          <Alert
            variant="success"
            icon="✓"
            title="Success"
            description="Operation completed successfully."
          />
          <Alert
            variant="warning"
            icon="⚠️"
            title="Warning"
            description="Please review this before proceeding."
          />
          <Alert
            variant="error"
            icon="✕"
            title="Error"
            description="Something went wrong. Please try again."
          />
        </CardContent>
      </Card>

      {/* Section 5: Cards with Content */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Card Example 1</CardTitle>
            <CardDescription>This is a card component</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              Cards are the fundamental building blocks for organizing information in dashboards.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Card Example 2</CardTitle>
            <CardDescription>Another card variant</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Badge variant="primary">Tag 1</Badge>
              <Badge variant="success">Tag 2</Badge>
              <Badge variant="warning">Tag 3</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
