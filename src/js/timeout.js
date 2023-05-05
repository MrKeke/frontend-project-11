import valid from "./validator.js";


export default async function timer(state){
    if(state.status.url.length === 0)return false
    setTimeout(() => {
        state.status.url.map((url)=>{
            const valid
        })
    }, 5000);
}