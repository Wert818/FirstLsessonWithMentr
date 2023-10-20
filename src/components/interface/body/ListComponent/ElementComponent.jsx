import React from "react";

const ElementComponent = (props) => {
  console.log("propsElementComponent:", props);

  // const { id, currentId } = props;
  // console.log("props:", props);
  // const handleClick = () => {
  //   setCurrentElement(id);
  // };
  // console.log("id", id);
  //   return (
  //     <div
  //       className={`d-flex my-1 mx-1 justify-content-center ${
  //         currentElement === id ? "bg-success" : "backgroundMain"
  //       }`}
  //       style={{ borderRadius: 5 }}
  //       onClick={handleClick}>
  //       {props.text}
  //     </div>
  //   );
  // };

  return (
    <div
      className={`d-flex my-1 mx-1 justify-content-center ${
        props.currentId === props.id ? "bg-success" : "backgroundMain"
      }`}
      style={{ borderRadius: 5 }}
      onClick={(e) => {
        props.setCurrentURL_Id((prev) => (prev = props.id));
        props.setCountRow(0);
        props.setCountColumn(0);
      }}>
      {props.text}
    </div>
  );
};

export default ElementComponent;
