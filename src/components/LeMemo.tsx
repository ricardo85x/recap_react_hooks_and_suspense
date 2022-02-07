import { useState, ReactNode, memo } from "react";

interface LeMemoInterface extends React.HTMLAttributes<Element> {}

const Upper = memo(function Upper({ children }: LeMemoInterface) {
  const [count, setCount] = useState(0);
  console.log('rendering', children);

  return (
    <div>
      Uppercase version: {children?.toString().toLocaleUpperCase()}{" "}
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
})

export function LeMemo() {
  const [first, setFirstName] = useState("");
  const [last, setLastName] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "20px"}}>
      <label htmlFor="first-name-input">First Name</label>
      <input
        id="first-name-input"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Upper>{first}</Upper>

      <hr />
      <label htmlFor="last-name-input">Last Name</label>
      <input
        id="last-name-input"
        onChange={(e) => setLastName(e.target.value)}
      />
      <Upper>{last}</Upper>
    </div>
  );
}
