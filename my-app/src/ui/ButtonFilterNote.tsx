import React from 'react';
import { IncrGlassSVG } from './svgButtons';

interface IProp {
  isValid: boolean;
}

export default function ButtonFilterNote(props: IProp) {
  const isValid = props.isValid;
  return (
    <>
      <button disabled={!isValid} className="filter-form_submit-button" type="submit">
        <IncrGlassSVG />
      </button>
    </>
  );
}
