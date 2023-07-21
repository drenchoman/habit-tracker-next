import GoAgainLetter from './goAgainLetter';

export default function GoAgainWrapper({ dates }) {
  return (
    <div className="flex flex-col items-center">
      {dates.map((innerArray, outerIndex) => (
        <div className="m-8" key={outerIndex}>
          {innerArray.map((d, innerIndex) => (
            <GoAgainLetter key={d.id} d={d} />
          ))}
        </div>
      ))}
    </div>
  );
}
