let YOUR_APP_ID = "c89cacb3";
let YOUR_APP_KEY = "f41aabd3f4fb3f9f5f571c71d77535bd";
let Q;

function myFunction() {
  Q = document.querySelector("#myText").value;
  console.log(Q);
  fetch(
    `https://api.edamam.com/search?q=${Q}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=50&dite=low-fat`

  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let result = data
      if (result.hits.length === 0) {
        alert(`Sorry 😞 Your search for ${Q} is unavilable.. Please search for another Recipe`);
      }
      result.hits.forEach((res) => {
          let healthLabel = ' ';
          let ingredientLine = ' ';
          res.recipe.ingredientLines.forEach((line) => {ingredientLine += line });
          res.recipe.healthLabels.forEach((label) => { healthLabel = label });
       
        var col = myDom("div", "col-lg-3 col-md-6 col-sm-12 mb-4 ");

        var card = myDom("div", "card h-100");
    
          var cardBody = myDom("div", "card-body");
          
          var cardFooter = myDom('div', 'card-footer');
    
          var img = myDom("img", "card-img-top");
          img.setAttribute("src", res.recipe.image);
          

        let h3 = myDom('h3', 'card-title');
          h3.innerHTML = `${res.recipe.label}`;
          
          let h5 = myDom('h5', 'card-title');
          h5.innerHTML = `Scource: <span>${res.recipe.source} </span>`;

        let pTag1 = myDom('p', 'card-text');
        pTag1.innerHTML = `Health Labels:  <span>${healthLabel} </span>`;

          let pTag2 = myDom('p', 'card-text');
        pTag2.innerHTML = `Calories: <span>${Math.floor(res.recipe.calories)}</span>`;

        let pTag9 = myDom('p', 'card-text');
        pTag9.innerHTML = `Meal Type: <span>${res.recipe.mealType}</span>`;
        

          
          let accordionDiv = myDom('div', 'accordion','accordionExample');
          let accCard1 = myDom('div', 'card');
          let accCardHead1 = myDom('div', 'card-header', 'headingOne');
          let btn1 = myDom('button', 'btn btn-link btn-block text-left');
          btn1.setAttribute('type', 'button');
          btn1.setAttribute('data-toggle', 'collapse');
          btn1.setAttribute('data-target', '#collapseOne');
          btn1.setAttribute('aria-expanded', 'true');
          btn1.setAttribute('aria-controls', 'collapseOne');
          btn1.innerHTML = "<span>Ingredient Lines</span>";

          let ingColDiv1 = myDom('div', 'collapse', 'collapseOne');
          ingColDiv1.setAttribute('aria-labelledby', 'headingOne');
          ingColDiv1.setAttribute('data-parent', '#accordionExample');

          let pTag3 = myDom('p', 'card-text');
          pTag3.innerHTML = ` ${ingredientLine}`;
          let ingColDivBody1 = myDom('div', 'card-body');
          ingColDivBody1.append(pTag3);
          ingColDiv1.append(ingColDivBody1);
          accCardHead1.append(btn1);
          accCard1.append(accCardHead1, ingColDiv1);
          
          let accCard2 = myDom('div', 'card');
          let accCardHead2 = myDom('div', 'card-header', 'headingTwo');
          let btn2 = myDom('button', 'btn btn-link btn-block text-left collapsed');
          btn2.setAttribute('type', 'button');
          btn2.setAttribute('data-toggle', 'collapse');
          btn2.setAttribute('data-target', '#collapseTwo');
          btn2.setAttribute('aria-expanded', 'false');
          btn2.setAttribute('aria-controls', 'collapseTwo');
          btn2.innerHTML = "<span>Total Nutrients</span>";

          let ingColDiv2 = myDom('div', 'collapse', 'collapseTwo');
          ingColDiv2.setAttribute('aria-labelledby', 'headingTwo');
        ingColDiv2.setAttribute('data-parent', '#accordionExample');
        
        
          let pTag4 = myDom('p', 'card-text');
          pTag4.innerHTML = `Vitamin A:<span> ${Math.floor(res.recipe.totalNutrients.VITA_RAE.quantity)} ${res.recipe.totalNutrients.VITA_RAE.unit}  </span>`;

          let pTag5= myDom('p', 'card-text');
          pTag5.innerHTML = `Vitamin B1: <span>${Math.floor(res.recipe.totalNutrients.THIA.quantity)} ${res.recipe.totalNutrients.THIA.unit}</span>`;

          let pTag6 = myDom('p', 'card-text');
          pTag6.innerHTML = `Vitamin B6: <span>${Math.floor(res.recipe.totalNutrients.VITB6A.quantity)} ${res.recipe.totalNutrients.VITB6A.unit}</span>`;

          let pTag7 = myDom('p', 'card-text');
          pTag7.innerHTML = `Vitamin B12: <span>${Math.floor(res.recipe.totalNutrients.VITB12.quantity)} ${res.recipe.totalNutrients.VITB12.unit}</span>`;

          let pTag8 = myDom('p', 'card-text');
        pTag8.innerHTML = `Vitamin C: <span>${Math.floor(res.recipe.totalNutrients.VITC.quantity)} ${res.recipe.totalNutrients.VITC.unit}</span>`;
        
        let pTag10 = myDom('p', 'card-text');
          pTag10.innerHTML = `Calcium:<span> ${Math.floor(res.recipe.totalNutrients.CA.quantity)} ${res.recipe.totalNutrients.CA.unit} </span>`;

          let pTag11= myDom('p', 'card-text');
          pTag11.innerHTML = `Cholesterol: <span>${Math.floor(res.recipe.totalNutrients.CHOLE.quantity)} ${res.recipe.totalNutrients.CHOLE.unit}</span>`;

          let pTag12 = myDom('p', 'card-text');
          pTag12.innerHTML = `Energy: <span>${Math.floor(res.recipe.totalNutrients.ENERC_KCAL.quantity)} ${res.recipe.totalNutrients.ENERC_KCAL.unit}</span>`;

          let pTag13 = myDom('p', 'card-text');
          pTag13.innerHTML = `Fat: <span>${Math.floor(res.recipe.totalNutrients.FAT.quantity)} ${res.recipe.totalNutrients.FAT.unit}</span>`;

          let pTag14 = myDom('p', 'card-text');
          pTag14.innerHTML = `Iron: <span>${Math.floor(res.recipe.totalNutrients.FE.quantity)} ${res.recipe.totalNutrients.FE.unit}</span>`;
         
          let ingColDivBody2 = myDom('div', 'card-body');
          ingColDivBody2.append(pTag10,pTag11,pTag12,pTag13,pTag14,pTag4,pTag5,pTag6,pTag7,pTag8);
          ingColDiv2.append(ingColDivBody2);
          accCardHead2.append(btn2);
          accCard2.append(accCardHead2,ingColDiv2);
          accordionDiv.append(accCard1,accCard2);
      
          let a = myDom('a');
          a.setAttribute('href', `${res.recipe.url}`);
          a.setAttribute('target', '_blank');
          a.innerHTML = '<span>Click for Complete Recipe</span>'
        

          cardBody.append(h3,h5, pTag1, pTag2,pTag9,accordionDiv);
          cardFooter.append(a);

        card.append(img,cardBody,cardFooter);
        col.append(card);
        resultRow.append(col);


      });
    })
    .catch((err) => console.log("Error:", err));
}


