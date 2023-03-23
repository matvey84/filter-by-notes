import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { resetFilterAction } from '../redux/note-slice/noteSlice';
import { ResetButtonSVG } from './svgButtons';

interface IProp {
  reset: () => void;
}

const ButtonResetFilter = (props: IProp) => {
  const dispatch = useAppDispatch();
  const isFilter = useAppSelector((state) => state.noteSlice.isFilter);
  const reset = props.reset;

  return (
    <>
      <button
        disabled={!isFilter}
        className="button-reset-filter"
        onClick={() => {
          dispatch(resetFilterAction());
          reset();
        }}
      >
        <ResetButtonSVG />
      </button>
    </>
  );
};

export default ButtonResetFilter;
