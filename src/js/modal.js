import elements from "./elements.js";
function modalopen(info){
    console.log(info)
    const modalDiv = document.createElement('div')
    modalDiv.classList.add('modal-backdrop' ,'fade' ,'show')
    elements('body').append(modalDiv)
    console.log(elements('divModal'))
    elements('body').classList.add('modal-open')
    elements('body').setAttribute('style','overflow: hidden; padding-right: 0px;')
    elements('divModal').setAttribute('style','display: block;')
    elements('divModal').classList.add('show')


// aria-modal="true"

}
export default function postBtnsHandler(state){
    const post = state.post
    elements('postBtns').forEach((postBtn)=>{
        postBtn.addEventListener('click',(e)=>{
            e.preventDefault()
            const index = e.target.id
            console.log(post[index])
            modalopen(post[index]) 
            
        })
    })
}