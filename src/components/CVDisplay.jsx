import EducationInputs from './EducationInputs';

export default function CVDisplay({ personalDetails, educationDetails }) {
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
          <li>
            <p>{educationDetails.school}</p>
          </li>
          <li>
            <p>{educationDetails.degree}</p>
          </li>
          <li>
            <p>{educationDetails.startDate}</p>
          </li>
          <li>
            <p>{educationDetails.endDate}</p>
          </li>
          <li>
            <p>{educationDetails.location}</p>
          </li>
        </ul>
      </section>
    </>
  );
}
