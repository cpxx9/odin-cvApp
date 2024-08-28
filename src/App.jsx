import { useState } from 'react';
import './styles/App.css';
import { v4 as uuid } from 'uuid';
import GeneralInputs from './components/GeneralInputs';
import ExpandedInputSection from './components/ExpandedInputSection';
import CVInputSection from './components/CVInputSection';
import CVDisplay from './components/CVDisplay';

function App() {
  const initialPersonalDetails = () => {
    return (
      JSON.parse(localStorage.getItem('personalItems')) || {
        fullName: '',
        currentPosition: '',
        phoneNumber: '',
        email: '',
        location: ''
      }
    );
  };

  const initialWorkDetails = () => {
    return JSON.parse(localStorage.getItem('workItems')) || [];
  };

  const initialEducationDetails = () => {
    return JSON.parse(localStorage.getItem('educationItems')) || [];
  };

  const [personalDetails, setPersonalDetails] = useState(
    initialPersonalDetails
  );

  const [educationDetails, setEducationDetails] = useState(
    initialEducationDetails
  );

  const [workDetails, setWorkDetails] = useState(initialWorkDetails);

  function addWorkSection() {
    const newSection = {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
      active: true,
      id: uuid(),
      displayId: uuid()
    };
    let newArr = [...workDetails, newSection];
    setWorkDetails(newArr);
  }

  function addEducationSection() {
    const newSection = {
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
      active: true,
      id: uuid(),
      displayId: uuid()
    };
    let newArr = [...educationDetails, newSection];
    setEducationDetails(newArr);
  }

  return (
    <div className="main-app">
      <div className="section input-section">
        <CVInputSection>
          <GeneralInputs
            personalDetails={personalDetails}
            stateController={setPersonalDetails}
          />
        </CVInputSection>
        <CVInputSection>
          <ExpandedInputSection
            sectionState={educationDetails}
            setSectionState={setEducationDetails}
            title={'Education'}
            addFunction={addEducationSection}
          />
        </CVInputSection>
        <CVInputSection>
          <ExpandedInputSection
            sectionState={workDetails}
            setSectionState={setWorkDetails}
            title={'Work'}
            addFunction={addWorkSection}
          />
        </CVInputSection>
      </div>
      <div className="section display-section">
        <CVDisplay
          personalDetails={personalDetails}
          educationDetails={educationDetails}
          workDetails={workDetails}
        />
      </div>
    </div>
  );
}

export default App;
