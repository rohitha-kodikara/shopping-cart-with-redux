const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-transparent">
      {/* Buffer icon with minimal frosted glass container */}
      <div className="flex flex-col items-center gap-4 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
        <svg
          className="w-10 h-10 text-blue-500 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-80"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>

        <p className="text-gray-700 text-sm font-medium">Loading posts...</p>
      </div>
    </div>
  );
};

export default Loader;
