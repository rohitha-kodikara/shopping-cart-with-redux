export function UpdatePost() {
  return (
    <div className="min-h-screen mx-auto max-w-xl p-6 bg-slate-900 text-white">
      <button className="mb-4 cursor-pointer text-sm text-slate-300 hover:text-white transition">
        &larr; Back to posts
      </button>

      <div className="rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-xl">
        <h2 className="mb-1 text-xl font-semibold text-white">
          Update post
        </h2>
        <p className="mb-6 text-sm text-slate-400">Editing post #1</p>

        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-300">
              User ID
            </label>
            <input
              type="number"
              className="w-full cursor-not-allowed rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-sm text-slate-400"
              disabled
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-300">
              Title
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-900/50"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-300">
              Body
            </label>
            <textarea
              rows={5}
              className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-900/50"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button className="cursor-pointer rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-600 transition">
            Cancel
          </button>
          <button className="cursor-pointer rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
