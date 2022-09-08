const TopCard = ({ img, name, isRating }) => {
  return (
    <div className='relative bg-custom-white w-[548px] h-[195px] flex gap-5 rounded-lg pt-8 pb-4 px-8 drop-shadow-lg'>
      {/* top banner  */}
      <div className='absolute top-0 left-0 text-[13px] p-3 tracking-widest bg-custom-orange text-custom-white w-[110px h-[30px] flex justify-center items-center'>
        Top customer
      </div>

      {/* left side */}
      <div className='left w-[50%] flex flex-col gap-2 justify-center'>
        <div className='flex items-center gap-5'>
          <img
            src={img}
            alt='navbar-profile'
            className='w-[72px] h-[72px] overflow-hidden rounded-full'
          />
          <p className='text-custom-black w-[20%] font-[17px]'>{name}</p>
        </div>
        <p className='text-custom-gray text-[11px] font-bold tracking-[1.65px] uppercase'>
          REVENUE / MONTH
        </p>
        <div className='w-[70%] flex justify-between items-center'>
          {isRating ? (
            <p className='text-custom-orange text-[19px] font-bold'>★★★★★</p>
          ) : (
            <p className='text-custom-black text-[19px] font-bold'>
              $ 13469.80
            </p>
          )}
          <p className='text-custom-success text-[19px] font-bold '>↑ 8%</p>
        </div>
      </div>

      {/* right side */}
      <div className='right w-[50%] flex flex-col gap-4 justify-end pb-1'>
        <p className='text-custom-black text-[31px] font-semibold '>$ 49,137</p>
        <p className='text-custom-gray text-[11px] font-bold tracking-[1.65px] uppercase'>
          PROCESSED ORDERS / MONTH
        </p>
        <div className='w-[70%] flex justify-between items-center'>
          <p className='text-custom-black text-[19px] font-bold'>182</p>
          <p className='text-custom-red text-[19px] font-bold '>↓ 8%</p>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
