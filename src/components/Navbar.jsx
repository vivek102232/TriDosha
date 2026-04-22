import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Logo from "./Logo"

function Navbar() {
  const navItems = ["Home", "About", "Services", "Products", "Blog"]

  return (
    <header className="sticky top-4 z-50 px-4 pt-4 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="flex items-center justify-between rounded-full border border-white/60 px-5 py-3 shadow-lg shadow-emerald-900/10 backdrop-blur-xl bg-transparent"
      >
        <Link
          to="/"
          className="rounded-full px-1 py-0.5 transition hover:bg-emerald-50/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          aria-label="Go to TriDosha AI home"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-slate-700 lg:flex">
          {navItems.map((item) => (
            <a key={item} href="#" className="transition hover:text-emerald-700">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* <button className="hidden rounded-full px-3 py-2 text-sm text-slate-700 transition hover:bg-white/70 md:block">
            Eng
          </button> */}
          <Link
            to="/login"
            className="rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02]"
          >
            Login / Register
          </Link>
        </div>
      </motion.div>
    </header>
  )
}

export default Navbar
