import { useState } from "react";
import TableRow from "../posts/TableRow";
import DeleteConfirm from "./DeleteConfirm";
import TableSkeleton from "./TableSkeleton";

const Table = ({
  posts,
  isLoading = false,
  setShowCreatePostForm,
  setCurrentPostId,
  currentPostId,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800 shadow-xl">
      {showDeleteModal && (
        <DeleteConfirm
          setShowDeleteModal={setShowDeleteModal}
          currentPostId={currentPostId}
          setCurrentPostId={setCurrentPostId}
        />
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

        {isLoading ? (
          <TableSkeleton rows={5} />
        ) : (
          <tbody className="divide-y divide-slate-700">
            {posts.map((post) => (
              <TableRow
                key={post.id}
                post={post}
                setShowDeleteModal={setShowDeleteModal}
                setCurrentPostId={setCurrentPostId}
                setShowCreatePostForm={setShowCreatePostForm}
                currentPostId={currentPostId}
              />
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Table;
