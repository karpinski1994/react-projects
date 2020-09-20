import React from 'react'
import './Link.css'

const Link = ({url, title}) => {
  return (
    <div>
      <a
        className="App-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </div>
  );
}

export default Link
