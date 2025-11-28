import { MapPin } from "lucide-react";
import { Link } from "react-router";

const Logo = ({ darkBackground }: {darkBackground: boolean}) => {
  return (
    <Link to='/'>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg inline-grid place-items-center">
          <MapPin className="size-6 text-white" />
        </div>
        <span className={`text-xl ${darkBackground? 'text-white' : 'text-gray-900'} `}>Findr</span>
      </div>
    </Link>
  );
};

export default Logo;
