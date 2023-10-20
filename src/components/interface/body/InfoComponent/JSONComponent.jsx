import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getFindData } from "../../../../functions/getFindData";

const JSONComponent = (props) => {
  console.log("JSONComponent:", props);

  async function getDataToURL(data, currentId) {
    const dataUrl = getFindData(data, currentId);
    // console.log(dataUrl.url);
    if (dataUrl && dataUrl.url !== "") {
      try {
        await fetch(dataUrl.url).then((response) =>
          response.json().then((dataToJson) => props.setJSON(dataToJson))
        );
      } catch (error) {
        console.error(`Download error: ${error.message}`);
        toast.error("Введите корректно URL!");
      }
    } else {
      props.setJSON("");
      return "Empty";
    }
  }

  useEffect(() => {
    getDataToURL(props.urls, props.currentURL_Id);
    // console.log("JSON Component");
  }, [props.urls, props.currentURL_Id]);

  const getBeautyJSON = (json) => {
    let getJSON = json;
    return JSON.stringify(getJSON, null, 4);
  };

  // console.log(props.JSON);

  return (
    <div className="form-floating m-1">
      <textarea
        className="form-control min-height:50px"
        value={props.JSON.length !== 0 ? getBeautyJSON(props.JSON) : "Empty"}
      />
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default JSONComponent;
