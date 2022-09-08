import item1 from '../assets/images/sidebar-item1.svg';
import item4 from '../assets/images/sidebar-item4.svg';
import item6 from '../assets/images/sidebar-item6.svg';
import item7 from '../assets/images/sidebar-item7.svg';
import item8 from '../assets/images/sidebar-item8.svg';
import item9 from '../assets/images/sidebar-item9.svg';

const Sidebar = () => {
  return (
    <nav className='bg-custom-primary w-[110px] min-h-full flex flex-col items-center gap-12 py-4'>
      <img src={item1} alt='sidebar-icon' className='w-[44px] h-[44px]' />
      <img src={item4} alt='sidebar-icon' className='w-[44px] h-[44px]' />
      <img src={item6} alt='sidebar-icon' className='w-[44px] h-[44px]' />
      <img src={item7} alt='sidebar-icon' className='w-[44px] h-[44px]' />
      <img src={item9} alt='sidebar-icon' className='w-[44px] h-[44px]' />
      <img src={item8} alt='sidebar-icon' className='w-[44px] h-[44px]' />
      <img src={item7} alt='sidebar-icon' className='w-[44px] h-[44px]' />
      <img src={item4} alt='sidebar-icon' className='w-[44px] h-[44px]' />
      <img src={item6} alt='sidebar-icon' className='w-[44px] h-[44px]' />
      <img src={item9} alt='sidebar-icon' className='w-[44px] h-[44px]' />
      <img src={item4} alt='sidebar-icon' className='w-[44px] h-[44px]' />
      <img src={item7} alt='sidebar-icon' className='w-[44px] h-[44px]' />
      <img src={item9} alt='sidebar-icon' className='w-[44px] h-[44px]' />
    </nav>
  );
};

export default Sidebar;
