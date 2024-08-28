import EducationInputs from './EducationInputs';
import WorkInputs from './WorkInputs';
import { v4 as uuid } from 'uuid';

export default function ExpandedInputSection({
  sectionState,
  setSectionState,
  title,
  addFunction
}) {
  return (
    <>
      <h2>{title}</h2>
      {sectionState.length > 0 &&
        sectionState.map((arrItem) =>
          (() => {
            switch (title) {
              case 'Education': {
                return (
                  <EducationInputs
                    key={arrItem.id}
                    educationDetails={sectionState}
                    currentId={arrItem.id}
                    setEducationDetails={setSectionState}
                  />
                );
              }
              case 'Work': {
                return (
                  <WorkInputs
                    key={arrItem.id}
                    workDetails={sectionState}
                    setWorkDetails={setSectionState}
                    currentId={arrItem.id}
                  />
                );
              }

              default: {
                return <p>Not working yet...</p>;
              }
            }
          })()
        )}
      <button className="add-btn" onClick={addFunction}>
        +
      </button>
    </>
  );
}
