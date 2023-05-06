import PropTypes from "prop-types";
import TodoItem from "@/components/TodoItem";

const TodosList = ({ todosProps, handleChange, delTodo }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          delTodo={delTodo}
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todosProps: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodosList;
