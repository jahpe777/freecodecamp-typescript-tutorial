import React from 'react';
import './styles.css';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  handleDone: (id: number) => void;
  handleDelete: (id: number) => void;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  handleDone,
  handleDelete,
}) => {
  return (
    <div className="todos">
      {todos.map((todo) => {
        return (
          <SingleTodo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            handleDone={handleDone}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
