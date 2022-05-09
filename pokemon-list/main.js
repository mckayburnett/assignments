const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();


function showData(arr){
    const pokemon = arr?.objects[0]?.pokemon
    for (let i=0; i<pokemon.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = pokemon[i].name
        document.body.appendChild(h1)
    }


}

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data)
    }
}
