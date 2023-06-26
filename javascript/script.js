//first card
 var card_body = document.querySelector('.card-body1');
 var img_poster = document.querySelector('.poster');
 var data = fetch('http://www.omdbapi.com/?apikey=15aa753c&t=ant-man')
.then(res=>{
   return res.json();
}).then(data=>{
        img_poster.src = data.Poster;
        card_body.innerHTML += "Title : " + data.Title + "<br/>";
        card_body.innerHTML += "Year : " + data.Year + "<br/>";
        card_body.innerHTML += "Rating : " + data.imdbRating + "<br/>";
        card_body.innerHTML += "Released : " + data.Released + "<br/>";
        card_body.innerHTML += "Runtime : " + data.Runtime + "<br/>";
       
     console.log(data);
}).catch(error=>
    console.log(error)
);
//second card
var card_body2 = document.querySelector('.card-body2');
var img_poster2 = document.querySelector('.poster2');
var data = fetch('http://www.omdbapi.com/?apikey=15aa753c&t=spider-man')
.then(res=>{
  return res.json();
}).then(data=>{
       img_poster2.src = data.Poster;
       card_body2.innerHTML += "Title : " + data.Title + "<br/>";
       card_body2.innerHTML += "Year : " + data.Year + "<br/>";
       card_body2.innerHTML += "Rating : " + data.imdbRating + "<br/>";
       card_body2.innerHTML += "Released : " + data.Released + "<br/>";
       card_body2.innerHTML += "Runtime : " + data.Runtime + "<br/>";
      
    console.log(data);
}).catch(error=>
   console.log(error)
);
//third card
var card_body3 = document.querySelector('.card-body3');
var img_poster3 = document.querySelector('.poster3');
var data = fetch('http://www.omdbapi.com/?apikey=15aa753c&t=Avenger')
.then(res=>{
  return res.json();
}).then(data=>{
       img_poster3.src = data.Poster;
       card_body3.innerHTML += "Title : " + data.Title + "<br/>";
       card_body3.innerHTML += "Year : " + data.Year + "<br/>";
       card_body3.innerHTML += "Rating : " + data.imdbRating + "<br/>";
       card_body3.innerHTML += "Released : " + data.Released + "<br/>";
       card_body3.innerHTML += "Runtime : " + data.Runtime + "<br/>";
      
    console.log(data);
}).catch(error=>
   console.log(error)
);
//four card
var card_body4 = document.querySelector('.card-body4');
var img_poster4 = document.querySelector('.poster4');
var data = fetch('http://www.omdbapi.com/?apikey=15aa753c&t=avengers:endgame')
.then(res=>{
  return res.json();
}).then(data=>{
       img_poster4.src = data.Poster;
       card_body4.innerHTML += "Title : " + data.Title + "<br/>";
       card_body4.innerHTML += "Year : " + data.Year + "<br/>";
       card_body4.innerHTML += "Rating : " + data.imdbRating + "<br/>";
       card_body4.innerHTML += "Released : " + data.Released + "<br/>";
       card_body4.innerHTML += "Runtime : " + data.Runtime + "<br/>";
      
   //  console.log(data);
}).catch(error=>
   console.log(error)
);
//five card
var card_body5 = document.querySelector('.card-body5');
var img_poster5 = document.querySelector('.poster5');
var data = fetch('http://www.omdbapi.com/?apikey=15aa753c&t=titanic')
.then(res=>{
  return res.json();
}).then(data=>{
       img_poster5.src = data.Poster;
       card_body5.innerHTML += "Title : " + data.Title + "<br/>";
       card_body5.innerHTML += "Year : " + data.Year + "<br/>";
       card_body5.innerHTML += "Rating : " + data.imdbRating + "<br/>";
       card_body5.innerHTML += "Released : " + data.Released + "<br/>";
       card_body5.innerHTML += "Runtime : " + data.Runtime + "<br/>";
      
   //  console.log(data);
}).catch(error=>
   console.log(error)
);
//Six card
var card_body6 = document.querySelector('.card-body6');
var img_poster6 = document.querySelector('.poster6');
var data = fetch('http://www.omdbapi.com/?apikey=15aa753c&t=Avatar')
.then(res=>{
  return res.json();
}).then(data=>{
       img_poster6.src = data.Poster;
       card_body6.innerHTML += "Title : " + data.Title + "<br/>";
       card_body6.innerHTML += "Year : " + data.Year + "<br/>";
       card_body6.innerHTML += "Rating : " + data.imdbRating + "<br/>";
       card_body6.innerHTML += "Released : " + data.Released + "<br/>";
       card_body6.innerHTML += "Runtime : " + data.Runtime + "<br/>";
      
   //  console.log(data);
}).catch(error=>
   console.log(error)
);
//Seven card
var card_body7 = document.querySelector('.card-body7');
var img_poster7 = document.querySelector('.poster7');
var data = fetch('http://www.omdbapi.com/?apikey=15aa753c&t=iron-man')
.then(res=>{
  return res.json();
}).then(data=>{
       img_poster7.src = data.Poster;
       card_body7.innerHTML += "Title : " + data.Title + "<br/>";
       card_body7.innerHTML += "Year : " + data.Year + "<br/>";
       card_body7.innerHTML += "Rating : " + data.imdbRating + "<br/>";
       card_body7.innerHTML += "Released : " + data.Released + "<br/>";
       card_body7.innerHTML += "Runtime : " + data.Runtime + "<br/>";
      
   //  console.log(data);
}).catch(error=>
   console.log(error)
);
//Eight card
var card_body8 = document.querySelector('.card-body8');
var img_poster8 = document.querySelector('.poster8');
var data = fetch('http://www.omdbapi.com/?apikey=15aa753c&t=joker')
.then(res=>{
  return res.json();
}).then(data=>{
       img_poster8.src = data.Poster;
       card_body8.innerHTML += "Title : " + data.Title + "<br/>";
       card_body8.innerHTML += "Year : " + data.Year + "<br/>";
       card_body8.innerHTML += "Rating : " + data.imdbRating + "<br/>";
       card_body8.innerHTML += "Released : " + data.Released + "<br/>";
       card_body8.innerHTML += "Runtime : " + data.Runtime + "<br/>";
      
   //  console.log(data);
}).catch(error=>
   console.log(error)
);//more-infp



