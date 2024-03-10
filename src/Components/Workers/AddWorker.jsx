import React, { useState, useRef, useEffect } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddWorker = () => {
  const inputRef = useRef(null);
  const [workerData, setWorkerData] = useState({
    name: "",
    salary: Number(""),
  });

  const onChangeWorkerHandler = (e) => {
    const { id, value } = e.target;
    setWorkerData((prevState) => ({ ...prevState, [id]: value }));
  };

  return (
    <Card className="mt-10">
      <h1 className="text-center text-2xl font-bold text-white">Maaş Otomasyonu</h1>
      <form>
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
          <input className=" p-2 rounded-md" type="number" id="salary" min={5000} placeholder="Maaş girin" value={workerData.salary} onChange={onChangeWorkerHandler} />
        </div>
        <Button type="submit">Ekle</Button>
      </form>
    </Card>
  );
};

export default AddWorker;
