import React from "react";

function AddTodoForm({ currentCategoryId, handleAddTodo }) {
  const [itemText, setItemText] = useState("");

  function handleFormSubmit(event) {
    // prevent form default behaviour
    event.preventDefault();
    handleAddTodo(currentCategoryId, itemText);
    //    setting input feild to "" after submit
    setItemText("");
  }
  //  making controlled component
  function handleItemTextChange(event) {
    setItemText(event.target.value);
  }

  return (
    <form id="todo-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={itemText}
        onChange={handleItemTextChange}
      ></input>
      <button type="submit" disable={itemText.length === 0}>
        ADD TODO
      </button>
    </form>
  );
}

export default AddTodoForm;
