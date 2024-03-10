import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddWorker = (props) => {
  const [workerData, setWorkerData] = useState({
    name: "",
    salary: Number(""),
    id: null,
  });
  const [error, SetError] = useState();

  const minSalary = 10000;

  const onChangeWorkerHandler = (e) => {
    const { id, value } = e.target;
    setWorkerData((prevState) => ({ ...prevState, [id]: value }));
  };

  const addWorkerHandler = (e) => {
    e.preventDefault();
    const { name, salary } = workerData;
    if (name.trim().length === 0) {
      SetError({
        title: "İsim Alanı Zorunludur",
        message: "Lütfen isim giriniz",
      });
      return;
    }
    const salaryString = salary.toString();
    if (salaryString.trim().length === 0) {
      SetError({
        title: "Maaş Alanı Zorunludur",
        message: `Lütfen ${minSalary}'den büyük bir maaş değeri giriniz`,
      });
      return;
    }

    if (+salary < minSalary) {
      SetError({
        title: "Maaş Alanı Zorunludur",
        message: `Lütfen ${minSalary}'den büyük bir maaş değeri giriniz`,
      });
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

  const errorHandler = () => {
    SetError(null);
  };

  return (
    <>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
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
            <input className=" p-2 rounded-md" type="number" id="salary" placeholder="Maaş girin" value={workerData.salary} onChange={onChangeWorkerHandler} />
          </div>
          <Button type="submit">Ekle</Button>
        </form>
      </Card>
    </>
  );
};

export default AddWorker;
