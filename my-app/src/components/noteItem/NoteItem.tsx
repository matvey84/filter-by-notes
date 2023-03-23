import React, { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
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
  const { id, title, description, isTag } = props.note;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const filterQuery = useAppSelector((state) => state.noteSlice.query);
  const isFilter = useAppSelector((state) => state.noteSlice.isFilter);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    hilightTitleConcidences(titleRef, filterQuery, isFilter);
    hilightDescriptionConcidences(descriptionRef, filterQuery, isFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {isEdit ? (
        <EditNoteForm id={id} setIsEdit={setIsEdit} isEdit={isEdit} />
      ) : (
        <div className={isEdit ? 'hide-note' : 'note'} id={id}>
          {isTag ? <div className="tag-label">This is Tag</div> : <></>}
          <div className="note_contetnt">
            <h3 className="note-item_title" ref={titleRef}>
              {title}
            </h3>
            <div className="note-item_description" ref={descriptionRef}>
              {description}
            </div>
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

export const hilightTitleConcidences = (
  ref: React.RefObject<HTMLDivElement>,
  filterQuery: string,
  isFilter: boolean
): void => {
  const currentString = ref.current;
  const currentStringArr = currentString?.innerText.split(' ');

  const newString = currentStringArr
    ?.map((word) => {
      if (word === filterQuery.trim()) {
        return `<span class="hilight">${word}</span>`;
      } else if (word !== filterQuery.trim() && word.includes(filterQuery.trim())) {
        return word.replaceAll(filterQuery, `<mark class="hilight">${filterQuery}</mark>`);
      }
      return word;
    })
    .join(' ');
  currentString!.innerHTML = isFilter ? newString! : currentString!.innerHTML;
};

export const hilightDescriptionConcidences = (
  ref: React.RefObject<HTMLDivElement>,
  filterQuery: string,
  isFilter: boolean
): void => {
  const currentString = ref.current;
  const currentStringArr = currentString?.innerText.split(' ');

  const newString = currentStringArr
    ?.map((word) => {
      if (word === filterQuery.trim()) {
        return `<span class="hilight">${word}</span>`;
      } else if (word !== filterQuery.trim() && word.includes(filterQuery.trim())) {
        return word.replaceAll(filterQuery, `<mark class="hilight">${filterQuery}</mark>`);
      }
      return word;
    })
    .join(' ');
  currentString!.innerHTML = isFilter ? newString! : currentString!.innerHTML;
};
