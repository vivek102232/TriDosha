function ReportSection({ history, patterns }) {
  const allSymptoms = history.map((entry) => entry.symptom)

  return (
    <div className="rounded-2xl bg-white/95 p-6 shadow-xl ring-1 ring-slate-200">
      <h2 className="text-xl font-semibold text-slate-900">Report Section</h2>
      <p className="mt-1 text-sm text-slate-600">
        Preventive summary based on your tracked symptom history.
      </p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-sky-50 p-4">
          <h3 className="font-semibold text-sky-900">All Symptoms</h3>
          {allSymptoms.length === 0 ? (
            <p className="mt-2 text-sm text-slate-700">No symptoms recorded.</p>
          ) : (
            <p className="mt-2 text-sm text-slate-700">{allSymptoms.join(", ")}</p>
          )}
        </div>

        <div className="rounded-xl bg-amber-50 p-4">
          <h3 className="font-semibold text-amber-900">Detected Patterns</h3>
          {patterns.length === 0 ? (
            <p className="mt-2 text-sm text-slate-700">No repeated patterns found.</p>
          ) : (
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              {patterns.map((warning) => (
                <li key={warning}>- {warning}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default ReportSection
