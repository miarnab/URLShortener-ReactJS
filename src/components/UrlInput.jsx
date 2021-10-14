import React, { memo, useRef, useState } from 'react';
import ClipBoard from './ClipBoard';

const UrlInput = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const inputRef = useRef();

  function handleChange(e) {
    setInput(({input}) => e.target.value);
  }

  function handleSubmit(e, input) {
    e.preventDefault();
    fetch('https://api-ssl.bitly.com/v4/shorten', {
      method: 'POST',
      headers: {
          'Authorization': 'cfbee442e2646d1da5d87452bd432f6d579605b1',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "long_url": input, "domain": "bit.ly"})
    })
    .then(response => response.json())
    .then(data => {
      setResult(({result}) => data.link);
      inputRef.current.value = '';
      inputRef.current.focus();
    })
    .catch(e => setResult(({result}) => e));
  }

  return (
    <div className="cont-url center" id="container">
      <form>
        <label htmlFor="url-name">Input URL</label>
        <input type="url" id="url-name" ref={inputRef} placeholder="Input URL" onChange={e=>handleChange(e)}/>
        <button type="button" onClick={(e) => handleSubmit(e, input)} className="btn btn-outline-info" id="submit-button">Shorten</button>
      </form>
      <span className="arrow">▼</span>
      <ClipBoard url={result} />
    </div>
  );
};

export default memo(UrlInput);