let resultRow = myDom('div', 'row resRow');
// MAIN CONTIANER
let conatiner = myDom('div', 'container main-container bg-warning');

// SEARCH 

let head = myDom('div', 'row');
let h1 = myDom('h1');
h1.innerHTML = "FIND YOUR RECIPE";
head.append(h1);
let searchRow = myDom('div', 'row  form-inline');
let searchCol = myDom('div', 'col-lg-9 col-md-9 col-sm-12');
let input = myDom('input', ' mr-sm-2 inpt-search','myText');
input.setAttribute('type', 'text');
input.setAttribute('placeholder','Search Your favorite Recipes here...')
let btnCOl = myDom('div', 'col-lg-3 col-md-3 col-sm-12');
let btn = myDom('button', 'btn btn-outline-success btn-search');
btn.setAttribute('type', 'submit');
btn.setAttribute('onclick', 'myFunction()');
btn.innerHTML = 'search';
searchCol.append(input);
btnCOl.append(btn);
searchRow.append(searchCol,btnCOl);



conatiner.append(head,searchRow,resultRow);
document.body.append(conatiner);
function myDom(elem, elemClass = '', elemId = '') {
    let element = document.createElement(elem);
    element.setAttribute('class', elemClass);
    element.setAttribute('id', elemId);
    return element;
}