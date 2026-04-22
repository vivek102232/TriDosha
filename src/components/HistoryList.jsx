function HistoryList({ history }) {
  return (
    <div className="rounded-2xl bg-white/95 p-6 shadow-xl ring-1 ring-slate-200">
      <h2 className="text-xl font-semibold text-slate-900">Health History</h2>
      {history.length === 0 ? (
        <p className="mt-3 text-slate-600">No symptom entries yet.</p>
      ) : (
        <ul className="mt-4 space-y-3">
          {history.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
            >
              <div>
                <p className="font-medium capitalize text-slate-800">{item.symptom}</p>
                <p className="text-xs text-slate-500">{item.date}</p>
              </div>
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs text-white">
                tracked
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default HistoryList