// var favourite_btn = document.getElementsByClassName('favourite');
// favourite_btn.addEventListener('click',myfunction);
// function myfunction(){
   
   
// }

// get elements by their ID
// for searching the data in api fetch
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
//fav_btn nav
 const  movies = [];
var fav_btn = document.getElementById("Fav_btn").onclick = async function(){
  //  localStorage.setItem('myArry',JSON.stringify(movies));
   var sessionString = localStorage.getItem('myArry')
   var data = JSON.parse(sessionString);
   console.log(data);
  //  var parentElement = document.getElementById('parentElementId');
  //   parentElement.innerHTML = " ";
  // //  while (parentElement.firstChild) {
  // //   parentElement.removeChild(parentElement.firstChild);
  // }
  var main_section = document.getElementsByClassName('main-section')[0];
  var parentElement = document.getElementById('parentElementId');
 
  // Step 2: Remove all child elements
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
  for(var i = 0; i < data.length; i++){
    var res = await fetch(`http://www.omdbapi.com/?apikey=15aa753c&t=${data[i]}`);
    var d = await res.json();
     //card
   var card = document.createElement('div');
   card.setAttribute('class','card_0');
   var main_section = document.getElementsByClassName('main-section')[0];
   

//row
   var row = document.createElement('div');
   row.setAttribute('class','row g-0');
   row.setAttribute('id','row_id');
  


//col 1
   var imgdiv = document.createElement('div');
   imgdiv.setAttribute('class','col-md-4');
   var card_poster = document.createElement('img');
   card_poster.setAttribute('class','img-fluid rounded-start poster0');

   imgdiv.appendChild(card_poster);

//col 2
   var bodydiv = document.createElement('div');
   bodydiv.setAttribute('class','col-md-8 info');
   var card_body = document.createElement('div');
   card_body.setAttribute('class','card-body0')
   bodydiv.appendChild(card_body)
//create button1
 var delete_btn = document.createElement('button');
 delete_btn.innerHTML = 'Delete';
  delete_btn.setAttribute('class','btn btn-success delete');
  delete_btn.setAttribute('id',`${d.Title}`);
bodydiv.appendChild(delete_btn);
//create button2



// bodydiv.appendChild(more_btn);


   row.appendChild(imgdiv);
   row.appendChild(bodydiv);
   card.appendChild(row);
  
  

 
  
   card_poster.src = d.Poster;
   card_body.innerHTML= "Title:"+ d.Title;
   card_body.innerHTML=card_body.innerHTML +"</br>"+ "Year:"+ d.Year;
  // console.log(data.Search[i].Title);
  
  main_section.appendChild(card);
//delete_btn functionality
  delete_btn.addEventListener('click',function(e){
  //    var id =e.target.getAttribute('id');

  //    var arr =  JSON.parse(localStorage.getItem('myArry'));
  //   //  movies = id;
  //   console.log(id);
  //   localStorage.removeItem('myArry');

     
    
  //  // console.log(index);
  
  
  //   //var arr = Title.filter((item,i) => i!==index);
  //   // localStorage.removeItem("myArry");
  //  //localStorage.setItem('myArry',JSON.stringify(arr));
   
  //   // arr.splice(index, 1);
  //  // localStorage.setItem("myArry", JSON.stringify(arr));
  //   console.log(localStorage.getItem('myArry'));
  var id = e.target.getAttribute('id');
  var arr = JSON.parse(localStorage.getItem('myArry'));

  // Find the index of the item with the matching ID
  var index = arr.findIndex(item => item.id === id);
 console.log(index);
  // Check if the index is valid (-1 means ID not found)
  // if (index !== -1) {
    // Remove the item from the array
    parentElement.removeChild(parentElement.firstChild);
    arr.splice(index, 1);
    // Update the local storage with the modified array
    localStorage.setItem('myArry', JSON.stringify(arr));
    console.log(localStorage.getItem('myArry'));
  //}



  })

  }
}
//home btn in navbar functionality
var Home_btn = document.getElementById('home').onclick = function(){
  
  var main_section = document.getElementsByClassName('main-section')[0];
  var parentElement = document.getElementById('parentElementId');
  location.reload();
 
 }



