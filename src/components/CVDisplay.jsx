import EducationInputs from './EducationInputs';
import '../styles/CVDisplay.css';
import envelope from '../assets/envelope.svg';
import location from '../assets/marker.svg';
import phone from '../assets/phone.svg';

export default function CVDisplay({
  personalDetails,
  educationDetails,
  workDetails
}) {
  const emailLink = 'mailto:' + personalDetails.email;
  const phoneLink = 'tel:' + personalDetails.phoneNumber;

  return (
    <>
      <section className="display-section-main personal-section">
        <h1>{personalDetails.fullName}</h1>
        <h4>{personalDetails.currentPosition}</h4>
        <ul>
          <li>
            {console.log({ personalDetails })}
            {personalDetails.email !== '' && (
              <img src={envelope} alt="email icon" />
            )}
            <p>{personalDetails.email}</p>
          </li>
          <li>
            {personalDetails.phoneNumber !== '' && (
              <img src={phone} alt="phone icon" />
            )}
            <p>{personalDetails.phoneNumber}</p>
          </li>
          <li>
            {personalDetails.location !== '' && (
              <img src={location} alt="location marker icon" />
            )}
            <p>{personalDetails.location}</p>
          </li>
        </ul>
      </section>
      <div className="display-section-items">
        <section className="display-section-details education-section">
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
        <section className="display-section-details work-section">
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
      </div>
    </>
  );
}
