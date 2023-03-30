import * as Yup from 'yup';
import axios from 'axios';

const schema = Yup.object().shape({
  url: Yup.string().url().test(
    'valid-url',
    'Invalid URL',
    async (value) => {
      try {
        const response = await axios.get(value);
        return response.status === 200;
      } catch (error) {
        return false;
      }
    },
  ),
});

async function validateData(data) {
  try {
    await schema.validate(data, { abortEarly: false });
    return { success: true };
  } catch (error) {
    return { success: false, errors: error.errors };
  }
}

// Example usage
const data = { url: 'https://example.com' };
const result = await validateData(data);
console.log(result);
