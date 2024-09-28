import React from 'react';

const Button = ({ text, isActive, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick} 
        className={`p-2 shadow-md border ${
          isActive ? 'bg-lime-300 hover:bg-lime-400' : 'bg-lime-50 hover:bg-lime-100'
        } border-b-4 border-r-4 border-black font-bold`}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
