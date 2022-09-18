import Sidebar from './Sidebar';
import TopCard from './TopCard';
import InfoBox from './InfoBox';
import boxImg from '../assets/images/Icon-1.svg';
import topCardImg from '../assets/images/navbar-profile.png';
import chartImg from '../assets/images/chart.jpeg';
import Table from './Table';

const Main = () => {
  return (
    <div className='main bg-custom-bg flex'>
      <Sidebar />
      <main className='w-full p-16 flex flex-col gap-16'>
        {/* top most section  */}
        <section className='topMost w-full flex justify-between items-center'>
          <button className='bg-custom-white w-[150px] h-[60px] text-custom-text text-[22px] font-semibold drop-shadow-md'>
            Filter by
          </button>
          <button className='bg-custom-red w-[266px] h-[68px] text-custom-white text-[24px] font-semibold drop-shadow-md rounded-full'>
            TQM
          </button>
        </section>

        {/* info section */}
        <section className='top w-full flex items-center gap-8 '>
          <div className='left grid grid-cols-4 gap-x-8 gap-y-8'>
            <InfoBox img={boxImg} title='customers' value='7346' />
            <InfoBox img={boxImg} title='orders' value='12907' />
            <InfoBox img={boxImg} title='delivery' value='12907' />
            <InfoBox img={boxImg} title='users' value='$ 7340' />
            <InfoBox img={boxImg} title='revenue' value='4.0' />
            <InfoBox img={boxImg} title='avg rating ' value='$1207' />
            <InfoBox img={boxImg} title='customer' value='7346' />
            <InfoBox img={boxImg} title='user' value='7346' />
          </div>
          <div className='right w-[804px] h-[488px]'>
            <img src={chartImg} alt='chart' />
          </div>
        </section>

        {/* center section */}
        <section className='center w-full grid grid-cols-3 gap-6 overflow-hidden'>
          <TopCard img={topCardImg} name='Christina Ambrosia' />
          <TopCard img={topCardImg} name='Alex Williams' isRating />
          <TopCard img={topCardImg} name='Desi Accent' />
        </section>

        {/* bottom section */}
        <section className='overflow-hidden'>
          <p className='text-custom-black text-[26px] font-semibold tracking-[.19px] mb-4'>
            Active orders
          </p>
          <Table />
        </section>
      </main>
    </div>
  );
};

export default Main;
