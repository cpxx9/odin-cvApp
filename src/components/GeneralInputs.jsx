import CustomInput from './CustomInput';

export default function GeneralInputs({ personalDetails, stateController }) {
  const handleNameChange = (e) => {
    stateController((prevDetails) => ({
      ...prevDetails,
      fullName: e.target.value
    }));
  };

  const handlePositionChange = (e) => {
    stateController((prevDetails) => ({
      ...prevDetails,
      currentPosition: e.target.value
    }));
  };

  const handlePhoneChange = (e) => {
    stateController((prevDetails) => ({
      ...prevDetails,
      phoneNumber: e.target.value
    }));
  };

  const handleEmailChange = (e) => {
    stateController((prevDetails) => ({
      ...prevDetails,
      email: e.target.value
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
