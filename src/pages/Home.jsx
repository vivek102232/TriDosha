import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import * as THREE from "three"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_50%_35%,#dcfce7_0%,#f0fdf4_45%,#ffffff_85%)] px-4 py-5 md:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-emerald-100/70 bg-white/80 shadow-[0_24px_80px_-30px_rgba(21,128,61,0.45)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-emerald-200/35 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-lime-200/30 blur-3xl" />
          <div className="absolute bottom-8 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-300/25 blur-3xl" />
        </div> 

        <Navbar />

        <HeroSection />
        <LandingSections />
        <Footer />
      </div>
    </main>
  )
}

function HeroSection() {
  return (
    <section className="relative px-4 pb-8 pt-12 md:px-8 md:pb-10">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
        className="relative grid items-center gap-10 md:grid-cols-2"
      >
        <motion.div variants={fadeUp} className="relative mx-auto mt-2 w-full max-w-[430px] md:order-2 md:mt-0">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/50 blur-3xl" />

          <div className="group relative mx-auto h-[360px] w-[320px] md:h-[430px] md:w-[430px]">
            <FloatingTag
              label="Online Consultations"
              className="left-1 top-8 md:-left-10"
            />
            <FloatingTag
              label="Wellness Products"
              className="left-4 top-44 md:-left-6"
            />
            <FloatingTag
              label="Health Supplements"
              className="right-1 top-8 md:-right-10"
            />
            <FloatingTag
              label="Medication Delivery"
              className="right-4 top-44 md:-right-6"
            />

            <motion.div
              variants={fadeUp}
              className="relative h-[360px] w-[320px] md:h-[430px] md:w-[430px]"
            >
              <DnaHelix />
            </motion.div>
          </div>
        </motion.div>

        <div className="md:order-1">
          <motion.h1
            variants={fadeUp}
            className="max-w-2xl text-left text-4xl font-bold leading-tight text-slate-800 md:text-6xl"
          >
            YOUR HEALTH, OUR PRIORITY -
            <br />
            PREVENTIVE HEALTH MADE SIMPLE
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-left text-lg text-slate-600"
          >
            Affordable health guidance and daily wellness solutions powered by intelligent Ayurvedic
            logic.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 grid gap-4 md:grid-cols-2">
            <StatsCard />
            <SatisfactionCard />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function LandingSections() {
  return (
    <div className="px-4 pb-8 md:px-8 md:pb-12">
      <MissionSection />
      <HowItWorksSection />
      <AyurvedaLogicSection />
      <FeaturesSection />
      <DemoSection />
      <BenefitsSection />
      <StatsSection />
      <FinalCtaSection />
    </div>
  )
}

function MissionSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer}
      className="mt-16 grid gap-8 rounded-3xl border border-emerald-100/60 bg-white/70 p-6 shadow-sm md:grid-cols-2 md:p-8"
    >
      <motion.div variants={fadeUp}>
        <p className="text-xs font-semibold tracking-[0.2em] text-emerald-700">OUR MISSION</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-800 md:text-4xl">
          Rethinking Healthcare with Prevention First
        </h2>
        <p className="mt-4 text-slate-600">
          Most people ignore mild symptoms until they become bigger health issues. TriDosha AI
          promotes early awareness through Ayurveda-inspired guidance and practical daily wellness
          actions.
        </p>
        <ul className="mt-5 space-y-3 text-slate-700">
          <li>✔ Track symptoms early</li>
          <li>✔ Use natural remedies</li>
          <li>✔ Improve daily lifestyle</li>
        </ul>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-100/80 to-white p-6"
      >
        <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-emerald-300/40 blur-2xl" />
        <div className="absolute -left-6 bottom-0 h-28 w-28 rounded-full bg-lime-300/35 blur-2xl" />
        <motion.div
          initial={{ y: 8, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative rounded-2xl border border-white/60 bg-white/70 p-5 shadow-lg backdrop-blur"
        >
          <p className="text-sm text-slate-500">Preventive Health Card</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-800">Early signals matter</h3>
          <p className="mt-2 text-sm text-slate-600">
            Small symptoms, when tracked consistently, reveal repeat patterns and help avoid
            escalation.
          </p>
          <div className="mt-4 h-2 rounded-full bg-emerald-100">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "78%" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-lime-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

function HowItWorksSection() {
  const steps = [
    { icon: "🩺", title: "Enter Symptoms", description: "Log daily mild symptoms quickly." },
    { icon: "🧠", title: "Get Smart Suggestions", description: "Receive preventive guidance." },
    { icon: "📒", title: "Track Health History", description: "Build your symptom timeline." },
    { icon: "🔁", title: "Detect Patterns", description: "Spot recurring issues early." },
  ]

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer}
      className="mt-16"
    >
      <motion.h2 variants={fadeUp} className="text-center text-3xl font-bold text-slate-800 md:text-4xl">
        How TriDosha AI Works
      </motion.h2>
      <motion.div variants={fadeUp} className="mx-auto mt-8 grid gap-4 md:grid-cols-4">
        {steps.map((step, index) => (
          <motion.article
            key={step.title}
            whileHover={{ scale: 1.03, y: -4 }}
            className="relative rounded-2xl border border-emerald-100/60 bg-white/80 p-5 shadow-sm"
          >
            {index < steps.length - 1 ? (
              <span className="pointer-events-none absolute -right-2 top-1/2 hidden h-[2px] w-4 -translate-y-1/2 bg-emerald-300 md:block" />
            ) : null}
            <p className="text-2xl">{step.icon}</p>
            <h3 className="mt-3 font-semibold text-slate-800">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{step.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  )
}

function AyurvedaLogicSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer}
      className="mt-16 grid gap-8 rounded-3xl bg-gradient-to-r from-emerald-700 to-lime-600 p-6 text-white shadow-xl md:grid-cols-2 md:p-8"
    >
      <motion.div variants={fadeUp}>
        <h2 className="text-3xl font-bold md:text-4xl">Where Ayurveda Meets Intelligent Logic</h2>
        <p className="mt-4 text-emerald-50">
          TriDosha AI is inspired by the Ayurveda principle of Vata, Pitta, and Kapha balance. It
          is not real AI diagnosis - it is a smart logic-based preventive system built to support
          routine, balance, and lifestyle correction.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="relative overflow-hidden rounded-2xl border border-white/30 bg-white/15 p-6 backdrop-blur"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_55%)]" />
        <div className="relative">
          <p className="text-sm text-emerald-50">TriDosha Balance</p>
          <h3 className="mt-2 text-2xl font-semibold">Vata • Pitta • Kapha</h3>
          <p className="mt-3 text-sm text-emerald-50">
            Daily recommendations are guided by balance signals from your symptom logs, diet
            behavior, and routine consistency.
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-white/20 p-3 text-center">Vata</div>
            <div className="rounded-xl bg-white/20 p-3 text-center">Pitta</div>
            <div className="rounded-xl bg-white/20 p-3 text-center">Kapha</div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: "💡",
      title: "Smart Recommendations",
      description: "Practical remedies, diet, and precaution suggestions from symptom inputs.",
    },
    {
      icon: "📚",
      title: "Health History Tracking",
      description: "Every symptom entry is saved to build a meaningful preventive timeline.",
    },
    {
      icon: "🔍",
      title: "Pattern Detection",
      description: "Detect repeated symptoms and get alerts to improve immunity and routine.",
    },
    {
      icon: "🌱",
      title: "Preventive Insights",
      description: "Daily signals that help you make better lifestyle choices before escalation.",
    },
  ]

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer}
      className="mt-16"
    >
      <motion.h2 variants={fadeUp} className="text-center text-3xl font-bold text-slate-800 md:text-4xl">
        Features
      </motion.h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {features.map((feature) => (
          <motion.article
            key={feature.title}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-emerald-100/60 bg-white/80 p-6 shadow-sm"
          >
            <p className="text-2xl">{feature.icon}</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-800">{feature.title}</h3>
            <p className="mt-2 text-slate-600">{feature.description}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

function DemoSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer}
      className="mt-16"
    >
      <motion.h2 variants={fadeUp} className="text-center text-3xl font-bold text-slate-800 md:text-4xl">
        See It In Action
      </motion.h2>
      <motion.div
        variants={fadeUp}
        className="mx-auto mt-8 max-w-3xl rounded-3xl border border-emerald-100/60 bg-white/80 p-6 shadow-lg"
      >
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
          cold
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <DemoList title="Remedies" items={["Warm water", "Ginger kadha", "Steam inhalation"]} />
          <DemoList title="Diet" items={["Light soups", "Turmeric", "Avoid cold food"]} />
          <DemoList title="Precautions" items={["Keep warm", "Early sleep", "Avoid cold air"]} />
        </div>
      </motion.div>
    </motion.section>
  )
}

