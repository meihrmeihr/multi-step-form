import Home from "./components/Home";
import StateContext from "./context/Statecontext";
const App = () => {
  return (<StateContext><Home /></StateContext> );
};

export default App;
