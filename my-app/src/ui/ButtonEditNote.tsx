import React from 'react';
import { useAppDispatch } from '../redux/hooks';
import { EditTaskSVG } from './svgButtons';
import './task-buttons.css';

interface IProp {
  id: string;
  setIsEdit: (isEdit: boolean) => void;
  isEdit: boolean;
}
export const ButtonEditNote = (props: IProp) => {
  const { id, setIsEdit, isEdit } = props;
  const dispatch = useAppDispatch();
  const goToModalWindow = (e: React.MouseEvent<HTMLButtonElement>) => {
    // dispatch(setIsEditTask(true));
    // dispatch(setIsShowTask(false));
    // dispatch(setModalOpen(true));
    // dispatch(setCurrentTaskId(e.currentTarget.id));
    // dispatch(setCurrentColumnId(props.column.id));
  };
  return (
    <>
      <button id={id} className="button-edit-task" onClick={() => setIsEdit(!isEdit)}>
        <EditTaskSVG />
      </button>
    </>
  );
};
