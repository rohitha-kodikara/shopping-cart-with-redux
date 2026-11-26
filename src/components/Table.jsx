import TableRow from "./TableRow";

const Table = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800 shadow-xl">
      <table className="w-full table-fixed text-left text-sm">
        <colgroup>
          <col className="w-16" />
          <col className="w-1/3" />
          <col className="hidden md:table-column" />
          <col className="w-48" />
        </colgroup>

        <thead className="border-b border-slate-700 bg-slate-900 text-xs font-semibold text-slate-300 uppercase tracking-wider">
          <tr>
            <th className="px-5 py-3">ID</th>
            <th className="px-5 py-3">Title</th>
            <th className="hidden px-5 py-3 md:table-cell">Body</th>
            <th className="px-5 py-3 text-right">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-700">
          {/* Repeat this <tr> with .map() */}
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>

      {/* Empty state: show only when posts.length === 0, instead of the rows */}
      {/*
        <div className="px-6 py-14 text-center">
          <p className="font-medium text-slate-300">No posts yet</p>
          <p className="mt-1 text-sm text-slate-500">Create your first post to get started.</p>
        </div>
        */}
    </div>
  );
};

export default Table;
