import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import './App.css';
import {Footer} from './components/Footer'

export function App() {
    const info = "Random"//popdrilling ke liye
  return (
    <div className="App">
      <Header />
      <TaskList info = {info}/>
      <Footer/>
    </div>
  );
}