function DemoList({ title, items }) {
  return (
    <div className="rounded-xl bg-emerald-50 p-4">
      <h3 className="font-semibold text-emerald-900">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm text-emerald-950">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </div>
  )
}

function BenefitsSection() {
  const benefits = [
    "Avoid unnecessary medicines",
    "Understand your body better",
    "Build healthy habits",
    "Detect recurring issues early",
  ]

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer}
      className="mt-16"
    >
      <motion.h2 variants={fadeUp} className="text-center text-3xl font-bold text-slate-800 md:text-4xl">
        Why Choose TriDosha AI?
      </motion.h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {benefits.map((benefit) => (
          <motion.article
            key={benefit}
            variants={fadeUp}
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-emerald-100/60 bg-white/80 p-5 shadow-sm"
          >
            <p className="text-emerald-700">✓</p>
            <p className="mt-2 font-medium text-slate-800">{benefit}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

function StatsSection() {
  const stats = [
    { target: 10000, suffix: "+", label: "symptom logs analyzed" },
    { target: 85, suffix: "%", label: "users improved habits" },
    { target: 500, suffix: "+", label: "daily users" },
  ]

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer}
      className="mt-16 rounded-3xl border border-emerald-100/60 bg-white/80 p-6 md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <motion.article key={stat.label} variants={fadeUp} className="rounded-2xl bg-emerald-50 p-5">
            <p className="text-4xl font-bold text-emerald-800">
              <Counter target={stat.target} />
              {stat.suffix}
            </p>
            <p className="mt-2 text-slate-600">{stat.label}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

function Counter({ target }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1400
    const stepTime = 20
    const increment = Math.max(1, Math.floor(target / (duration / stepTime)))

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setValue(target)
        clearInterval(timer)
      } else {
        setValue(start)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [target])

  return <>{value.toLocaleString()}</>
}

function FinalCtaSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-700 to-lime-600 p-8 text-center text-white md:p-12"
    >
      <div className="pointer-events-none absolute -top-8 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-white/25 blur-2xl" />
      <h2 className="text-3xl font-bold md:text-4xl">Start Your Preventive Health Journey Today</h2>
      <Link
        to="/login"
        className="mt-6 inline-flex rounded-full bg-white px-7 py-3 font-semibold text-emerald-800 transition hover:scale-[1.02]"
      >
        Get Started
      </Link>
    </motion.section>
  )
}

