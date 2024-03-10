import AddWorker from './Components/Workers/AddWorker';
import WorkerList from './Components/UI/WorkerList';
import { useEffect, useState } from "react";

function App() {
  const [workers, setWorkers] = useState(localStorage.getItem("workers") ? JSON.parse(localStorage.getItem("workers")) : [])
  useEffect(() => {
    localStorage.setItem("workers", JSON.stringify(workers))
  }, [workers])

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
