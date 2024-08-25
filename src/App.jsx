import { useState } from 'react';
import './styles/App.css';
import GeneralInputs from './components/GeneralInputs';
import EducationInputs from './components/EducationInputs';
import CVInputSection from './components/CVInputSection';
import CVDisplay from './components/CVDisplay';

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: 'John Doe',
    currentPosition: 'System Administrator',
    phoneNumber: '8881114444',
    email: 'john@doe.com',
    location: 'Palo Alto, US'
  });

  const [educationDetails, setEducationDetails] = useState({
    school: 'MIT',
    degree: 'Computer Science',
    startDate: '2018-09',
    endDate: '2022-05',
    location: 'Boston, USA'
  });

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
          <EducationInputs
            educationDetails={educationDetails}
            stateController={setEducationDetails}
          />
        </CVInputSection>
      </div>
      <div className="section display-section">
        <CVDisplay
          personalDetails={personalDetails}
          educationDetails={educationDetails}
        />
      </div>
    </div>
  );
}

export default App;
