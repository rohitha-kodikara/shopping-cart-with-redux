import Table from "./Table";

export default function PostList() {
  return (
    <div className="min-h-screen mx-auto w-full max-w-5xl px-4 py-10 bg-slate-900 text-white">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Posts
          </h1>
          <p className="mt-1 text-sm text-slate-300">
            Create, edit and delete your posts
          </p>
        </div>
        <button className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700">
          <span className="text-lg leading-none">+</span>
          Create post
        </button>
      </div>

      {/* Show ONE of these at a time, based on your Redux status */}
      {/*
      <div className="mb-6 rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-300">
        Loading posts...
      </div>

      <div className="mb-6 rounded-lg border border-red-900 bg-red-900/30 px-4 py-3 text-sm text-red-300">
        Something went wrong. Try again.
      </div>
      */}

      {/* Table */}
      <Table />
    </div>
  );
}
