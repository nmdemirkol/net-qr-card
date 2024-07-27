import Logo from '@/component/logo';
import Navbar from '@/component/navbar';
import React from 'react';


interface LayoutProps {
  children: React.ReactNode;
  header: string;
  description: string;
}

const MainLayout: React.FC<LayoutProps> = ({ children ,header,description}) => {
  return (
    <>
    <Navbar/>
    <div className="main-layout">
      <div className="logo-area">
      <Logo
        type="large" // 'small', 'medium', veya 'large' seçebilirsiniz
        alt="My Logo"
        key={0}
 
      />
        
      </div>
      <div className="main-content">
        <div className='main-content-header'>
        <h1 className='main-content-title'> {header} </h1>
        <p className='main-content-description'> {description} </p>
        </div>
        {children}
      </div>
    </div>
    </>
  );
};

export default MainLayout;