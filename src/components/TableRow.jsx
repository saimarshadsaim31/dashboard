import { EmojiEmotions, Error, Stars } from '@mui/icons-material';
import navbarProfile from '../assets/images/navbar-profile.png';
import vendorImg from '../assets/images/vendor.png';

const TableRow = ({ smile, star, type }) => {
  return (
    <tr className='border-solid border-[25px] border-transparent'>
      <td className='pl-4 pr-2'>
        {type === 'normal' ? (
          <div className='w-[87px] h-[35px] bg-custom-danger py-4 px-4 flex justify-center items-center text-[14px] font-bold text-custom-red rounded-3xl'>
            Normal
          </div>
        ) : (
          <div className='w-[87px] h-[35px] bg-custom-yellow py-4 px-4 flex justify-center items-center text-[14px] font-bold text-custom-green rounded-3xl'>
            Squad
          </div>
        )}
      </td>

      <td className='text-start text-custom-black text-[14px] px-2'>25064</td>

      <td className='flex justify-start px-2'>
        <div className='flex gap-3 items-center'>
          <img
            src={navbarProfile}
            alt='navbar-profile'
            className='w-[50px] h-[50px] overflow-hidden rounded-full'
          />
          <div className='flex flex-col '>
            <p className='text-custom-black text-[13px] font-bold'>
              Tommy Hatcher
            </p>
            <p className='text-custom-gray text-[13px] font-semibold'>
              Eau Claire, WI 54701
            </p>
            <p className='text-custom-gray text-[13px] font-semibold'>
              +1 916-349-9169
            </p>
          </div>
        </div>
      </td>

      <td className='text-start text-custom-black text-[14px] px-2'>50480</td>

      <td className='text-start text-custom-black text-[14px] px-2'>3:12 PM</td>

      <td className='px-2'>
        <img src={vendorImg} alt='vendor' className='w-[47px] h-[47px] ' />
      </td>

      <td className='text-start text-custom-black text-[14px] px-2'>
        Bill Cohen
      </td>

      <td className='px-2'>
        <div className='w-[111px] h-[35px] bg-custom-success py-4 px-4 flex justify-center items-center text-[18px] font-bold text-custom-green rounded-3xl'>
          $ 123
        </div>
      </td>

      <td className='px-2'>
        {star ? (
          <Stars
            className='text-custom-orange '
            style={{ width: '32px', height: '32px' }}
          />
        ) : smile ? (
          <EmojiEmotions
            className='text-custom-success '
            style={{ width: '32px', height: '32px' }}
          />
        ) : (
          <Error
            className='text-custom-red '
            style={{ width: '32px', height: '32px' }}
          />
        )}
      </td>
    </tr>
  );
};

export default TableRow;
