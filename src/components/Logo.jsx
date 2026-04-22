import { motion } from "framer-motion"

function Logo({ className = "" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 260, damping: 16 }}
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <motion.svg
        whileHover={{ rotate: 6 }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
        viewBox="0 0 64 64"
        className="h-9 w-9 drop-shadow-[0_8px_16px_rgba(34,197,94,0.35)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="tridoshaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="55%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>
        </defs>

        <circle cx="32" cy="18" r="11" fill="url(#tridoshaGradient)" />
        <circle cx="18" cy="42" r="11" fill="url(#tridoshaGradient)" />
        <circle cx="46" cy="42" r="11" fill="url(#tridoshaGradient)" />

        <path
          d="M32 18C27 25 24 32 18 42M32 18C37 25 40 32 46 42M18 42C26 39 38 39 46 42"
          stroke="#dcfce7"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.9"
        />
      </motion.svg>

      <div className="leading-none">
        <p className="text-[1.05rem] font-bold tracking-[0.04em] text-slate-900 transition group-hover:text-emerald-800">
          TriDosha AI
        </p>
      </div>
    </motion.div>
  )
}

export default Logo
