import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="w-16 h-16 border-4 border-gray-200 border-t-rose-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
