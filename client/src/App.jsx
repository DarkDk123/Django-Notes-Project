import "./App.css";
import Header from "./components/Header";
import NotesList from "./routes/NotesList";
import AddNote from "./routes/AddNote";
import Note from "./routes/Note";
import { Routes, Route, Link } from "react-router-dom";

const notFoundStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<NotesList />} />
        <Route path="/note/:id" element={<Note />} />
        <Route
          path="*"
          element={<h2 style={notFoundStyles}>Page not Found</h2>}
        />
        <Route path="/note/addnote" element={<AddNote />} />
      </Routes>
    </div>
  );
}

export default App;
