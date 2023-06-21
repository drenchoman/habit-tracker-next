import signout from '../firebase/signout';

export default function Signout() {
  const handleClick = () => {
    signout();
  };

  return (
    <button
      className="bg-red-400 hover:bg-red-700 rounded py-2 px-4 rounded my-2 mx-2"
      onClick={handleClick}
    >
      Sign out
    </button>
  );
}
