import CustomInput from './CustomInput';

export default function EducationInputs({
  educationDetails,
  setEducationDetails
}) {
  // const handleSchoolChange = (index) => (e) => {
  //   let newArr = [...educationDetails];
  //   newArr[index].school = e.target.value;
  //   setEducationDetails(newArr);
  // };

  return (
    <ul>
      <li>
        <label>
          School:
          <CustomInput
            placeholder={'School name'}
            value={educationDetails.school}
          />
        </label>
      </li>
      <li>
        <label>
          Degree:
          <CustomInput
            placeholder={'Degree obtained'}
            value={educationDetails.degree}
          />
        </label>
      </li>
      <li>
        <label>
          Start Date:
          <input
            type="month"
            placeholder="xxxx-xx"
            value={educationDetails.startDate}
          />
        </label>
      </li>
      <li>
        <label>
          End Date:
          <input
            type="month"
            placeholder="xxxx-xx"
            value={educationDetails.endDate}
          />
        </label>
      </li>
      <li>
        <label>
          Location:
          <CustomInput
            placeholder={'Location'}
            value={educationDetails.location}
          />
        </label>
      </li>
    </ul>
  );
}
