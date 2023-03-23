import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { resetFilterAction } from '../redux/note-slice/noteSlice';
import { ResetButtonSVG } from './svgButtons';

const ButtonResetFilter = () => {
  const dispatch = useAppDispatch();
  const isFilter = useAppSelector((state) => state.noteSlice.isFilter);

  return (
    <>
      <button
        disabled={!isFilter}
        className="button-reset-filter"
        onClick={() => dispatch(resetFilterAction())}
      >
        <ResetButtonSVG />
      </button>
    </>
  );
};

export default ButtonResetFilter;
