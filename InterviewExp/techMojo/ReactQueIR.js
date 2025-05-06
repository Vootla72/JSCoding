import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState();

  const getData = async () => {
    const res = await fetch("https://dummyjson.com/users");

    const result = await res.json();
    console.log(res);
    setData(result.users);
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log(data);
  const changeHandler = (e) => {
    setData1(e.target.value);
    // console.log(data1);
    // console.log(filterData(data1));
    // setData(filterData(data1));
  };
  function filterData(item1) {
    console.log(item1);

    // return data.filter((item) => item1 === item.firstName);
   return   data.forEach((item) => console.log( item.firstName));
  }
  return (
    <div className="App">
      <input type="text" onChange={changeHandler} />
      {data.map((item) => (
        <p>{item.firstName}</p>
      ))}
    </div>
  );
}
