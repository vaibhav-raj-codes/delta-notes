export default function SayHello({ userName="unknown", textColor= "gold" }) {
  return (
    <p style={{color: textColor}}>Hello, { userName }</p>
  );
}
