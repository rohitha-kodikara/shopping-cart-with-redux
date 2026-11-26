import { useState } from "react";
import TableRow from "../posts/TableRow";
import DeleteConfirm from "./DeleteConfirm";

const Table = ({ posts }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  console.log(posts);
  return (
    <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800 shadow-xl">
      {showDeleteModal && (
        <DeleteConfirm setShowDeleteModal={setShowDeleteModal} />
      )}
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
          {posts.map((post) => (
            <TableRow
              key={post.id}
              post={post}
              setShowDeleteModal={setShowDeleteModal}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
