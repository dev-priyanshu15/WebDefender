/* global chrome */
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [blocklist, setBlocklist] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    chrome.storage.sync.get(['blocklist'], (data) => {
      setBlocklist(data.blocklist || []);
    });
  }, []);

  const addToBlocklist = () => {
    const updatedBlocklist = [...blocklist, inputValue];
    setBlocklist(updatedBlocklist);
    chrome.storage.sync.set({ blocklist: updatedBlocklist });
    setInputValue('');
  };

  const removeFromBlocklist = (url) => {
    const updatedBlocklist = blocklist.filter((item) => item !== url);
    setBlocklist(updatedBlocklist);
    chrome.storage.sync.set({ blocklist: updatedBlocklist });
  };

  return (
    <div className="App">
      <h1>Website Blocker</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add website URL"
      />
      <button onClick={addToBlocklist}>Add to Blocklist</button>
      <ul>
        {blocklist.map((url, index) => (
          <li key={index}>
            {url}
            <button onClick={() => removeFromBlocklist(url)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
