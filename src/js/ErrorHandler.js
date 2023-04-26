import elements from "./elements.js";
export default function errorHandler(state) {
  if (state.status.errors.includes("invalid")) {
    elements("errorP").textContent = "Ссылка должна быть валидным URL";
    // console.log(elements("errorP"))
  }

  // else if(state.status.errors.length === 0) elements('errorP').textContent = ''
}
// Ссылка должна быть валидным URL  url must be a valid URL
