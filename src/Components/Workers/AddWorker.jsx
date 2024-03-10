import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddWorker = (props) => {
  const [workerData, setWorkerData] = useState({
    name: "",
    salary: Number(""),
    id: null,
  });

  const minSalary = 10000;

  const onChangeWorkerHandler = (e) => {
    const { id, value } = e.target;
    setWorkerData((prevState) => ({ ...prevState, [id]: value }));
  };

  const addWorkerHandler = (e) => {
    e.preventDefault();
    const { name, salary } = workerData;
    if (name.trim().length === 0 || salary.trim().length === 0) {
      alert("Tüm alanları doldurunuz.");
      return;
    }

    if (+salary < minSalary) {
      alert(`${minSalary}'den küçük maaş girilemez`);
      return;
    }

    const newWorker = { ...workerData, id: props.workers.length + 1 };
    props.setWorkers((prevWorkers) => [...prevWorkers, newWorker]);
    console.log(props.workers);

    setWorkerData({
      name: "",
      salary: Number(""),
      id: null,
    });
  };

  return (
    <Card className="mt-10">
      <h1 className="text-center text-2xl font-bold text-white">Maaş Otomasyonu</h1>
      <form onSubmit={addWorkerHandler}>
        <div className="grid gap-1">
          <label className="text-white font-semibold" htmlFor="name">
            Çalışan İsmi
          </label>
          <input className=" p-2 rounded-md" type="text" id="name" placeholder="Çalışan ismi girin" value={workerData.name} onChange={onChangeWorkerHandler} />
        </div>
        <div className="grid gap-1">
          <label className="text-white font-semibold" htmlFor="salary">
            Maaş
          </label>
          <input className=" p-2 rounded-md" type="number" id="salary" min={minSalary} placeholder="Maaş girin" value={workerData.salary} onChange={onChangeWorkerHandler} />
        </div>
        <Button type="submit">Ekle</Button>
      </form>
    </Card>
  );
};

export default AddWorker;
