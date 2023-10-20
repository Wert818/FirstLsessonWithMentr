import { useRef } from "react";
import swal from "sweetalert";
import { saveUrls } from "../../../functions/saveUrls";
import { loadUrls } from "../../../functions/loadUrls";
import { saveAsFile } from "../../../functions/saveAsFile";
import data from "../../../api/data";

function ButtonsComponent(props) {
  // const Buffer = require("buffer/").Buffer;

  const upload = useRef(null);

  // console.log("Buttons: ", props);
  const handlerSaveClick = () => {
    saveUrls(data.urls);
  };

  const handlerLoadClick = () => {
    // console.log(loadUrls("dataAboutUrls"));
    props.setURLs(loadUrls("dataAboutUrls"));
  };

  function onChangeFile(event) {
    event.stopPropagation();
    event.preventDefault();

    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = function (ev) {
      const data = JSON.parse(ev.target.result);

      // const dataAfterBuffer = JSON.parse(data, null, 4);

      // console.log("data: ", data.urls);
      props.setURLs(data.urls);
      console.log("--------------------------------------------------------");
    };

    reader.readAsText(file);
  }

  const triggerInput = () => {
    upload.current.click();
  };

  // console.log("Count: ", props);

  const handlerCount = () => {
    if (props.JSON) {
      props.setCountRow(JSON.stringify(props.JSON).length);
      props.setCountColumn(Object.keys(props.JSON).length);
    }
  };

  // console.log("PROPSJSON: ", props.urls);
  const handlerSave = () => {
    if (props.urls.length !== 0) {
      saveAsFile(props.urls);
    } else {
      swal(
        "Загрузите данные!",
        "Нажмите на кнопку загрузить из файла",
        "error"
      );
    }
  };

  return (
    <div className="d-flex flex-column m-1 h-10 w-20 justify-content-center">
      <input
        className="hidden"
        type="file"
        id="myinput"
        ref={upload}
        onChange={onChangeFile}
      />

      <button className="btn backgroundMain mb-1" onClick={handlerSave}>
        Сохранить в файл
      </button>

      <button className="btn backgroundMain mb-1" onClick={triggerInput}>
        Загрузить из файла
      </button>

      <button className="btn backgroundMain mb-1" onClick={handlerLoadClick}>
        Загрузить
      </button>

      <button className="btn backgroundMain mb-1" onClick={handlerSaveClick}>
        Сохранить
      </button>

      <button className="btn backgroundMain mb-1" onClick={handlerCount}>
        Рассчитать
      </button>
    </div>
  );
}

export default ButtonsComponent;
