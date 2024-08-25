import { useState } from 'react';
import './styles/App.css';
import GeneralInputs from './components/GeneralInputs';
import CVInputSection from './components/CVInputSection';

function App() {
  return (
    <CVInputSection>
      <GeneralInputs />
    </CVInputSection>
  );
}

export default App;
