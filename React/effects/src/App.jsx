import Counter from "./Counter";
import QuoteFetcher from "./QuoteFetcher";
import QuoteFetcherLoader from "./QuoteFetcherLoader";
import "./App.css";
import ProfileViewerWithSearch from "./ProfileViewerWithSearch";

function App() {

  return (
    <>
      <Counter/>
      <QuoteFetcher/>
      <QuoteFetcherLoader/>
      <ProfileViewerWithSearch/>
    </>
  );
}

export default App
