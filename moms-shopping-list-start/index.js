document.addItem.addEventListener('submit', function(event) {
    event.preventDefault()

    var newList = document.createElement('li')
    document.getElementById('list').append(newList)

    var listItem = document.getElementById('title').value
    var text = document.createElement('p')
    text.textContent = listItem
    newList.append(text)


    var buttonDiv = document.createElement('div')
    buttonDiv.style.display = 'flex'


    var edit = document.createElement('button')
    buttonDiv.append(edit)
    edit.style.width = '35px'
    edit.style.height = '20px'
    edit.style.marginLeft = "45%"
    edit.textContent = 'edit'
    edit.style.textAlign = 'center'
    edit.style.display = 'inline'

    var del = document.createElement('button')
    buttonDiv.append(del)
    del.style.width = '20px'
    del.style.height = '20px'
    del.style.display = 'flex'
    del.textContent = 'X'
    del.style.padding = '3px 3px'
    del.style.textAlign = 'center'
    del.style.display = 'inline'
    del.addEventListener('click', function(event) {
        console.log(event)
        var del2 = event.target.parentElement.parentElement
        document.getElementById('list').removeChild(del2)
    })

    list.style.textAlign = "center"
    newList.append(buttonDiv)
    document.getElementById('title').value = ""
})