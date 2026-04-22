import { cn } from '../utils/cn'

export function Stat({ label, value, icon, trend, trendDirection = 'up' }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-600">{label}</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
          {trend && (
            <p className={cn(
              'mt-2 text-sm font-medium',
              trendDirection === 'up' ? 'text-green-600' : 'text-red-600'
            )}>
              {trendDirection === 'up' ? '↑' : '↓'} {trend}
            </p>
          )}
        </div>
        {icon && <span className="text-3xl">{icon}</span>}
      </div>
    </div>
  )
}
