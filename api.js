
         const api_url = "https://api.npoint.io/d08b986e7b636ef38e44";

async function getUser() {
  const response = await fetch(api_url);

  // Parsing it to JSON format
  const data = await response.json();

  // Retrieving data from JSON
  const user = data[3];

  // for courses
  const Courses = user.Courses;
  if(Courses){
      for (let i = 0; i < Courses.length; i++){
          let list = document.createElement('li');
          list.innerText=Courses[i];
          document.querySelector('#courses-list').appendChild(list);
        }
    }
    // for Publications
    
    const Publications = user.Publications;
    if(Publications){
      for (let i = 0; i < Publications.length; i++){
        let list = document.createElement('li');
        list.innerText=Publications[i];
        document.querySelector('#publication-list').appendChild(list);
      }
    }
    
        // for interest 
        const Interest = user.Interest;
        if(Interest){
        for (let i = 0; i < Interest.length; i++){
            let list = document.createElement('li');
            list.innerText=Interest[i];
            document.querySelector('#Interest-list').appendChild(list);
        }
        }


        const img = document.createElement("img");
        img.src = user.Img;
        if(user.Img)document.querySelector(".photo").appendChild(img);
        if(user.Fullname)document.querySelector(".name").innerHTML = user.Fullname;
        if(user.Rank)document.querySelector(".profession").innerHTML = user.Rank;
        if(user.Major)document.querySelector(".paragraph").innerHTML = user.Major;
        if(user.Email){document.querySelector("#userMailText").innerHTML = user.Email;
            var ab = document.querySelector("#userMail");
            ab.setAttribute("href", "mailto:" + user.Email);};
        if(user.University1)document.querySelector("#University1").innerHTML = user.University1;
        if(user.Country1)document.querySelector("#Country1").innerHTML = user.Country1;
        if(user.Year1)document.querySelector("#Year1").innerHTML = user.Year1;
        if(user.University2)document.querySelector("#University2").innerHTML = user.University2;
        if(user.Country2)document.querySelector("#Country2").innerHTML = user.Country2;
        if(user.Year2)document.querySelector("#Year2").innerHTML = user.Year2;
        if(user.University3)document.querySelector("#University3").innerHTML = user.University3;
        if(user.Country3)document.querySelector("#Country3").innerHTML = user.Country3;
        if(user.Year3)document.querySelector("#Year3").innerHTML = user.Year3;
        

        if(user.Building)document.querySelector("#building").innerHTML = user.Building;
        if(user.Floor)document.querySelector("#floor").innerHTML = ", Floor:" + user.Floor;
        if(user.Office)document.querySelector("#office").innerHTML = user.Office;
        }
        // Calling the function
        getUser();
    
