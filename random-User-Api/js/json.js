

const randomUser=() => {
    fetch('https://randomuser.me/api/?results=100')
    .then(response => response.json())
    .then(data => randomData(data.results))

}

randomUser();

const randomData=users => {
console.log(users);
    const getElement=document.getElementById('container');    
        for(const getData of users ){
        const Created=document.createElement('div')
        Created.innerHTML=`
            <h4>Name: ${getData.id.name}</h4>
            <h4>Gender: ${getData.gender}</h4>
            <h4>City: ${getData.location.city}</h4>
            <h4>Email: ${getData.email}</h4>
            <h4>uuid: ${getData.login.uuid}</h4>

        `;
        getElement.appendChild(Created)
    }
}