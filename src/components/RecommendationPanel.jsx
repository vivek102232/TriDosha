function RecommendationPanel({ selectedSymptom, recommendation }) {
  if (!selectedSymptom) {
    return (
      <div className="rounded-2xl bg-white/95 p-6 shadow-xl ring-1 ring-slate-200">
        <h2 className="text-xl font-semibold text-slate-900">Recommendation Engine</h2>
        <p className="mt-3 text-slate-600">
          Your personalized preventive guidance appears here after symptom analysis.
        </p>
      </div>
    )
  }

  if (!recommendation) {
    return (
      <div className="rounded-2xl bg-white/95 p-6 shadow-xl ring-1 ring-amber-200">
        <h2 className="text-xl font-semibold text-slate-900">Recommendation Engine</h2>
        <p className="mt-3 text-slate-700">
          No dataset entry found for <span className="font-semibold">{selectedSymptom}</span>.
        </p>
        <p className="mt-1 text-sm text-slate-600">
          Try one of the known symptoms: cold, fever, fatigue, headache.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl bg-white/95 p-6 shadow-xl ring-1 ring-emerald-200">
      <h2 className="text-xl font-semibold text-slate-900">Recommendation Engine</h2>
      <p className="mt-1 text-sm text-slate-600">
        Guidance for <span className="font-semibold text-slate-800">{selectedSymptom}</span>
      </p>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <ListBlock title="Remedies" items={recommendation.remedies} />
        <ListBlock title="Diet" items={recommendation.diet} />
        <ListBlock title="Precautions" items={recommendation.precautions} />
      </div>
    </div>
  )
}

function ListBlock({ title, items }) {
  return (
    <div className="rounded-xl bg-emerald-50 p-4">
      <h3 className="font-semibold text-emerald-900">{title}</h3>
      <ul className="mt-2 space-y-2 text-sm text-emerald-950">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-700" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecommendationPanel
