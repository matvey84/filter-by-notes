import React from 'react';
import { CreateNoteSVG } from './svgButtons';
import './buttons.scss';
interface IProp {
  isValid: boolean;
}
function ButtonCreateNote(props: IProp) {
  const isValid = props.isValid;
  return (
    <>
      <button disabled={!isValid} className="note-form_submit-button" type="submit">
        <CreateNoteSVG />
      </button>
    </>
  );
}

export default ButtonCreateNote;
