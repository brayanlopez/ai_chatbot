import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Sidebar from "./components/Sidebar";
import Chatbox from "./components/ChatBox";
import Credits from "./pages/Credits";
import Community from "./pages/Community";

import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = createBrowserRouter([
    { path: "/", element: <Chatbox /> },
    { path: "/credits", element: <Credits /> },
    { path: "/community", element: <Community /> },
  ]);

  return (
    <>
      {/* TODO: add burguer icon */}
      {isMenuOpen && <img />}
      <div className="dark:bg-gradient-to-b from-[#242124] to-[#00000] dark:text-white">
        <div className="flex h-screen w-screen">
          <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
