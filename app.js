const randomMeal = document.getElementById("container");

async function getRandomMeal(){

  // Here you can consume any other API's also (use the api's present on the given website in the documentation)
  await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then(
    // should mention - why are we converting this response into json ( for this students must understand that
    // async returns a promise.
    // also tell them - as why are we using await - can give multiple senarios)
    response=>response.json())
  .then(data=>{

    // play around with logs -- and tell the students as how data looks in the console, and how to get a
    // particular data from the data object you get ( this process of explanation must be step by step).
    console.log(data.categories)
    html = "";
    const allCategories = data.categories;
    allCategories.forEach(meal => {
      // here you can also show -- they we can acheive the same - by using document.createElements("div") etc..
      html += `
      <div class="random-meal">    
          <img src = "${meal.strCategoryThumb}" alt = "food">
          <h2>${meal.strCategory}</h2>
          <p>${meal.strCategoryDescription}</p>      
      </div>` 
    });
    randomMeal.innerHTML = html;

  })
  .catch(()=>{
    console.log(alert)
  })

}

getRandomMeal();

// at the end of the presentation -- you can point out - the importance of file structure.
// as they might create multiple html files or style files -- you can give them a scenario where
// maintaining file structure becomes a very important part - for managing the project.