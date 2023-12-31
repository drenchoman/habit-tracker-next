import GoAgainLetter from './goAgainLetter';

export default function GoAgainWrapper({ dates }) {
  return (
    <div className="flex flex-col mb-4 items-center overflow-y-scroll overflow-x-hidden">
      {dates.map((innerArray, outerIndex) => (
        <div className="flex flex-row my-4" key={outerIndex}>
          {innerArray.map((d, innerIndex) => (
            <GoAgainLetter key={d.id} d={d} innerIndex={innerIndex} />
          ))}
        </div>
      ))}
    </div>
  );
}
