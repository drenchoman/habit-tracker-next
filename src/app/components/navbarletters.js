export default function Navbarletters({ letters }) {
  let split = letters.split('');
  console.log(split);

  return split.map((l, i) => (
    <div
      className="bg-neocard shadow-shadz mx-twopx rounded-md"
      key={i}
    >
      <span className=" hover:text-neobackground ">{l}</span>
    </div>
  ));
}
