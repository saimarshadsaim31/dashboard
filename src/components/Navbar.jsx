import {
  MenuOutlined,
  SearchOutlined,
  ShoppingBasketOutlined,
} from '@mui/icons-material';
import navbarProfile from '../assets/images/navbar-profile.png';

const Navbar = () => {
  return (
    <nav className='bg-custom-primary text-custom-white w-full h-[141px] flex justify-between items-center pl-6 pr-24'>
      {/* navbar left part */}
      <div className='nav-left flex items-center justify-between gap-12'>
        <div className='flex flex-col justify-between items-center'>
          <ShoppingBasketOutlined style={{ width: '65px', height: '54px' }} />
          <span className='text-[17px]'>Baskyt</span>
        </div>
        <MenuOutlined style={{ width: '60px', height: '50px' }} />
      </div>
      {/* navbar right part */}
      <div className='nav-right flex items-center justify-between gap-12'>
        <SearchOutlined style={{ width: '60px', height: '50px' }} />
        <img
          src={navbarProfile}
          alt='navbar-profile'
          className='w-[61px] h-[61px] overflow-hidden rounded-full'
        />
      </div>
    </nav>
  );
};

export default Navbar;
