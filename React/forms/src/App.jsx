import UsernameForm from "./UsernameForm";
import SignUpForm from "./SignUpForm";
import BetterSignupForm from "./BetterSignupForm";
// import ShoppingListForm from "./ShoppingListForm";
import ShoppingList from "./ShoppingList";
import FormDemo from "./FormDemo";

function App() {

  return (
    <>
      <UsernameForm/>
      <SignUpForm/>
      <h3>Better Form:</h3>
      <BetterSignupForm/>
      <h3>Shopping List:</h3>
      <ShoppingList/>
      <h3>React Form from react-hook-form Library</h3>
      <FormDemo/>
    </>
  );
}

export default App
