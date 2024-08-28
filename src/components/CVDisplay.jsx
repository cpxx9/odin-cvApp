import EducationInputs from './EducationInputs';
import '../styles/CVDisplay.css';

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
                  {item.startDate} -{' '}
                  {item.endDate === '' ? 'present' : item.endDate}
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
      <section>
        <h2>Work</h2>
        <ul>
          {workDetails.map((item) => (
            <li key={item.displayId}>
              <ul>
                <li>
                  {item.startDate} -{' '}
                  {item.endDate === '' ? 'present' : item.endDate}
                </li>
                <li>{item.location}</li>
              </ul>
              <ul>
                <li>
                  <h4>{item.company}</h4>
                </li>
                <li>{item.position}</li>
                <li>{item.description}</li>
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
