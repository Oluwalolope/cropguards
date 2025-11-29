import { Sprout } from "lucide-react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to='/'>
      <div className="flex items-center gap-2">
        <div className="size-10 bg-primary-clr rounded-xl inline-grid place-items-center">
          <Sprout className="size-6 text-white" />
        </div>
        <span className='text-xl text-gray-900'>CropGuards</span>
      </div>
    </Link>
  );
};

export default Logo;
