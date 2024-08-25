import CustomInput from './CustomInput';

export default function EducationInputs({ educationDetails, stateController }) {
  const handleSchoolChange = (e) => {
    stateController((prevDetails) => ({
      ...prevDetails,
      school: e.target.value
    }));
  };

  const handleDegreeChange = (e) => {
    stateController((prevDetails) => ({
      ...prevDetails,
      degree: e.target.value
    }));
  };

  const handleStartDateChange = (e) => {
    stateController((prevDetails) => ({
      ...prevDetails,
      startDate: e.target.value
    }));
  };

  const handleEndDateChange = (e) => {
    stateController((prevDetails) => ({
      ...prevDetails,
      endDate: e.target.value
    }));
  };

  const handleLocationChange = (e) => {
    stateController((prevDetails) => ({
      ...prevDetails,
      location: e.target.value
    }));
  };

  return (
    <>
      <h2>Education Details:</h2>
      <ul>
        <li>
          <label>
            School:
            <CustomInput
              placeholder={'School name'}
              onChange={handleSchoolChange}
              value={educationDetails.school}
            />
          </label>
        </li>
        <li>
          <label>
            Degree:
            <CustomInput
              placeholder={'Degree obtained'}
              onChange={handleDegreeChange}
              value={educationDetails.degree}
            />
          </label>
        </li>
        <li>
          <label>
            Start Date:
            <input
              type="date"
              placeholder="Start date"
              onChange={handleStartDateChange}
              value={educationDetails.startDate}
            />
          </label>
        </li>
        <li>
          <label>
            End Date:
            <input
              type="date"
              placeholder="End date"
              onChange={handleEndDateChange}
              value={educationDetails.endDate}
            />
          </label>
        </li>
        <li>
          <label>
            Location:
            <CustomInput
              placeholder={'Location'}
              onChange={handleLocationChange}
              value={educationDetails.location}
            />
          </label>
        </li>
      </ul>
    </>
  );
}
