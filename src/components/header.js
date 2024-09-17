import { FaGift, FaUserAlt } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md';
import { GiMoneyStack } from 'react-icons/gi';
const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md">
      <div className="text-lg font-bold">
        Home
      </div>
      <div className="flex items-center space-x-4">
      
        <div className="relative flex items-center">
          <MdNotifications className="text-2xl" />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">35</span>
        </div>
        <div className="flex items-center bg-green-100 rounded-full px-2 py-1">
          <GiMoneyStack className="text-lg text-green-600" />
          <span className="ml-1 text-green-600 text-sm">₹1.00</span>
        </div>
        <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
          <FaGift className="text-lg text-red-600" />
          <span className="ml-1 text-orange-500 text-sm">1000</span>
        </div>
        <div className="rounded-full bg-blue-100 p-1">
          <FaUserAlt className="text-2xl text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default Header;
