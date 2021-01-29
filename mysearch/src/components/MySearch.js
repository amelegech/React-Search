import React from "react";
import BigData from "./mok/MOCK_DATA.json";
import "./MySearch.css";

/** Go to this website you will get MOK Data to search. download it then use it***/
//https://mockaroo.com/

const MySearch = () => {
  const [searchKey, setSearchKey] = React.useState("");
  const [onOff, setOnOff] = React.useState(true);
  
  return (
    <div className="container">
      <h3>Search by first name from thousend </h3>
      
      <lable style={{"font-size":"23px","color":"blue" }}>Search bar:</lable><input
        type="text"
        placeholder="Search Here"
        onChange={(event) => {
          setSearchKey(event.target.value);
        }}
      />
      {BigData.filter((item) => {
        if (searchKey === "") {
          //return item.id < 25    /*** Do this or somthing similar to get few */
          return item;
        } else if (
          item.first_name
            .toLocaleLowerCase()
            .includes(searchKey.toLocaleLowerCase())
        ) {
          return item;
        }
      }).map((item) => {
        return (
          <div key={item.id}>
            <p>{item.first_name} {item.last_name}</p>
      
          </div>
        );
      })}
    </div>
  );
};

export default MySearch;
