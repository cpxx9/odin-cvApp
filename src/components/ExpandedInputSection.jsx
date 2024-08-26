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
          <li key={arrItem.key}>
            {title === 'Education' && (
              <EducationInputs
                educationDetails={arrItem}
                setEducationDetails={setSectionState}
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
