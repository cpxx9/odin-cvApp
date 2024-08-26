import { useState } from 'react';
import './styles/App.css';
import { v4 as uuid } from 'uuid';
import GeneralInputs from './components/GeneralInputs';
import ExpandedInputSection from './components/ExpandedInputSection';
import CVInputSection from './components/CVInputSection';
import CVDisplay from './components/CVDisplay';

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    // fullName: 'John Doe',
    // currentPosition: 'System Administrator',
    // phoneNumber: '8881114444',
    // email: 'john@doe.com',
    // location: 'Palo Alto, US'
  });

  const [educationDetails, setEducationDetails] = useState([
    // {
    //   school: 'MIT',
    //   degree: 'Computer Science',
    //   startDate: '2018-09',
    //   endDate: '2022-05',
    //   location: 'Boston, USA',
    //   id: uuid()
    // },
    // {
    //   school: 'Yale',
    //   degree: 'Data Engineering',
    //   startDate: '2019-10',
    //   endDate: '2023-06',
    //   location: 'New Haven, USA',
    //   id: uuid(),
    //   displayId: uuid()
    // }
  ]);

  const [workDetails, setWorkDetails] = useState([
    // {
    //   company: 'Test Company',
    //   position: 'Engineer',
    //   startDate: '2019-12',
    //   endDate: 'present',
    //   location: 'Palo Alto, USA',
    //   description: '',
    //   id: uuid(),
    //   displayId: uuid()
    // }
  ]);

  function addWorkSection() {
    const newSection = {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
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
