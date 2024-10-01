import Todos from "./components";
import NewTodo from "./components/new-todo";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <>
      <TodosContextProvider>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
    </>
  );
}

export default App;
