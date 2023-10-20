// import data from "../api/data";

export function saveAsFile(data) {
  const filename = "New title";
  let blob = new Blob([JSON.stringify(data, null, 4)], {
    type: "application/json",
  });
  if (window.navigator.msSaveAsOrOpenBlob) {
    window.navigator.SaveBlob(blob, filename);
  } else {
    const elem = window.document.createElement("a");
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
}