function Footer() {
  return (
    <footer className="mt-14 border-t border-emerald-100/80 px-4 pb-8 pt-8 md:px-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white">
              +
            </span>
            <p className="text-lg font-semibold text-emerald-700">TriDosha AI</p>
          </div>
          <p className="mt-3 max-w-md text-sm text-slate-600">
            Preventive healthcare platform blending Ayurvedic wisdom and intelligent logic for
            healthier daily living.
          </p>
        </div>
        <div className="flex items-start gap-10 md:justify-end">
          <div>
            <p className="font-semibold text-slate-800">Links</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} TriDosha AI. All rights reserved.</p>
    </footer>
  )
}

function DnaHelix() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mountNode = mountRef.current
    if (!mountNode) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      mountNode.clientWidth / mountNode.clientHeight,
      0.1,
      100
    )
    camera.position.z = 12

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mountNode.clientWidth, mountNode.clientHeight)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    mountNode.appendChild(renderer.domElement)

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xa7f3d0, 1.2)
    scene.add(hemiLight)
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.3)
    keyLight.position.set(3, 5, 6)
    scene.add(keyLight)

    const dnaGroup = new THREE.Group()
    scene.add(dnaGroup)

    const pointsA = []
    const pointsB = []
    const rungs = 26
    const radius = 2.2
    const height = 8
    const step = height / (rungs - 1)

    for (let i = 0; i < rungs; i += 1) {
      const t = i * 0.55
      const y = i * step - height / 2
      pointsA.push(new THREE.Vector3(Math.cos(t) * radius, y, Math.sin(t) * radius))
      pointsB.push(new THREE.Vector3(Math.cos(t + Math.PI) * radius, y, Math.sin(t + Math.PI) * radius))
    }

    const strandCurveA = new THREE.CatmullRomCurve3(pointsA)
    const strandCurveB = new THREE.CatmullRomCurve3(pointsB)

    const strandMaterialA = new THREE.MeshPhysicalMaterial({
      color: 0x16a34a,
      roughness: 0.25,
      metalness: 0.1,
      clearcoat: 0.7,
    })
    const strandMaterialB = new THREE.MeshPhysicalMaterial({
      color: 0x65a30d,
      roughness: 0.25,
      metalness: 0.1,
      clearcoat: 0.7,
    })

    const strandA = new THREE.Mesh(new THREE.TubeGeometry(strandCurveA, 140, 0.12, 14, false), strandMaterialA)
    const strandB = new THREE.Mesh(new THREE.TubeGeometry(strandCurveB, 140, 0.12, 14, false), strandMaterialB)
    dnaGroup.add(strandA, strandB)

    const rungGeometry = new THREE.CapsuleGeometry(0.06, 1.8, 4, 10)
    const rungMaterial = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.2, metalness: 0.05 })

    for (let i = 0; i < rungs; i += 1) {
      const rung = new THREE.Mesh(rungGeometry, rungMaterial)
      const start = pointsA[i]
      const end = pointsB[i]
      const middle = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5)
      rung.position.copy(middle)
      rung.lookAt(end)
      rung.rotateZ(Math.PI / 2)
      dnaGroup.add(rung)
    }

    const pointer = { x: 0, y: 0 }
    const onPointerMove = (event) => {
      const rect = mountNode.getBoundingClientRect()
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
    }
    const onPointerLeave = () => {
      pointer.x = 0
      pointer.y = 0
    }
    mountNode.addEventListener("pointermove", onPointerMove)
    mountNode.addEventListener("pointerleave", onPointerLeave)

    const onResize = () => {
      if (!mountNode) return
      camera.aspect = mountNode.clientWidth / mountNode.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mountNode.clientWidth, mountNode.clientHeight)
    }
    window.addEventListener("resize", onResize)

    let animationId = 0
    const animate = () => {
      dnaGroup.rotation.y += 0.01
      dnaGroup.rotation.x += (pointer.y * 0.35 - dnaGroup.rotation.x) * 0.06
      dnaGroup.rotation.z += (pointer.x * 0.35 - dnaGroup.rotation.z) * 0.06
      dnaGroup.position.x += (pointer.x * 0.6 - dnaGroup.position.x) * 0.08
      dnaGroup.position.y += (-pointer.y * 0.6 - dnaGroup.position.y) * 0.08
      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      mountNode.removeEventListener("pointermove", onPointerMove)
      mountNode.removeEventListener("pointerleave", onPointerLeave)
      window.removeEventListener("resize", onResize)
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose()
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((mat) => mat.dispose())
          } else {
            obj.material.dispose()
          }
        }
      })
      renderer.dispose()
      if (mountNode.contains(renderer.domElement)) mountNode.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div className="relative h-full w-full rounded-[40%] border border-white/30 bg-gradient-to-br from-emerald-200/60 via-emerald-100/70 to-lime-100/70 p-3 shadow-[0_40px_120px_-30px_rgba(16,185,129,0.55)] backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-0 rounded-[40%] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.28),transparent_65%)]" />
      <div ref={mountRef} className="relative h-full w-full overflow-hidden rounded-[36%]" />
    </div>
  )
}

