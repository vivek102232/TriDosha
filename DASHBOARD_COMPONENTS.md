# TriDosha Dashboard Components

A modern dashboard with shadcn-inspired components built with React, Tailwind CSS, and Vite.

## Overview

This project includes a fully featured dashboard with a collapsible sidebar and a collection of reusable UI components inspired by shadcn/ui.

## Components

### 1. **Sidebar**
Collapsible navigation sidebar with menu items and logout functionality.

```jsx
import { Sidebar } from './components/Sidebar'

export function App() {
  return <Sidebar />
}
```

**Features:**
- Collapsible/expandable states
- Active route highlighting
- Menu items with icons
- Logout button

---

### 2. **Card Components**
Card wrapper and sub-components for grouping content.

```jsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/Card'

export function MyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        Your content here
      </CardContent>
      <CardFooter>
        Footer content
      </CardFooter>
    </Card>
  )
}
```

**Sub-components:**
- `Card` - Main container
- `CardHeader` - Header section
- `CardTitle` - Title text
- `CardDescription` - Subtitle/description text
- `CardContent` - Main content area
- `CardFooter` - Footer section

---

### 3. **Button**
Versatile button component with multiple variants and sizes.

```jsx
import { Button } from './components/Button'

export function MyButtons() {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="outline">Outline</Button>
      
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </>
  )
}
```

**Props:**
- `variant` - `primary` | `secondary` | `danger` | `outline`
- `size` - `sm` | `md` | `lg`

---

### 4. **Badge**
Small label component for tags and status indicators.

```jsx
import { Badge } from './components/Badge'

export function MyBadges() {
  return (
    <>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
    </>
  )
}
```

**Variants:** `default`, `primary`, `success`, `warning`, `danger`

---

### 5. **Stat**
Statistics card for displaying key metrics.

```jsx
import { Stat } from './components/Stat'

export function MyStats() {
  return (
    <Stat
      label="Total Users"
      value="2,543"
      icon="👥"
      trend="12% increase"
      trendDirection="up"
    />
  )
}
```

**Props:**
- `label` - Stat label text
- `value` - Main value to display
- `icon` - Emoji or icon
- `trend` - Trend text
- `trendDirection` - `up` | `down`

---

### 6. **Alert**
Alert message component for notifications and warnings.

```jsx
import { Alert } from './components/Alert'

export function MyAlerts() {
  return (
    <>
      <Alert variant="info" icon="ℹ️" title="Info" description="Info message" />
      <Alert variant="success" icon="✓" title="Success" description="Success message" />
      <Alert variant="warning" icon="⚠️" title="Warning" description="Warning message" />
      <Alert variant="error" icon="✕" title="Error" description="Error message" />
    </>
  )
}
```

**Variants:** `default`, `info`, `success`, `warning`, `error`

---

### 7. **DashboardLayout**
Wrapper component that includes the sidebar layout.

```jsx
import { DashboardLayout } from './components/DashboardLayout'

export function Dashboard() {
  return (
    <DashboardLayout>
      <h1>Your Dashboard Content</h1>
    </DashboardLayout>
  )
}
```

---

## Utility Functions

### `cn()` - Class Name Utility
Merge class names intelligently (handles Tailwind conflicts).

```jsx
import { cn } from './utils/cn'

const className = cn('px-4 py-2', condition && 'bg-blue-600')
```

---

## Usage Example

Complete dashboard page example:

```jsx
import { Card, CardHeader, CardTitle, CardContent } from './components/Card'
import { Button } from './components/Button'
import { Stat } from './components/Stat'
import { Badge } from './components/Badge'

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Stat label="Users" value="1,234" icon="👥" />
        <Stat label="Revenue" value="$45K" icon="💰" />
        <Stat label="Active" value="89%" icon="📊" />
      </div>

      {/* Content Card */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>New user signup</span>
              <Badge variant="success">New</Badge>
            </div>
            <div className="flex justify-between">
              <span>Payment received</span>
              <Badge variant="primary">Payment</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex gap-2">
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Cancel</Button>
      </div>
    </div>
  )
}
```

---

## Installation & Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. The shadcn components are already integrated and ready to use.

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## Tailwind CSS Configuration

All components use Tailwind CSS with the following utilities:
- Responsive design (md, lg breakpoints)
- Color palette
- Spacing and sizing
- Shadows and borders

The Tailwind configuration is managed by `@tailwindcss/vite` in `vite.config.js`.

---

## Component Demo

A comprehensive component showcase is available in `ComponentDemo.jsx`:

```jsx
import { ComponentDemo } from './components/ComponentDemo'

export function DemoPage() {
  return <ComponentDemo />
}
```

This displays all components with examples of their variants and usage patterns.

---

## Customization

### Modifying Variants

Edit component files to add or modify variants:

```jsx
// src/components/Button.jsx
const buttonVariants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
  // Add your custom variant here
  custom: 'bg-purple-600 text-white hover:bg-purple-700',
}
```

### Modifying Colors

Update the Tailwind color classes in component files. Colors are defined using standard Tailwind classes:
- `bg-slate-*` - Background
- `text-*` - Text color
- `border-*` - Border color
- `hover:bg-*` - Hover state

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

---

## License

MIT
