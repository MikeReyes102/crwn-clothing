import { Outlet, Link } from 'react-router';
import CrownLogo from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
      <>
        <div className='navigation'> 
        <Link className='logo-container' to='/'>
            <img src={CrownLogo} alt='logo' className='logo' />
        </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>SHOP</Link>
                <Link className='nav-link' to='/contact'>CONTACT</Link>
                <Link className='nav-link' to='/sign-in'>SIGN IN</Link>
            </div>
        </div>
        <Outlet />
      </>
    )
  }

  export default Navigation;