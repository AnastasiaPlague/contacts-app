import Contacts from "./pages/contacts/contacts";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import "./App.css";

const queryCache = new QueryCache();

function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <div className="App">
        <Contacts />
      </div>
    </ReactQueryCacheProvider>
  );
}

export default App;
