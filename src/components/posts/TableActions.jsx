const TableActions = ({
  setShowDeleteModal,
  setCurrentPostId,
  setShowCreatePostForm,
  currentPostId,
}) => {
  function handleUpdatePost(targetPostId) {
    setShowCreatePostForm((prev) => !prev);
    setCurrentPostId(targetPostId);
  }

  return (
    <div className="flex items-center justify-end gap-2 whitespace-nowrap">
      <button
        onClick={() => handleUpdatePost(currentPostId)}
        className="cursor-pointer rounded-md border border-slate-600 bg-slate-700 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-slate-600"
      >
        Update
      </button>
      <button
        onClick={() => {
          setShowDeleteModal((prev) => !prev);
          setCurrentPostId(currentPostId);
        }}
        className="cursor-pointer rounded-md border border-red-900 bg-red-900/30 px-3 py-1.5 text-xs font-medium text-red-400 transition hover:bg-red-900/50"
      >
        Delete
      </button>
    </div>
  );
};

export default TableActions;
