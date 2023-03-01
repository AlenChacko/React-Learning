import React from "react";
import Person from "./Person";

const NameList = () => {
  const names = ["Alen", "Chethas", "Shibin", "Fayiz"];
  const persons = [
    {
      id: 1,
      name: "Alen",
      age: 23,
      place: "Cherupuzha",
    },
    {
      id: 2,
      name: "Chethas",
      age: 29,
      place: "Mattannur",
    },
  ];
//   const personList = persons.map((persons) => (
//     <Person key={persons.id} persons={persons} />
//   ));

const nameList = names.map((names,index) => <h2 key={index }>{names},{index}</h2>)
  return <div>
    {/* {personList} */}
    {nameList}
    </div>;
};

export default NameList;
