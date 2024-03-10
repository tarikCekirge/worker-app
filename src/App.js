import AddWorker from './Components/Workers/AddWorker';
import WorkerList from './Components/UI/WorkerList';
import { useState } from "react";

function App() {
  const [workers, setWorkers] = useState([])

  return (
    <>
      <div className="  flex items-center justify-start flex-col  bg-slate-300  min-h-screen p-4 gap-4">
        <AddWorker workers={workers} setWorkers={setWorkers} />
        <WorkerList workers={workers} setWorkers={setWorkers} />
      </div>
    </>
  );
}

export default App;
