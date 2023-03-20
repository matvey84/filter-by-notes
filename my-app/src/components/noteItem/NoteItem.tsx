// import React from 'react';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// export const TodoItem = (props) => {
//   const isChecked = useSelector((state) => state.addTodoReduser.check);
//   const todos = useSelector((state) => state.addTodoReduser.todos);
//   const [isChange, setIsChange] = useState(false);
//   const [changeValue, setChangeValue] = useState(props.todo.content);
//   const dispatch = useDispatch();

//   const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   const toggleCheck = (e) => {
//     const year = new Date().getFullYear();
//     const month = new Date().getMonth();
//     const day = new Date().getDay();
//     dispatch({ type: 'TOGGLE_CHECK', payload: !isChecked });
//     for (let i = 0; i < todos.length; i++) {
//       if (todos[i].id === e.target.id) {
//         todos[i].check = !todos[i].check;
//       }
//       if (todos[i].check) {
//         todos[i].done = `${days[day]}, 0${day}-0${month}-${year}`;
//       } else {
//         delete todos[i].done;
//       }
//     }
//     doneTodo();
//   };

//   function doneTodo() {
//     // const doneTodoArr = todos.filter((checkTodo) => checkTodo.check === true);
//     // dispatch({ type: 'DONE_TODO', payload: doneTodoArr });
//   }

//   const doneStyle = [];
//   const showDelButton = [];
//   if (props.todo.check === true) {
//     doneStyle.push('check '); //class 'check' has created at TodoItemStyles.css
//     showDelButton.push('isShow ');
//   }

//   const deleteTodo = (id) => {
//     const newTodo = todos.filter((delTodo) => delTodo.id !== id);
//     dispatch({ type: 'DELETE_TODO', payload: newTodo });
//   };

//   const valueFromInp = (e) => setChangeValue(e.target.value);

//   function submitChangeForm(e) {
//     e.preventDefault();
//     const newTodo = {
//       content: changeValue,
//       id: props.todo.id,
//       check: props.todo.check,
//     };
//     dispatch({ type: 'ADD_CHANGE_CONTENT', payload: newTodo });
//     setChangeValue('');
//     setIsChange(false);
//   }
//   console.log(props.todo);
//   const changeForm = (
//     <div className="change-item">
//       <input
//         id={props.todo.id}
//         onChange={valueFromInp}
//         className="form-control input-for-change"
//         type="text"
//         value={changeValue}
//       />
//       <div className="change-btn-block">
//         <button
//           id={props.todo.id}
//           className="btn btn-info add-change-btn"
//           type="submit"
//           onClick={submitChangeForm}
//         >
//           Save
//         </button>
//       </div>
//     </div>
//   );
//   const todoItem = (
//     <div className="todo-item" id={props.id}>
//       <div className="todo-item-date-block">
//         <span className="add-todo">Add: {props.todo.date}</span>
//         {props.todo.done && <span className="done-todo"> Done: {props.todo.done}</span>}
//       </div>
//       <div className="todo-item-form">
//         <input
//           checked={props.todo.check}
//           onChange={(e) => toggleCheck(e)}
//           id={props.todo.id}
//           type="checkbox"
//           className="check-todo"
//         />
//         <div className="check-todo-text-block" id={props.todo.id}>
//           <div id={props.todo.id} className={doneStyle.join('  ') + 'form-control todo-text'}>
//             <span className="num">#{props.id}. </span>
//             <div className="content">{props.todo.content}</div>
//           </div>
//         </div>
//         <div id={props.id} className=" todo-btn-block">
//           <button
//             id={props.todo.id}
//             className="btn btn-success block-bts change"
//             onClick={() => setIsChange(true)}
//           >
//             Change
//           </button>
//           <button
//             id={props.todo.id}
//             onClick={(e) => deleteTodo(e.target.id)}
//             className={showDelButton.join('  ') + 'btn btn-warning block-bts del'}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
//   return <>{isChange ? changeForm : todoItem}</>;
// };

import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { removeNoteFromListAction } from '../../redux/note-slice/noteSlice';
import { INote } from '../../types/type';
import './noteItemStyle.css';
interface IProp {
  index: number;
  note: INote;
}
function NoteItem(props: IProp) {
  const dispatch = useAppDispatch();
  const { id, title, description } = props.note;
  const [isChange, setIsChange] = useState<boolean>(false);
  console.log(id, title, description);

  const removeNote = (e: React.MouseEvent<HTMLButtonElement>) => {
    const removedNoteId = e.currentTarget.id;
    dispatch(removeNoteFromListAction(removedNoteId));
  };

  return (
    <>
      {isChange ? (
        <p> Change</p>
      ) : (
        <div className="note" id={id}>
          {/* <div className="todo-item-date-block">
            <span className="add-todo">Add: {props.todo.date}</span>
          </div> */}
          <div className="note_contetnt">
            <div id={id} className="note_contetnt__main-info">
              {/* <span className="num">#{index}. </span> */}
              <h3 className="note-item_title">{title}</h3>
              <div className="note-item_description">{description}</div>
            </div>
            <div id={id} className=" todo-btn-block">
              <button
                id={id}
                className="btn btn-success block-bts change"
                onClick={() => setIsChange(!isChange)}
              >
                Change
              </button>
              <button
                id={id}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => removeNote(e)}
                // className={showDelButton.join('  ') + 'btn btn-warning block-bts del'}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NoteItem;
