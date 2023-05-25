import React, { useState } from 'react';
import 'expo-dev-client';
import Whisper from 'whisper.rn';

const App = () => {
  const [text, setText] = useState('');

  const onTranscriptionResult = (result) => {
    setText(result.text);
  };

  const startTranscription = () => {
    Whisper.startTranscription();
  };

  return (
    <div>
      <h1>Speech to Text</h1>
      <p>{text}</p>
      <button onClick={startTranscription}>Start Transcription</button>
    </div>
  );
};

export default App;
