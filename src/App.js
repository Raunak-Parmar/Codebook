import {Allroute} from "./routes/Allroute"; 
import { Footer, Header } from './components';

function App() {
  return (
    <div className="App dark:bg-slate-800">
      <Header/>
      <Allroute/>
      <Footer/>
    </div>
  );
}

export default App;
