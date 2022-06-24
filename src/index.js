console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function () {
    getImg();
    getName();
  
    let breedDropdown = document.querySelector("#breed-dropdown");
    breedDropdown.addEventListener("change", function (event) {
      let letter = event.target.value;
  
      checkFirstLetter(letter);
    });
  });
  
  let array_names = [];
  
  function getImg() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //   console.log(data.message[1]);
        for (let i = 0; i < data.message.length; i++) {
          let img_div = document.getElementById("dog-image-container");
          let img = document.createElement("img");
          img.id = "img";
          img_div.appendChild(img);
          img.src = data.message[i];
        }
      });
  }
  
  function getName() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (brd in data.message) {
          let img_name_div = document.getElementById("dog-breeds");
          let li = document.createElement("li");
          li.innerText = brd;
          img_name_div.appendChild(li);
  
          // populate the array for filtering
          array_names.push(brd);
          li.addEventListener("click", () => {
            li.style.color = "red";
          });
        }
      });
  }
  
  function checkFirstLetter(letter) {
    let img_name_div = document.getElementById("dog-breeds");
    img_name_div.innerHTML = "";
  
    for (let i = 0; i < array_names.length; i++) {
      if (array_names[i].charAt(0) === letter) {
        console.log(array_names[i]);
        let li = document.createElement("li");
        li.innerText = array_names[i];
        img_name_div.appendChild(li);
      }
    }
  }