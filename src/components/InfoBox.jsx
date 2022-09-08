const InfoBox = ({ img, title, value }) => {
  return (
    <div className='w-[200px] h-[227px] bg-custom-white flex flex-col justify-center items-center gap-6 drop-shadow-xl'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <img src={img} alt='info' className='w-[50px] h-[50px]' />
        <p className=' text-center text-custom-blue text-[15px] uppercase font-bold'>
          {title}
        </p>
      </div>
      <p className='text-custom-black text-[30px] font-normal'>{value}</p>
    </div>
  );
};

export default InfoBox;
