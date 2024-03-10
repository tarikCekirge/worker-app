import React from "react";
import Card from "../UI/Card";

const WorkerList = (props) => {
  if (props.workers.length < 1) return;
  const deleteWorker = (id) => {
    props.setWorkers((prevWorkers) => prevWorkers.filter((worker) => worker.id !== id));
  };

  return (
    <>
      <Card>
        <ul>
          <li className="flex justify-between text-white font-bold">
            <span>İsim</span>
            <span>Maaş</span>
          </li>
          {props.workers.map((worker) => (
            <li key={worker.id} className="flex justify-between text-white cursor-pointer hover:text-red-600 " onClick={() => deleteWorker(worker.id)}>
              <span>{worker.name}</span>
              <span>{worker.salary}₺</span>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default WorkerList;