// searchInput.innerHTML = fetch(`http://www.omdbapi.com/?apikey=15aa753c&s=${searchInput.value}`);
// add event listener to the button
// searchButton.addEventListener('click', function() {
//   // get the search input value
//   const searchTerm = searchInput.value;
//   // do something with the search term (e.g. redirect to a search results page)
//   console.log(`Searching for "${searchTerm}"...`);
// });

// add event listener to the input (if you want to trigger the search on Enter keypress)
searchButton.addEventListener('click',async function(event) {
   event.preventDefault();
   var value = searchInput.value;

  var res = await fetch(`http://www.omdbapi.com/?apikey=15aa753c&s=${value}`);
  var data = await res.json();
  console.log(data);
  var main_section = document.getElementsByClassName('main-section')[0];
  var parentElement = document.getElementById('parentElementId');

// Step 2: Remove all child elements
while (parentElement.firstChild) {
  parentElement.removeChild(parentElement.firstChild);
}
 
 
 
 


 
  
   for(var i=0;i<data.Search.length;i++)
   {
      //card
   var card = document.createElement('div');
    card.setAttribute('class','card_0');
    

//row
    var row = document.createElement('div');
    row.setAttribute('class','row g-0');
    row.setAttribute('id','row_id');
   


//col 1
    var imgdiv = document.createElement('div');
    imgdiv.setAttribute('class','col-md-4');
    var card_poster = document.createElement('img');
    card_poster.setAttribute('class','img-fluid rounded-start poster0');

    imgdiv.appendChild(card_poster);

//col 2
    var bodydiv = document.createElement('div');
    bodydiv.setAttribute('class','col-md-8 info');
    var card_body = document.createElement('div');
    card_body.setAttribute('class','card-body0')
    bodydiv.appendChild(card_body)
//create button1
  var favourite_btn = document.createElement('button');
  favourite_btn.innerHTML = 'Add-Favourite';
  favourite_btn.setAttribute('class','btn btn-success favourite1');
  favourite_btn.setAttribute('id',`${data.Search[i].Title}`);
bodydiv.appendChild(favourite_btn);
//create button2
var more_btn = document.createElement('button');
more_btn.innerHTML = 'more-info';
more_btn.setAttribute('class','btn btn-success more-info1');
more_btn.setAttribute('data-bs-toggle','collapse');
more_btn.setAttribute('data-bs-target','#collapseWidthExample');
more_btn.setAttribute('aria-expanded','false');
more_btn.setAttribute('aria-controls','collapseWidthExample');
more_btn.setAttribute('id',`${data.Search[i].Title}`);



bodydiv.appendChild(more_btn);


    row.appendChild(imgdiv);
    row.appendChild(bodydiv);
    card.appendChild(row);
   
   

  
   
    card_poster.src = data.Search[i].Poster;
    card_body.innerHTML= "Title:"+ data.Search[i].Title;
    card_body.innerHTML=card_body.innerHTML +"</br>"+ "Year:"+ data.Search[i].Year;
   console.log(data.Search[i].Title);
   
   main_section.appendChild(row);

   //favourte btn functionlity
 
   favourite_btn.addEventListener('click',async function(e){
       var Title = e.target.getAttribute('id');
     var apiurl = await fetch(`http://www.omdbapi.com/?apikey=15aa753c&t=${Title}`);
     var data = await apiurl.json();
     console.log(data);
     if(movies.includes(Title)){
        return;
     }
     movies.push(data.Title);
     localStorage.setItem('myArry',JSON.stringify(movies));
    
    
     })

    
   
   //more-info functionality


more_btn.addEventListener('click',async function(e){
  var Title = e.target.getAttribute('id');
  var apiurl = await fetch(`http://www.omdbapi.com/?apikey=15aa753c&t=${Title}`);
  var data = await apiurl.json();
  //card
  var Details = document.getElementById('details');
  while(Details.firstChild){
   Details.removeChild(Details.firstChild);
  }
  
  //row
  var row = document.createElement('div');
  row.setAttribute('class','row g-0');
  
  //col 1
  var imgdiv = document.createElement('div');
  imgdiv.setAttribute('class','col-md-4');
  var card_poster = document.createElement('img');
  card_poster.setAttribute('src',`${data.Poster}`);
  card_poster.setAttribute('class','img-fluid rounded-start poster0');

  imgdiv.appendChild(card_poster);

//col 2
  var bodydiv = document.createElement('div');
  bodydiv.setAttribute('class','col-md-8 info');
  var card_body = document.createElement('div');
  card_body.setAttribute('class','card-body_0')
  bodydiv.appendChild(card_body)
//create button1
// var favourite_btn = document.createElement('button');
// favourite_btn.innerHTML = 'Add-Favourite';
// favourite_btn.setAttribute('class','btn btn-success favourite_1');
// bodydiv.appendChild(favourite_btn);
//create button2
var back_btn = document.createElement('button');
back_btn.innerHTML = 'Back';
back_btn.setAttribute('class','btn btn-success back');
back_btn.setAttribute('data-bs-toggle','collapse');
back_btn.setAttribute('data-bs-target','#collapseWidthExample');
back_btn.setAttribute('aria-expanded','false');
back_btn.setAttribute('aria-controls','collapseWidthExample');
bodydiv.appendChild(back_btn);

//appendchild
    row.appendChild(imgdiv);
    row.appendChild(bodydiv);
    Details.appendChild(row);


    card_body.innerHTML="Title :"+ data.Title;
    card_body.innerHTML=card_body.innerHTML +"</br>"+ "Year:"+ data.Year+ "<br>"+ "Plot:"+data.Plot+
    "<br>"+"Caste:"+data.Actors+"<br>"+"Runtime:"+data.Runtime+"<br>"+"Rating:"+data.imdbRating+
    "<br>"+"Genre:"+data.Genre+"<br>"+"Director:"+data.Director;
  //back btn


 


  
});
//favourte_btn


}


  if (event.keyCode === 13) {
    // simulate a button click to trigger the search
    searchButton.click();
  }
});

 


