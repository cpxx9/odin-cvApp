import EducationInputs from './EducationInputs';

export default function ExpandedInputSection({
  sectionState,
  setSectionState,
  title
}) {
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
    </>
  );
}
