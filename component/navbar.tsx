import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { debug } from 'util';


const Navbar: React.FC = () => {

    const router = useRouter();
    const { pathname } = router;

    return (
        <nav className="navbar">
          
            <div className="nav-links">
                <div className= {'item ' + (pathname === '/' ?  'active' : '')}>

                <Link href={"/"}>Anasayfa</Link>
 
                </div>
                <div className= {'item ' + (pathname === '/about' ?  'active' : '')}>
                <Link href={"/about"}>Hakkımızda</Link>
              
                </div>
                <div className= {'item ' + (pathname === '/sss' ?  'active' : '')}>
                <Link href={"/sss"}>SSS</Link>
                
                </div>
                <div className= {'item ' + (pathname === '/support' ?  'active' : '')}>
                <Link href={"/support"}>Destek</Link>
          
                </div>
                <div className= {'item ' + (pathname === '/contact' ?  'active' : '')}>
                <Link href={"/contact"}>İletişim</Link>
              
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
