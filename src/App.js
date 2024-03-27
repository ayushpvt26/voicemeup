import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css';

function App() {

 

  const handel=()=>{
const value= new SpeechSynthesisUtterance(data);
  window.speechSynthesis.speak(value);
  }
  const { transcript,browserSupportsSpeechRecognition } = useSpeechRecognition();
  const startListening= ()=>SpeechRecognition.startListening({continuous:true,language:'en-IN'});
  let data="ayush";
 
 const stopListening=()=>SpeechRecognition.stopListening();


  if (!browserSupportsSpeechRecognition) {
    return <div>Speech recognition not supported by your browser</div>;
  }

  return (
    <>
      <div>
        Text to Speech
      </div>
      <div className='main-content'>
        { data=transcript}
        {console.log(data)}
      </div>
      <div className='btn-style'>
        <button>Copy</button>
        <button onClick={startListening}>Start</button>
        
        <button onClick={stopListening}>Stop</button>
        <button onClick={handel}>Speak</button>
          </div>
    </>
  );
}

export default App;
