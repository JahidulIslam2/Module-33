const restCountry= () => {

    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then( data => countries(data))
}

restCountry()




const countries =(country) => {
    // console.log(country);
    const Element=document.getElementById('container');
            // for(const x => country)
    country.forEach((CountryData)=>{
        // console.log(CountryData);
            const NewElement=document.createElement('div')
            NewElement.classList.add('elementName');
            NewElement.innerHTML=`
            <h2>Country Name:${CountryData.name.common}</h2>
            <h3>Capital Name: ${ CountryData.capital ? CountryData.capital[0] : 'No Capital'}</h3>
            <button onclick="btnFunction('${CountryData.cca3}')" class="btn">Country Flag</button>
            `;
            Element.appendChild(NewElement)        
    });
    
}



const btnFunction = (code) =>{

    // const Url=
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then(response => response.json())
    .then(data => countryDetails(data))
// alert(countryCode);
    
}


const countryDetails =(Details) => {
    const falgElements=document.getElementById('falgs-id');
    falgElements.innerHTML=`
    <img src="${Details[0].flags.png}"></img>
    <h3>Continents: ${Details[0].continents}</h3>
    
    `;
    

}

