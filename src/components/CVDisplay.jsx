import EducationInputs from './EducationInputs';

export default function CVDisplay({
  personalDetails,
  educationDetails,
  workDetails
}) {
  const emailLink = 'mailto:' + personalDetails.email;
  const phoneLink = 'tel:' + personalDetails.phoneNumber;

  return (
    <>
      <section>
        <h1>{personalDetails.fullName}</h1>
        <h4>{personalDetails.currentPosition}</h4>
        <ul>
          <li>
            <img src="" alt="" />
            <p>{personalDetails.email}</p>
          </li>
          <li>
            <img src="" alt="" />
            <p>{personalDetails.phoneNumber}</p>
          </li>
          <li>
            <img src="" alt="" />
            <p>{personalDetails.location}</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Education</h2>
        <ul>
          {educationDetails.map((item) => (
            <li key={item.displayId}>
              <ul>
                <li>
                  {item.startDate} - {item.endDate}
                </li>
                <li>{item.location}</li>
              </ul>
              <ul>
                <li>
                  <h4>{item.school}</h4>
                </li>
                <li>{item.degree}</li>
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
