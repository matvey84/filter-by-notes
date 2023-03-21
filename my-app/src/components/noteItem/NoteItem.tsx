import React, { useState } from 'react';
import { INote } from '../../types/type';
import { ButtonRemoveCurrentNote } from '../../ui/ButtonDeleteColumn';
import { ButtonEditNote } from '../../ui/ButtonEditNote';
import EditNoteForm from '../editNoteForm/EditNoteForm';
import './noteItemStyle.css';
interface IProp {
  index: number;
  note: INote;
}
function NoteItem(props: IProp) {
  const { id, title, description } = props.note;
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <>
      {isEdit ? (
        <EditNoteForm id={id} setIsEdit={setIsEdit} isEdit={isEdit} />
      ) : (
        <div className={isEdit ? 'hide-note' : 'note'} id={id}>
          {/* <div className="todo-item-date-block">
            <span className="add-todo">Add: {props.todo.date}</span>
          </div> */}
          <div className="note_contetnt">
            <h3 className="note-item_title">{title}</h3>
            <div className="note-item_description">{description}</div>
            <div id={id} className=" todo-btn-block">
              <ButtonEditNote id={id} setIsEdit={setIsEdit} isEdit={isEdit} />
              <ButtonRemoveCurrentNote id={id} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NoteItem;
