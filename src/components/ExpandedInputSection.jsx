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
      <h1>{title}</h1>
      <ul>
        {sectionState.map((arrItem) => (
          <li key={arrItem.id}>
            {(() => {
              switch (title) {
                case 'Education': {
                  return (
                    <EducationInputs
                      educationDetails={sectionState}
                      currentId={arrItem.id}
                      setEducationDetails={setSectionState}
                    />
                  );
                }
                case 'Work': {
                  return (
                    <WorkInputs
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
            })()}
          </li>
        ))}
      </ul>
      <button onClick={addFunction}>Add {title.toLowerCase()}</button>
    </>
  );
}
