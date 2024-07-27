
import React from 'react';
import Image from 'next/image';

type LogoType = 'small' | 'medium' | 'large';

interface LogoProps {
  type: LogoType;
  alt?: string;
}

const typeConfig = {
  small: { src: '/images/NetQRCard.png'  },
  medium: { src: '/images/NetQRCardM.png' },
  large: { src: '/images/NetQRCard.png' },
};

const Logo: React.FC<LogoProps> = ({ type, alt = 'Net QR Card' }) => {
  const {src} = typeConfig[type];

  return (
    <div className='logo'>
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500}
      style={{ display: 'block' }}
    /></div>
  );
};

export default Logo;