import { useState } from 'react';
import './styles/App.css';
import GeneralInputs from './components/GeneralInputs';
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

  return (
    <div>
      <div>
        <CVInputSection>
          <GeneralInputs
            personalDetails={personalDetails}
            stateController={setPersonalDetails}
          />
        </CVInputSection>
      </div>
      <div>
        <CVDisplay personalDetails={personalDetails} />
      </div>
    </div>
  );
}

export default App;
