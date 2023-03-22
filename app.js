
let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)
const alertDOM = document.querySelector("#alert")

const ALERT = `
<div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>HATA!</strong> Hatalı Bilgi Girdiniz.
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>
`

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#userName")
    const SCORE = document.querySelector("#score")

    if (USER_NAME.value && SCORE.value) { // alanların içinde değer varsa çalışacak yoksa ekleme yapmayacak
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = "" // bilgi gönderildiğinde inputların içi temizleniyor
        SCORE.value = "" // bilgi gönderildiğinde inputların içi temizleniyor
    } else {
        alertDOM.innerHTML = ALERT
    }
}

let userListDom = document.querySelector('#userList')

const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
        ${userName} 
        <span class="badge bg-primary rounded-pill">${score}</span>
        `
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDom.append(liDOM)
}