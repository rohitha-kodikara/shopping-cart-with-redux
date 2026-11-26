import { useState } from "react";

export function UserLogin({ setIsLoggedIn, users, userName, setUsername }) {
  function handleSubmit(e) {
    e.preventDefault();
    const userId = users.find((user) => user.username === userName)?.userId;
    if (userId) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username. Please try again.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
      <div className="w-full max-w-md rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-xl">
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-white">Login</h2>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="mb-1 block text-sm font-medium text-slate-300"
            >
              User Name
            </label>
            <input
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-900/50"
            />
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="cursor-pointer w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
