import { useState } from 'react';
import CustomInput from './CustomInput';

export default function GeneralInputs() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: 'John Doe',
    currentPosition: 'System Administrator',
    phoneNumber: '8881114444',
    email: 'john@doe.com',
    location: 'Palo Alto, US'
  });

  const handleNameChange = (e) => {
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      fullName: e.target.value
    }));
  };

  const handlePositionChange = (e) => {
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      currentPosition: e.target.value
    }));
  };

  const handlePhoneChange = (e) => {
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      phoneNumber: e.target.value
    }));
  };

  const handleEmailChange = (e) => {
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      email: e.target.value
    }));
  };

  const handleLocationChange = (e) => {
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      location: e.target.value
    }));
  };

  return (
    <>
      <h2>Personal Details</h2>
      <ul>
        <li>
          <label>
            Full name:
            <CustomInput
              placeholder={'First name'}
              onChange={handleNameChange}
              value={personalDetails.fullName}
            />
          </label>
        </li>
        <li>
          <label>
            Current Position:
            <CustomInput
              placeholder={'Current position'}
              onChange={handlePositionChange}
              value={personalDetails.currentPosition}
            />
          </label>
        </li>
        <li>
          <label>
            Telephone:
            <CustomInput
              placeholder={'Phone number'}
              onChange={handlePhoneChange}
              value={personalDetails.phoneNumber}
            />
          </label>
        </li>
        <li>
          <label>
            Email:
            <CustomInput
              placeholder={'email'}
              onChange={handleEmailChange}
              value={personalDetails.email}
            />
          </label>
        </li>
        <li>
          <label>
            Location:
            <CustomInput
              placeholder={'Location'}
              onChange={handleLocationChange}
              value={personalDetails.location}
            />
          </label>
        </li>
      </ul>
    </>
  );
}
