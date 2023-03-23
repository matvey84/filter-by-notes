import React from 'react';
import { useAppDispatch } from '../redux/hooks';
import { removeCurrentNoteAction } from '../redux/note-slice/noteSlice';
import { DeleteNoteSVG } from './svgButtons';
import './buttons.scss';

interface IProp {
  id: string;
}
export const ButtonRemoveCurrentNote = (props: IProp) => {
  const id = props.id;
  const dispatch = useAppDispatch();

  const removeNote = (e: React.MouseEvent<HTMLButtonElement>) => {
    const removedNoteId = e.currentTarget.id;
    dispatch(removeCurrentNoteAction(removedNoteId));
  };
  return (
    <>
      <button
        id={id}
        className="button-delete-note"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => removeNote(e)}
      >
        <DeleteNoteSVG />
      </button>
    </>
  );
};
