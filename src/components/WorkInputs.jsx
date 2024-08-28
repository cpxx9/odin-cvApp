import CustomInput from './CustomInput';
import { useState } from 'react';
import trash from '../assets/trash.svg';
import arrow from '../assets/arrow.svg';

export default function WorkInputs({ workDetails, setWorkDetails, currentId }) {
  const currentIndex = workDetails.findIndex((e) => e.id === currentId);

  const handleCompanyChange = (e) => {
    let newArr = [...workDetails];
    newArr[currentIndex].company = e.target.value;
    setWorkDetails(newArr);
  };

  const handlePositionChange = (e) => {
    let newArr = [...workDetails];
    newArr[currentIndex].position = e.target.value;
    setWorkDetails(newArr);
  };

  const handleStartChange = (e) => {
    let newArr = [...workDetails];
    newArr[currentIndex].startDate = e.target.value;
    setWorkDetails(newArr);
  };

  const handleEndChange = (e) => {
    let newArr = [...workDetails];
    newArr[currentIndex].endDate = e.target.value;
    setWorkDetails(newArr);
  };

  const handleLocationChange = (e) => {
    let newArr = [...workDetails];
    newArr[currentIndex].location = e.target.value;
    setWorkDetails(newArr);
  };

  const handleDescriptionChange = (e) => {
    let newArr = [...workDetails];
    newArr[currentIndex].description = e.target.value;
    setWorkDetails(newArr);
  };

  function removeWorkItem() {
    let newArr = [...workDetails];
    newArr.splice(currentIndex, 1);
    setWorkDetails(newArr);
  }

  const [panelActive, setPanelActive] = useState(true);

  function toggleShow() {
    if (panelActive && workDetails[currentIndex].company === '') {
      removeWorkItem();
      return;
    }
    const newActive = !panelActive;
    setPanelActive(newActive);
  }

  return (
    <div className="input-btn-section">
      <button className="input-btn show-btn" onClick={toggleShow}>
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
                Company <em>(required)</em>:
              </div>
              <CustomInput
                placeholder={'Company name'}
                value={workDetails[currentIndex].company}
                onChange={handleCompanyChange}
              />
            </label>
          </li>
          <li>
            <label>
              Position held:
              <CustomInput
                placeholder={'Position held'}
                value={workDetails[currentIndex].position}
                onChange={handlePositionChange}
              />
            </label>
          </li>
          <li>
            <label>
              Start Date:
              <input
                type="month"
                placeholder="xxxx-xx"
                value={workDetails[currentIndex].startDate}
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
                value={workDetails[currentIndex].endDate}
                onChange={handleEndChange}
              />
            </label>
          </li>
          <li>
            <label>
              Location:
              <CustomInput
                placeholder={'Location'}
                value={workDetails[currentIndex].location}
                onChange={handleLocationChange}
              />
            </label>
          </li>
          <li>
            <label>
              Description:
              <textarea
                placeholder="Short description about what you did here"
                value={workDetails[currentIndex].description}
                onChange={handleDescriptionChange}
              />
            </label>
          </li>
        </ul>
      ) : (
        <h4>{workDetails[currentIndex].company}</h4>
      )}
      <button
        className={
          panelActive ? 'input-btn remove-btn move-btn' : 'input-btn remove-btn'
        }
        onClick={removeWorkItem}
      >
        <img src={trash} alt="delete icon" />
      </button>
    </div>
  );
}
