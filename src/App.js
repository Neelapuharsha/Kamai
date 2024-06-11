import React from 'react';

import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <h1>Scroll Down</h1>
          <p>This section has a height of 2000px to enable scrolling and visualize the header behavior.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
