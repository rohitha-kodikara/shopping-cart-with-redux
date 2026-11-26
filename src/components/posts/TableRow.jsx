import TableActions from "./TableActions";

const TableRow = ({ post, setShowDeleteModal }) => {
  return (
    <tr className="align-middle transition hover:bg-slate-800/50 even:bg-slate-800/30">
      <td className="px-5 py-4">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-900/50 text-xs font-semibold text-indigo-400">
          {post.id}
        </span>
      </td>
      <td className="px-5 py-4">
        <p className="line-clamp-2 font-medium text-white">{post.title}</p>
      </td>
      <td className="hidden px-5 py-4 md:table-cell">
        <p className="line-clamp-2 text-slate-400">{post.body}</p>
      </td>
      <td className="px-5 py-4">
        <TableActions setShowDeleteModal={setShowDeleteModal} />
      </td>
    </tr>
  );
};

export default TableRow;
