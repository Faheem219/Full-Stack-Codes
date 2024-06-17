export default function LoginForm(){
    return (
    <> {/* This is how to return multiple elements without using div, it is known as a React fragment */}
        <input type="password"/> {/* In JSX we have to close the input element by / unlike HTML or EJS*/}
        <input type="text"/> {/* BTW, the curly braces are used to escape JSX and just write JS (like EJS) */}
    </>
    );
}