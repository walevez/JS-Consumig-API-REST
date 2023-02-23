const allBodyTable = document.querySelector('#bodyTable');

let url = 'https://jsonplaceholder.typicode.com/posts'

fetch(url)
    .then(response => response.json())
    .then(data => showData(data))
    .catch(err => console.log(err))

const showData = (data)=>{
    console.log(data)
    
    for(let i = 0; i < data.length; i++){
        const lineTable = document.createElement('tr')

        const idUserTable = document.createElement('td')
        idUserTable.innerText = data[i].userId
        
        const idTable = document.createElement('td')
        idTable.innerText = data[i].id
        
        
        const tittleTable = document.createElement('td')
        tittleTable.innerText = data[i].title
        
        
        const bodyTable = document.createElement('td')
        bodyTable.innerText = data[i].body
        
        lineTable.append(idUserTable, idTable, tittleTable, bodyTable)
        allBodyTable.append(lineTable)
    }
}
