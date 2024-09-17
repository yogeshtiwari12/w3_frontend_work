import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaTelegram, FaLinkedin } from "react-icons/fa";

const socialPlatforms = [
  { name: "Instagram", points: 300, icon: <FaInstagram color="#E1306C" /> },
  { name: "Facebook", points: 225, icon: <FaFacebook color="#1877F2" /> },  
  { name: "X", points: 85, icon: <FaTwitter color="#1DA1F2" /> },           
  { name: "YouTube", points: 130, icon: <FaYoutube color="#FF0000" /> },    
  { name: "Telegram", points: 60, icon: <FaTelegram color="#0088cc" /> },   
  { name: "LinkedIn", points: 30, icon: <FaLinkedin color="#0077B5" /> },   
];

const SocialMediaTask = () => {
  return (
    <div className="p-4 rounded-lg my-4 bg-white border border-gray-200">
      <div className="font-semibold text-gray-700 mb-4">Social Media Task</div>
      <div className="grid grid-cols-3 gap-4">
        {socialPlatforms.map((platform, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md"
          >
            <div className="text-2xl">{platform.icon}</div>
            <div className="font-semibold">{platform.name}</div>
            <div className="text-sm text-green-500">+{platform.points}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaTask;
