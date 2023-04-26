import "../css/styles.scss";
import "bootstrap";
import valid from "./view.js";
import render from "./render.js";
import elements from "./elements.js";

const state = {
  status: {
    url: "",
    valid: "",
    errors: [],
  },
};

// console.log(state.elements.btn);
elements("btn").addEventListener("click", async (e) => {
  e.preventDefault();
  const { value } = elements("input");
  state.status.url = value;
  elements("input").value = "";
  const { success, errors } = await valid(value);
  state.status.valid = success;
  state.status.errors = errors;
  console.log(state.status);
  render(state);
});
