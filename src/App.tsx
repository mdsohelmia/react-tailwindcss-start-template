import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-indigo-800 text-white py-3 container mx-auto px-4 mt-2 rounded shadow-sm">
      React and Tailwindcss start up template
    </div>
  );
}

export default App;
