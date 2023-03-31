export default function errorHandler(state){
    if(state.status.error.length != 0){
        state.elements.errorP.textContent = 'Ссылка должна быть валидным URL'
    }
    
}
// Ссылка должна быть валидным URL