import PostLists from "./components/posts/PostLists";
import { Navbar } from "./components/posts/Navbar";
import { useState } from "react";
import { UserLogin } from "./components/user/UserLogin";

const users = [
  { userId: 1, username: "user1" },
  { userId: 2, username: "rohitha" },
  { userId: 3, username: "user3" },
];

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUsername] = useState("");

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar
        userName={userName}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
      />
      <main className="pt-10">
        {isLoggedIn ? (
          <PostLists />
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
