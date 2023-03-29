import * as yup from 'yup'
export default function valid(value){
    const yuppy = {value}

        let schema = yup.object().shape({
            value: yup.string().url().required()
    }) 
schema.isValid(yuppy).then((valid)=>{
    return valid
})
     

}
