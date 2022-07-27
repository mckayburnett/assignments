function getData(){
    axios.get("https://api.vschool.io/mckayburnett/todo")
    .then(res => listData(res.data))
    .catch(err => console.log(err))
}
function clearList(){
    const element = document.getElementById('todoList')
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}
function listData(data){
    clearList();
    for(let i=0; i<data.length; i++){
        const text = document.createElement('a')
        text.textContent = `(Check Box If Completed)`
        document.getElementById('todoList').appendChild(text);
        const box = document.createElement('input')
        box.setAttribute("type", "checkbox")
        document.getElementById('todoList').appendChild(box)
        box.addEventListener("change", function(){
            if (this.checked){
                h2Title.style.textDecoration = 'line-through'
                const updates = {
                    completed: true
                }
            axios.put(`https://api.vschool.io/mckayburnett/todo/${data[i]._id}`, updates)
            } else {
                h2Title.style.textDecoration = 'none'
                const updates = {
                    completed: false
                }
            axios.put(`https://api.vschool.io/mckayburnett/todo/${data[i]._id}`, updates)    
            }
        })
        
        let h2Title = document.createElement('h2')
        h2Title.textContent = `Title: ${data[i].title}`
        if(data[i].completed === true){
            h2Title.style.textDecoration = 'line-through'
        }
        document.getElementById('todoList').appendChild(h2Title);

        const h2des = document.createElement('h2')
        h2des.textContent = `Description: ${data[i].description}`
        document.getElementById('todoList').appendChild(h2des);
        const h2price = document.createElement('h2')
        h2price.textContent = `Price: ${data[i].price}`
        document.getElementById('todoList').appendChild(h2price);
        const h2ImgUrl = document.createElement('img')
        h2ImgUrl.src = data[i].imgUrl
        document.getElementById('todoList').appendChild(h2ImgUrl);
        const button = document.createElement('button')
        document.getElementById('todoList').appendChild(button)
        button.textContent = "Delete Item" 
        button.addEventListener("click", function(){
            axios.delete(`https://api.vschool.io/mckayburnett/todo/${data[i]._id}`)
            h2Title.remove(h2Title)
            h2des.remove(h2des)
            h2price.remove(h2price)
            h2ImgUrl.remove(h2ImgUrl)
            text.remove(text)
            box.remove(box)
            this.remove()
        })
    }
}


getData();
const todoForm = document["todoForm"]
todoForm.addEventListener("submit", function(e){
    e.preventDefault();
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value,
    }
    todoForm.title.value=""
    todoForm.description.value=""
    todoForm.price.value=""
    todoForm.imgUrl.value=""
    axios.post("https://api.vschool.io/mckayburnett/todo", newTodo)
    .then(result => getData(result))
    .catch(err => console.log(err))
})