import DateTime from "./DateTime";

const InputComponent = ({ input }) => {
  if (input === false) {
    return (
      <div>
        <DateTime />
      </div>
    );
  } else if (Array.isArray(input)) {
    return input.map((i, idx) => (
      <h1 key={idx} className="arr-div">
        {i}
      </h1>
    ));
  } else
    return (
      <div className="text-parent">
        {" "}
        <h2 className="text">{input}</h2>
      </div>
    );
};
export default InputComponent;
