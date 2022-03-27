import React from 'react'

const Form = ({inputText, setInputText, todos, setTodos, setStatus, filteredTodos}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.random()}]);
        setInputText('');
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

  return (
    <form>
        <input value={inputText} type="text" className='todo-input' onChange = {inputTextHandler}/>
        <button className="todo-button" type='submit' onClick={submitTodoHandler}>
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select onChange={statusHandler} className='filter-todo' name='todos'>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
  )
}

export default Form;