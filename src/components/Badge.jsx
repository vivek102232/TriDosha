import { cn } from '../utils/cn'

const badgeVariants = {
  default: 'bg-slate-100 text-slate-900',
  primary: 'bg-blue-100 text-blue-900',
  success: 'bg-green-100 text-green-900',
  warning: 'bg-yellow-100 text-yellow-900',
  danger: 'bg-red-100 text-red-900',
}

export function Badge({ children, variant = 'default', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
