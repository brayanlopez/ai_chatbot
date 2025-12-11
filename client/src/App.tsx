import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      Hello world
      <div className="dark:bg-gradient-to-b from-[#242124] to-[#00000] dark:text-white">
        <div className="flex h-screen w-screen">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
