export default function CVDisplay({ personalDetails }) {
  const emailLink = 'mailto:' + personalDetails.email;
  const phoneLink = 'tel:' + personalDetails.phoneNumber;

  return (
    <section>
      <h1>{personalDetails.fullName}</h1>
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
  );
}
