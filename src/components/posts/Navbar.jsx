export function Navbar({ isLoggedIn, setIsLoggedIn, userName }) {
  // Get first letter of username for avatar
  const avatarLetter = userName ? userName.charAt(0).toUpperCase() : "U";

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white">Posts App</h1>
          </div>

          {/* Right side - User avatar + Logout */}
          <div className="flex items-center gap-3">
            {isLoggedIn && (
              <div className="flex items-center gap-2">
                {/* Avatar */}
                <span className="text-sm font-medium text-slate-200">
                  {userName}
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
                  {avatarLetter}
                </div>
                {/* Username */}

                {/* Logout button */}
                <button
                  onClick={() => setIsLoggedIn((prev) => !prev)}
                  className="cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
