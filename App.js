import InputComponent from "./InputComponent";
import "./styles.css";

export default function App() {
  const arr = [
    false,
    [1, 2, 3, 4],
    "Hellow! This is Zafor. I am too much interested to get the opportunity! I wanna explore the Development World and become a top-class developer in next 3 years!. I'm waiting for a detailed discussion session. Feel free to contact with me at any time at zaforkhalid@gmail.com or +8801783092354 (whatsapp)."
  ];

  return (
    <div className="App">
      {arr.map((value, idx) => (
        <InputComponent input={value} key={idx} />
      ))}
      <p>
        Made with <span style={{ color: "red" }}>&#10084;</span> By ZAFOR
      </p>
    </div>
  );
}
