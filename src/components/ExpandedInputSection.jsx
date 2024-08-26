import EducationInputs from './EducationInputs';
import { v4 as uuid } from 'uuid';

export default function ExpandedInputSection({
  sectionState,
  setSectionState,
  title
}) {
  function addEducationSection() {
    const newSection = {
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
      id: uuid(),
      displayId: uuid()
    };
    let newArr = [...sectionState, newSection];
    setSectionState(newArr);
  }

  return (
    <>
      <h1>{title}</h1>
      <ul>
        {sectionState.map((arrItem) => (
          <li key={arrItem.id}>
            {title === 'Education' && (
              <EducationInputs
                educationDetails={sectionState}
                currentID={arrItem.id}
                setEducationDetails={setSectionState}
              />
            )}
          </li>
        ))}
      </ul>
      <button onClick={addEducationSection}>Add education</button>
    </>
  );
}
