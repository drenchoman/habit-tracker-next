import signout from '../firebase/signout';
import { BiLogOut } from 'react-icons/bi';

export default function Signout() {
  const handleClick = () => {
    signout();
  };

  return (
    <div
      className="flex justify-end hover:cursor-pointer"
      onClick={handleClick}
    >
      <BiLogOut size={36} />
    </div>
  );
}
