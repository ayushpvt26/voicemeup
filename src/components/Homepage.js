
import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './homepage.css';



export default function Homepage() {

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    if (synth) {
      synth.onvoiceschanged = () => {
        const voices = synth.getVoices();
        setVoices(voices);
        setSelectedVoice(voices[0]); // Select the first voice by default
      };
    }
  }, []);

  const handleStartListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  };

  const handleStopListening = () => {
    SpeechRecognition.stopListening();
  };

  const handleSpeak = () => {
    if (!selectedVoice) return; // Ensure a voice is selected
    const utterance = new SpeechSynthesisUtterance(transcript);
    utterance.voice = selectedVoice;
    window.speechSynthesis.speak(utterance);
  };

  const handleVoiceChange = (event) => {
    const selectedVoiceIndex = event.target.value;
    setSelectedVoice(voices[selectedVoiceIndex]);
  };

  if (!browserSupportsSpeechRecognition) {
    return <div>Speech recognition not supported by your browser</div>;
  }

  return (
   <div className='main-page'>
       <h1>Echoscribe Studio</h1>

       <div className='btn-style'>
       <select value={selectedVoice ? voices.indexOf(selectedVoice) : ''} onChange={handleVoiceChange}>
               {voices.map((voice, index) => (<option key={index} value={index}>{voice.name}</option>))}
           </select></div>
      <div className='main-content'>
      
        {transcript}
      </div>
      <div className='btn-style'>
      
        <button onClick={handleStartListening}>Start</button>
        <button onClick={handleStopListening}>Stop</button>
        <button onClick={handleSpeak}>Speak</button>
             
      </div>
      </div>
  )
}
