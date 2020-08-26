import React, { useState, useEffect } from 'react';

const NavBar = () => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log('Loaded');
  });

  return (
    <nav className="flex items-center justify-between flex-wrap light-coral p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* path from props */}
        </svg>
        <span className="font-semibold text-xl tracking-tight">
          Title
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">{/* links */}</div>
      </div>
    </nav>
  );
}

export default NavBar;