let todo = document.querySelectorAll('.todo')
let done = document.querySelectorAll('.done')

for(let to of todo){
    to.className = 'done'
}
for(let doo of done){
    doo.className = 'todo'
}
