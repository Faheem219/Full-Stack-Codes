export default function Greeter(props){  {/* This is how to access the props, can also use destructuring here */}
    return (
    <>
        <h3>Hi There, {props.person}!!</h3>
        <h4>---{props.from}</h4>
    </>
    );
}