export function DeleteConfirm() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-sm rounded-xl bg-slate-800 border border-slate-700 p-6 shadow-2xl">
        <h3 className="mb-2 text-lg font-semibold text-white">
          Delete post?
        </h3>
        <p className="mb-6 text-sm text-slate-300">
          This will permanently delete post #1. You can't undo this.
        </p>
        <div className="flex justify-end gap-2">
          <button className="cursor-pointer rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-600 transition">
            Cancel
          </button>
          <button className="cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition">
            Delete post
          </button>
        </div>
      </div>
    </div>
  );
}
