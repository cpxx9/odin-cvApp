import { useState } from 'react';
import CustomInput from './CustomInput';
import trash from '../assets/trash.svg';
import arrow from '../assets/arrow.svg';

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
    localStorage.setItem('educationItems', JSON.stringify(educationDetails));
  };

  const handleDegreeChange = (e) => {
    let newArr = [...educationDetails];
    newArr[currentIndex].degree = e.target.value;
    setEducationDetails(newArr);
    localStorage.setItem('educationItems', JSON.stringify(educationDetails));
  };

  const handleStartChange = (e) => {
    let newArr = [...educationDetails];
    newArr[currentIndex].startDate = e.target.value;
    setEducationDetails(newArr);
    localStorage.setItem('educationItems', JSON.stringify(educationDetails));
  };

  const handleEndChange = (e) => {
    let newArr = [...educationDetails];
    newArr[currentIndex].endDate = e.target.value;
    setEducationDetails(newArr);
    localStorage.setItem('educationItems', JSON.stringify(educationDetails));
  };

  const handleLocationChange = (e) => {
    let newArr = [...educationDetails];
    newArr[currentIndex].location = e.target.value;
    setEducationDetails(newArr);
    localStorage.setItem('educationItems', JSON.stringify(educationDetails));
  };

  function removeEducationItem() {
    let newArr = [...educationDetails];
    newArr.splice(currentIndex, 1);
    setEducationDetails(newArr);
    localStorage.setItem('educationItems', JSON.stringify(educationDetails));
  }

  const [panelActive, setPanelActive] = useState(true);

  function toggleShow() {
    if (panelActive && educationDetails[currentIndex].school === '') {
      removeEducationItem();
      return;
    }
    const newActive = !panelActive;
    setPanelActive(newActive);
  }

  return (
    <div className="input-btn-section">
      <button className="input-btn flip show-btn" onClick={toggleShow}>
        <img
          className={panelActive ? 'flip' : ''}
          src={arrow}
          alt="show/hide toggle"
        />
      </button>
      {panelActive ? (
        <ul className="inputs-list">
          <li>
            <label>
              <div>
                School <em>(required)</em>:
              </div>
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
        <h4>{educationDetails[currentIndex].school}</h4>
      )}
      <button
        className={
          panelActive ? 'input-btn remove-btn move-btn' : 'input-btn remove-btn'
        }
        onClick={removeEducationItem}
      >
        <img src={trash} alt="remove icon" />
      </button>
    </div>
  );
}
