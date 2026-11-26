import PostLists from "./components/posts/PostLists";
import { Navbar } from "./components/posts/Navbar";
import { useEffect, useState } from "react";
import { UserLogin } from "./components/user/UserLogin";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./features/postsSlice";

const users = [
  { userId: 1, username: "Amal" },
  { userId: 2, username: "Kamal" },
  { userId: 3, username: "Namal" },
  { userId: 4, username: "Sumal" },
  { userId: 5, username: "Damith" },
];

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUsername] = useState("");
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  const userUniquePosts = posts.filter(
    (post) =>
      post.userId === users.find((user) => user.username === userName)?.userId,
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar
        userName={userName}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
      />
      <main className="pt-10">
        {isLoggedIn ? (
          <PostLists posts={userUniquePosts} />
        ) : (
          <UserLogin
            setUsername={setUsername}
            userName={userName}
            setIsLoggedIn={setIsLoggedIn}
            users={users}
          />
        )}
      </main>
    </div>
  );
};

export default App;