function Avatar({ src }) {
  return (
    <span className="-ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-emerald-100 to-lime-100 text-sm font-semibold text-emerald-700 shadow-sm first:ml-0">
      {src}
    </span>
  )
}

function FloatingTag({ label, className }) {
  return (
    <motion.div
      whileHover={{ scale: 1.07, y: -4 }}
      transition={{ type: "spring", stiffness: 230, damping: 16 }}
      className={`absolute z-20 hidden cursor-pointer items-center gap-3 rounded-full bg-amber-50/95 px-4 py-2 text-sm text-slate-700 shadow-md shadow-amber-200/40 ring-1 ring-amber-100 md:flex ${className}`}
    >
      <span>{label}</span>
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-amber-300 to-orange-400 font-semibold text-white shadow-sm">
        +
      </span>
    </motion.div>
  )
}

function StatsCard() {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/70 bg-white/75 p-5 shadow-lg shadow-emerald-900/10 backdrop-blur"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-800">Evolving Health Solutions</h3>
          <p className="mt-2 text-sm text-slate-600">Increase in preventive health users</p>
        </div>
        <span className="text-lg text-slate-400">↗</span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm text-slate-500">0</span>
        <span className="text-2xl font-semibold text-slate-700">+12%</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-emerald-100">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "72%" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-lime-500"
        />
      </div>
      <div className="mt-1 flex justify-between text-xs text-slate-400">
        <span>25</span>
        <span>50</span>
        <span>100</span>
      </div>
    </motion.article>
  )
}

function SatisfactionCard() {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/70 bg-white/75 p-5 shadow-lg shadow-emerald-900/10 backdrop-blur"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold text-slate-800">Customer Satisfaction</h3>
        <span className="text-lg text-slate-400">↗</span>
      </div>

      <div className="mt-3">
        <div className="mb-3 inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
          +10%
        </div>
        <div className="relative h-20 rounded-xl bg-gradient-to-b from-lime-50 to-white p-3">
          <svg viewBox="0 0 300 90" className="h-full w-full">
            <path
              d="M10,70 C60,68 90,58 130,56 C170,54 200,50 240,46 C265,44 280,39 295,30"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="mt-2 flex justify-between text-xs text-slate-500">
        <span>2020</span>
        <span>2021</span>
        <span>2022</span>
        <span>2023</span>
        <span>2024</span>
      </div>
    </motion.article>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export default Home
