
const takeQueto =() =>{
    fetch('https://api.kanye.rest')
    .then(IsRes => IsRes.json())
    .then(data => getData(data))
} 

const getData= kanyeData => {
        // console.log(kanyeData.quote)
        const getElement=document.getElementById('kanyeQueto');
        getElement.innerText=kanyeData.quote;
}

takeQueto()