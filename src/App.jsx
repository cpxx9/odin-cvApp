import { useState } from 'react';
import './styles/App.css';
import GeneralInputs from './components/GeneralInputs';
import CVInputSection from './components/CVInputSection';

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: 'John Doe',
    currentPosition: 'System Administrator',
    phoneNumber: '8881114444',
    email: 'john@doe.com',
    location: 'Palo Alto, US'
  });

  return (
    <CVInputSection>
      <GeneralInputs
        personalDetails={personalDetails}
        stateController={setPersonalDetails}
      />
    </CVInputSection>
  );
}

export default App;
