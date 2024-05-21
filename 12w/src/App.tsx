import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import StudyList from "./components/StudyList";
import StudyDetail from "./components/StudyDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="h-32 flex items-center justify-center">
          <p className="font-bold text-4xl">
            <Link to="/">CoMit Study</Link>
          </p>
        </header>
        <main className="flex flex-col items-center px-16">
          <Routes>
            <Route path="/" element={<StudyList />}></Route>
            <Route path="/:index" element={<StudyDetail />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
