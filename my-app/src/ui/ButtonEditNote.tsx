import React from 'react';
import { EditTaskSVG } from './svgButtons';
import './buttons.css';

interface IProp {
  id: string;
  setIsEdit: (isEdit: boolean) => void;
  isEdit: boolean;
}
export const ButtonEditNote = (props: IProp) => {
  const { id, setIsEdit, isEdit } = props;

  return (
    <>
      <button id={id} className="button-edit-note" onClick={() => setIsEdit(!isEdit)}>
        <EditTaskSVG />
      </button>
    </>
  );
};
