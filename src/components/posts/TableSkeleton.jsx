const TableSkeleton = ({ rows = 5 }) => {
  return (
    <tbody className="divide-y divide-slate-700">
      {Array.from({ length: rows }).map((_, i) => (
        <tr key={i}>
          <td className="px-5 py-4">
            <div className="h-7 w-7 rounded-full bg-slate-700 shimmer" />
          </td>
          <td className="px-5 py-4">
            <div className="h-4 w-3/4 bg-slate-700 rounded mb-2 shimmer" />
            <div className="h-4 w-1/2 bg-slate-700 rounded shimmer" />
          </td>
          <td className="hidden px-5 py-4 md:table-cell">
            <div className="h-4 w-full bg-slate-700 rounded mb-2 shimmer" />
            <div className="h-4 w-5/6 bg-slate-700 rounded shimmer" />
          </td>
          <td className="px-5 py-4 text-right">
            <div className="h-6 w-20 bg-slate-700 rounded mx-auto shimmer" />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableSkeleton;