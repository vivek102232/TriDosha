import { cn } from '../utils/cn'

const alertVariants = {
  default: 'bg-slate-100 text-slate-900 border-slate-200',
  info: 'bg-blue-50 text-blue-900 border-blue-200',
  success: 'bg-green-50 text-green-900 border-green-200',
  warning: 'bg-yellow-50 text-yellow-900 border-yellow-200',
  error: 'bg-red-50 text-red-900 border-red-200',
}

const iconVariants = {
  default: 'text-slate-600',
  info: 'text-blue-600',
  success: 'text-green-600',
  warning: 'text-yellow-600',
  error: 'text-red-600',
}

export function Alert({ variant = 'default', title, description, icon, className }) {
  return (
    <div
      className={cn(
        'rounded-lg border p-4',
        alertVariants[variant],
        className
      )}
    >
      <div className="flex gap-3">
        {icon && <span className={cn('text-xl', iconVariants[variant])}>{icon}</span>}
        <div>
          {title && <p className="font-semibold">{title}</p>}
          {description && <p className="text-sm opacity-90">{description}</p>}
        </div>
      </div>
    </div>
  )
}
