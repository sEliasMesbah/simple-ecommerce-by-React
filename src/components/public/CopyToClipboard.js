// components/CopyToClipboard.js
import React, { useState } from 'react';
import CopyIcon from './CopyIcon';

const CopyToClipboard = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error copying text: ', err);
    }
  };

  return (
    <button 
      className="btn btn-light btn-sm shadow d-flex align-items-center gap-2" 
      onClick={handleCopy}
    >
      <CopyIcon />
      {copied ? 'Copied!' : 'copy'}
    </button>
  );
};

export default CopyToClipboard;