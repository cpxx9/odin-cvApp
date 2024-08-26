import { useState } from 'react';
import './styles/App.css';
import { v4 as uuid } from 'uuid';
import GeneralInputs from './components/GeneralInputs';
import ExpandedInputSection from './components/ExpandedInputSection';
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

  const [educationDetails, setEducationDetails] = useState([
    {
      school: 'MIT',
      degree: 'Computer Science',
      startDate: '2018-09',
      endDate: '2022-05',
      location: 'Boston, USA',
      id: uuid()
    },
    {
      school: 'MIT',
      degree: 'Computer Science',
      startDate: '2018-09',
      endDate: '2022-05',
      location: 'Boston, USA',
      id: uuid()
    }
  ]);

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
