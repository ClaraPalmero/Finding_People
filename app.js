document.getElementById('findButton').addEventListener('click', ()=>{
    const genderSelect = document.getElementById( 'gender-select' ).value;
    const countrySelect =document.getElementById( 'country-select' ).value;

    const url = `https://randomuser.me/api/?gender=${genderSelect}&nat=${countrySelect}&inc=name,location,phone,nat,dob,email,country,picture&exc=login`;

    fetch(url).then( response =>
         response.json()
        ).then( data => { 
            console.log( data );
            inputData( data )
        })
        .catch( e => console.log( 'error', e ))
        .finally(()=> console.log( 'operación finalizada' ))
})

const inputData = ( data ) => {
    let user = data.results[0];
    let name = `${ user.name.first } ${user.name.last}`;
    let age = `${ user.dob.age } years old`;
    let city = `${ user.location.city }`;
    let country = `${ user.location.country}`;
    let email = `${ user.email}`;
    let phone = `${ user.phone }`;
    let img = user.picture.large;

    const imgUser = document.getElementById( 'photoUser' );
    imgUser.src = img;

    const nameH2 = document.getElementById( 'nameH2' );
    nameH2.textContent = name;

    const ageLi = document.getElementById( 'ageLi' );
    ageLi.textContent = age;

    const cityLi = document.getElementById( 'cityLi' );
    cityLi.textContent = city;

    const countryLi = document.getElementById( 'countryLi' );
    countryLi.textContent = country;
    
    const emailLi = document.getElementById( 'emailLi');
    emailLi.textContent = email;

    const phoneLi = document.getElementById( 'phoneLi' );
    phoneLi.textContent = phone;
    
    const ul = document.getElementById('fichaUl');
    ul.appendChild(ageLi);
    ul.appendChild(cityLi);
    ul.appendChild(countryLi);
    ul.appendChild(emailLi);
    ul.appendChild(phoneLi);

    const article = document.getElementById('ficha');
    article.appendChild(nameH2);
    article.appendChild(ul);

    article.style.display = 'flex';
    location.href = '#fichaUl';
}



    

   
