import * as Yup from "yup";
import axios from "axios";

let content = "";
const schema = Yup.object().shape({
  url: Yup.string()
    .url("not URL")
    .test("valid", "invalid", async (value) => {
      const response = await axios.get(
        `https://allorigins.hexlet.app/get?url=${value}`
      );
      content = response.data.contents;
      return response.data.contents.includes("<title>");
    }),
});
export default async function valid(data) {
  try {
    await schema.validate({ url: data.trim() });
    return { success: true, errors: [], content };
  } catch (er) {
    return { success: false, errors: er.errors };
  }
}
