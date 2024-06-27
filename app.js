let key = "25f9e0b64ec14751a01daf5acc9f57ba";
let cardData = document.querySelector(".cardData");
let searchBtn = document.getElementById("searchBtn");
let inputData = document.getElementById("inputData");
let searchType = document.getElementById("type");

const getData = async (newsValue) => {
  let res = await fetch(
    `https://newsapi.org/v2/everything?q=${newsValue}&apiKey=${key}`
  );
  let data = await res.json();
  //   console.log(data);

  cardData.innerHTML = "";
  searchType.innerHTML='Search:'+newsValue;
  inputData.value=''
  data.articles.forEach((article) => {
    console.log(article);

    let divs = document.createElement("div");
    divs.classList.add("card");
    cardData.appendChild(divs);

    divs.innerHTML = `
      <img src="${article.urlToImage}" alt="404">
      <h3>${article.title}</h3>
      <p>${article.description}</p>
    `;
    divs.addEventListener('click', function(){
        window.open(article.url);
    })
  });
};

window.addEventListener("load", function () {
  getData("india");
});
searchBtn.addEventListener("click", function () {
  let inputValue = inputData.value;
  getData(inputValue);
});

function navClick (navName){
    if(navName == 'politics'){
        document.getElementById("politics").style.color='blue';
        document.getElementById("sports").style.color='white';
        document.getElementById("technology").style.color='white';

    }else if (navName == 'sports'){
        document.getElementById("sports").style.color='blue';
        document.getElementById("politics").style.color='white';
        document.getElementById("technology").style.color='white';
    }else if(navName == 'technology'){
        document.getElementById("technology").style.color='blue';
        document.getElementById("politics").style.color='white';
        document.getElementById("sports").style.color='white';
    }

    getData(navName)
}