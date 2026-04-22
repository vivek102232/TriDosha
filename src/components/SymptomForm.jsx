import { useMemo, useState } from "react"

function SymptomForm({ symptomOptions, onAnalyze }) {
  const [symptom, setSymptom] = useState("")
  const normalizedOptions = useMemo(
    () => symptomOptions.map((item) => item.toLowerCase()),
    [symptomOptions]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!symptom.trim()) return
    onAnalyze(symptom.trim())
    setSymptom("")
  }

  return (
    <div className="rounded-2xl bg-white/95 p-6 shadow-xl ring-1 ring-slate-200">
      <h2 className="text-xl font-semibold text-slate-900">Symptom Input</h2>
      <p className="mt-1 text-sm text-slate-600">
        Enter your symptom and get Ayurveda-aligned preventive recommendations.
      </p>

      <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
        <input
          type="text"
          value={symptom}
          onChange={(event) => setSymptom(event.target.value)}
          list="symptom-options"
          placeholder="e.g. cold, fatigue, headache"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
        />
        <datalist id="symptom-options">
          {normalizedOptions.map((option) => (
            <option key={option} value={option} />
          ))}
        </datalist>
        <button
          type="submit"
          className="w-full rounded-xl bg-slate-900 px-4 py-3 font-medium text-white transition hover:bg-slate-700"
        >
          Analyze Symptom
        </button>
      </form>
    </div>
  )
}

export default SymptomForm
