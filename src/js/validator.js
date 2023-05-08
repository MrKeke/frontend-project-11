import * as Yup from 'yup';
import axios from 'axios';
import i18n from 'i18n';
import ruLang from './locales/ru.js'

i18n.init(ruLang)
function addProxy(url){
  const proxy = new URL('https://allorigins.hexlet.app/get?')
  proxy.searchParams.append('disableCache','true')
  proxy.searchParams.append('url', url)
  return decodeURIComponent(proxy)
}
async function doResponse(url){
  const response = await axios.get(url)
  return response
}
const schema = Yup.object().shape({
  url: Yup.string().url('invalid_URL').notOneOf([],'rss_already_exist').test('Network error test','network_error', async (url)=>{
    return doResponse(addProxy(url)).then((response)=>{
      return response.status === 200
    })
  }).test('Includes RSS','rss_havent', async (url)=>{
    return doResponse(addProxy(url)).then((response)=>{
      console.log(response.data.contents)
      return response.data.contents.includes('</rss>')
    })
  })
})
// console.log(schema.validate({url:'http://lenta.ru/l/r/EX/import.rs'}))