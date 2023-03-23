import React from 'react';
import { CreateNoteSVG } from './svgButtons';
interface IProp {
  isValid: boolean;
}
function ButtonCreateNote(props: IProp) {
  const isValid = props.isValid;
  return (
    <>
      <button
        disabled={!isValid}
        className="note-form_submit-button"
        type="submit"
        // onClick={(e: React.MouseEvent<HTMLButtonElement>) => removeNote(e)}
      >
        <CreateNoteSVG />
      </button>
    </>
  );
}

export default ButtonCreateNote;
