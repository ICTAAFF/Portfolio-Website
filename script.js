/***** This function will make a popup for my poster *****/
// Get  modal
     let modal = document.getElementById("myModal");
// Get the poster and insert it inside the modal
     let img = document.getElementById("myPoster");
     let modalImg = document.getElementById("poster1");
     img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
}
// Get the <span> element that closes the modal
     let span = document.getElementsByClassName("close")[0];
// When i click on <span> (x), the modal closes
     span.onclick = function() {
      modal.style.display = "none";
}

/********Algorithm **********/
function getLoad() {
      SA=document.querySelector("#input-SA").value;H=document.querySelector("#input-H").value;
      D=document.querySelector("#input-D").value;

       SA = parseInt(SA);
       H = parseInt(H);
       D = parseInt(D);

// Check if input is not a number else calculate 
      if(typeof(SA)!= 'number'|| typeof(H)!= 'number'||typeof(D)!= 'number'|| !SA || !H || !D ){
      document.querySelector("#load").textContent = "not able to be calculated! Please put numbers!";
      }
      else {
        let load = SA * H* D * 9.81 + " N";
       document.querySelector("#load").textContent = load;
      }
}

// Give Output
let calculate = document.querySelector("#calculate");
calculate.addEventListener("click", getLoad);
