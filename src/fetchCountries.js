import debounce from 'lodash.debounce';
import template from './templates/markup-countries.hbs';
import markupTemplate from './templates/markup-list.hbs';
import showAlert from './notification';
const inputRef = document.querySelector('.input');
const containerRef = document.querySelector('.container');
inputRef.addEventListener('input', debounce(fetchCountries, 500));


function fetchCountries(searchQuery) {
    fetch(`https://restcountries.eu/rest/v2/name/`+searchQuery.target.value +`?fields=name;capital;languages;population;flag`).then(response => {
    const result = response.json(); 
    
    return result;
       
    })
    .then(countries => {
        if(countries.length > 10){
        showAlert();
        return;
        }
      if(countries.length >1 && countries.length <=10) {
         const markupMany = markupTemplate(countries);
         containerRef.innerHTML = markupMany; 
         
      } else if( countries.length === 1) {
       
        var  markup = template(countries);
        containerRef.innerHTML = markup;
      } 
      if(!countries.length) {
          containerRef.innerHTML = '';
      }
    })
    .catch(error => {
        console.log(error);
    })
    
}