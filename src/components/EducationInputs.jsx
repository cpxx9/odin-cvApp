import { useState } from 'react';
import CustomInput from './CustomInput';

export default function EducationInputs({
  educationDetails,
  setEducationDetails,
  currentId
}) {
  const currentIndex = educationDetails.findIndex((e) => e.id === currentId);

  const handleSchoolChange = (e) => {
    let newArr = [...educationDetails];
    newArr[currentIndex].school = e.target.value;
    setEducationDetails(newArr);
  };

  const handleDegreeChange = (e) => {
    let newArr = [...educationDetails];
    newArr[currentIndex].degree = e.target.value;
    setEducationDetails(newArr);
  };

  const handleStartChange = (e) => {
    let newArr = [...educationDetails];
    newArr[currentIndex].startDate = e.target.value;
    setEducationDetails(newArr);
  };

  const handleEndChange = (e) => {
    let newArr = [...educationDetails];
    newArr[currentIndex].endDate = e.target.value;
    setEducationDetails(newArr);
  };

  const handleLocationChange = (e) => {
    let newArr = [...educationDetails];
    newArr[currentIndex].location = e.target.value;
    setEducationDetails(newArr);
  };

  function removeEducationItem() {
    let newArr = [...educationDetails];
    newArr.splice(currentIndex, 1);
    setEducationDetails(newArr);
  }

  const [panelActive, setPanelActive] = useState(true);

  function toggleShow() {
    const newActive = !panelActive;
    setPanelActive(newActive);
  }

  return (
    <div className="input-btn-section">
      <button onClick={toggleShow}>{panelActive ? 'hide' : 'show'}</button>
      {panelActive ? (
        <ul className="inputs-list">
          <li>
            <label>
              School:
              <CustomInput
                placeholder={'School name'}
                value={educationDetails[currentIndex].school}
                onChange={handleSchoolChange}
              />
            </label>
          </li>
          <li>
            <label>
              Degree:
              <CustomInput
                placeholder={'Degree obtained'}
                value={educationDetails[currentIndex].degree}
                onChange={handleDegreeChange}
              />
            </label>
          </li>
          <li>
            <label>
              Start Date:
              <input
                type="month"
                placeholder="xxxx-xx"
                value={educationDetails[currentIndex].startDate}
                onChange={handleStartChange}
              />
            </label>
          </li>
          <li>
            <label>
              End Date:
              <input
                type="month"
                placeholder="xxxx-xx"
                value={educationDetails[currentIndex].endDate}
                onChange={handleEndChange}
              />
            </label>
          </li>
          <li>
            <label>
              Location:
              <CustomInput
                placeholder={'Location'}
                value={educationDetails[currentIndex].location}
                onChange={handleLocationChange}
              />
            </label>
          </li>
        </ul>
      ) : (
        educationDetails[currentIndex].school
      )}
      <button onClick={removeEducationItem}>Remove</button>
    </div>
  );
}
