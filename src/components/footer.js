import { FaHome, FaPlus, FaCog } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
      <div className="flex justify-around text-gray-500">
        <button className="focus:outline-none">
          <FaHome size={24} color="#4CAF50" /> {/* Green for Home */}
          <div className="text-xs">Home</div>
        </button>
        <button className="focus:outline-none">
          <FaPlus size={24} color="#2196F3" /> {/* Blue for Add */}
          <div className="text-xs">Add</div>
        </button>
        <button className="focus:outline-none">
          <FaCog size={24} color="#FF9800" /> {/* Orange for Settings */}
          <div className="text-xs">Settings</div>
        </button>
      </div>
    </div>
  );
};

export default Footer;
