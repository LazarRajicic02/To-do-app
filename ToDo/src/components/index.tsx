import React, { useContext } from "react";
import TodoItem from "./todo-item";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const { items, removeTodo } = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onRemoveTodo={removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
