import CssBaseline from "@mui/material/CssBaseline"; // This will remove all default browser styles
import TodoList from "./TodoList";
import Navbar from "./Navbar";

function App() {

  return (
    <>
      <CssBaseline/>
      <Navbar/>
      <TodoList/>
    </>
  );
}

export default App
