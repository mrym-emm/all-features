import React from 'react';
import './App.css';
import YijuPhishingSimulator from './YijuPhishingSimulator';
import YijuStoryGame from './YijuStoryGame';
import YijuScrollRight from './YijuScrollRight'; ;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Components: <a href="https://github.com/mrym-emm/for-yiju/tree/main" target="_blank">All on GitHub</a></h1>
      </header>
      <main>
      <h2>For User Story 8? Phishing simulator (this using AI api)</h2>
      <h3>File are YijuPhishingSimulator.js</h3>
        <YijuPhishingSimulator />

        <h2>For User Story 3.2 Data Storytelling via side scrolling platform game, Since I use the embed code, as I update, it shuold be live here </h2>
        <h3>Files YijuStoryGame.js</h3>
        <YijuStoryGame />

        <h2>The same as above, just with the scroll right. No need to implement this if it doesnt fit the theme of the website, idc</h2>
        <h3>Files are YijuScrollRight.js, YijuScrollRight.css and same as above, YijuStoryGame.js</h3>
        <YijuScrollRight />
      </main>
    </div>
  );
}

export default App;
