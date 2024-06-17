export default function Heading({ color = "olive", text, fontSize }) {
  {/* Here we are setting styles using JS so use lowerCamelCase */}
  return <h1 style={{ color: color, fontSize: fontSize }}>{text}</h1>; 
}
