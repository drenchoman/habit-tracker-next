import signout from '../firebase/signout';
import { BiLogOut, BiLogoGithub } from 'react-icons/bi';

export default function Signout() {
  const handleClick = () => {
    signout();
  };

  return (
    <div className="flex justify-between hover:cursor-pointer">
      <a
        rel="noopener"
        href="https://github.com/drenchoman/habit-tracker-next"
      >
        <BiLogoGithub size={36} />
      </a>

      <BiLogOut onClick={handleClick} size={36} />
    </div>
  );
}
