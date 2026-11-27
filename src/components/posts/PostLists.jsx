import { useState } from "react";
import Table from "./Table";
import { CreatePost } from "./CreatePost";
import { useSelector } from "react-redux";

export default function PostList({ posts, userId, isLoading = false }) {
  const [showCreatePostForm, setShowCreatePostForm] = useState(false);

  const deletedPostIds = useSelector((state) => state.posts.deletedPostIds);
  const visiblePosts = posts.filter(
    (post) => !deletedPostIds.includes(post.id),
  );

  return (
    <>
      <div className="mx-auto max-w-4xl px-2">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex py-12">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Posts
            </h1>
          </div>
          <button
            onClick={() => setShowCreatePostForm((prev) => !prev)}
            className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            <span className="text-lg leading-none">+</span>
            Create post
          </button>
        </div>

        {/*================posts form=================*/}
        {showCreatePostForm && (
          <CreatePost
            userId={userId}
            setShowCreatePostForm={setShowCreatePostForm}
          />
        )}
        {/* Table */}
        <Table posts={visiblePosts} isLoading={isLoading} />
      </div>
    </>
  );
}
