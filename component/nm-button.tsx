import React from 'react';


interface NMButton {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
}

const NMButton: React.FC<NMButton> = ({ variant = 'primary', onClick, children }) => {
  return (
    <button className={'nm-button '+ variant} onClick={onClick}>
      {children}
    </button>
  );
};

export default NMButton;