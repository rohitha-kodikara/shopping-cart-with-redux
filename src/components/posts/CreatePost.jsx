import { useDispatch } from "react-redux";
import { addPost, updatePost } from "../../features/postsSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

export function CreatePost({
  setShowCreatePostForm,
  userId,
  currentPostId,
  mode,
}) {
  const editData = useSelector((state) =>
    state.posts.posts.find((post) => post.id === currentPostId),
  );
  console.log(currentPostId);

  const [postFormData, setPostFormData] = useState(() => ({
    userId: editData?.userId ?? userId ?? 1,
    title: editData?.title ?? "",
    body: editData?.body ?? "",
  }));

  const dispatch = useDispatch();

  const handlePostSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(postFormData));

    setShowCreatePostForm(false);
  };

  const handleUpdatePostSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost({ id: currentPostId, ...postFormData }));
    setShowCreatePostForm(false);
  };

  return (
    <form action="" onSubmit={handlePostSubmit}>
      <div className="fixed inset-0 z-50 flex  items-center justify-center bg-black/50 p-4 backdrop-blur-sm ">
        <div className="rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-xl w-1/2">
          <h2 className="mb-1 text-xl font-semibold text-white">
            {mode === "create" ? "Create post" : "Update post"}
          </h2>
          <p className="mb-6 text-sm text-slate-400">
            Fill in the details below. Post ID:{" "}
            {mode === "create" ? "" : currentPostId}
          </p>

          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-300">
                Title
              </label>
              <input
                value={postFormData.title}
                onChange={(e) =>
                  setPostFormData((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                type="text"
                placeholder="Post title"
                className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-900/50"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-300">
                Body
              </label>
              <textarea
                value={postFormData.body}
                onChange={(e) =>
                  setPostFormData((prev) => ({ ...prev, body: e.target.value }))
                }
                type="text"
                rows={5}
                placeholder="Write something..."
                className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-900/50"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-2">
            <button
              onClick={() => setShowCreatePostForm((prev) => !prev)}
              className="cursor-pointer rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-600 transition"
            >
              Cancel
            </button>
            <button
              onClick={
                currentPostId ? handleUpdatePostSubmit : handlePostSubmit
              }
              className="cursor-pointer rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"
            >
              {currentPostId ? "Update" : "Create"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
