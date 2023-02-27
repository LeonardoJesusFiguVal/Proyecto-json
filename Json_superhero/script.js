import "XMLHttpRequest";

const header= document.querySelector('header');
const section= document.querySelector('section');

const requestUrl= './superHero.json';
const request= new XMLHttpRequest();

request.open('GET', requestUrl);

request.responseType= 'json';
request.send();

request.onload = function(){
    const superHeroes= request.response;
    populateHeader(superHeroes);
    showHero(superHeroes);
}

