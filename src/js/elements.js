export default function elements(key) {
  const elements = {
    errorP: document.querySelector("#dangerError"),
    input: document.querySelector("input"),
    btn: document.querySelector("#add"),
  };
  return elements[key];
}
