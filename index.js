//we declare the id and classes value in variable.

const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll('.circle');

let currentActive = 1;


//we will now put event listner to the button 
next.addEventListener('click', () =>{
    currentActive++;
    if(currentActive>circles.length){
       currentActive = circles.length
    }
   update()
})

prev.addEventListener('click', () =>{
    currentActive--;

    if(currentActive<1){
       currentActive = 1
    }
   console.log(currentActive)

   update()
})


function update(){
    circles.forEach((circle,idx)=>{
        if(idx < currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })

//storing all the active state class in actives.
const actives = document.querySelectorAll('.active');

//making the progress baar run.
progress.style.width = (actives.length-1) / (circles.length-1)*100  + '%'

//checking the disablity.
if(currentActive===1){
    prev.disabled=true;
}else if(currentActive=== circles.length){
    next.disabled=true;
}else{
    prev.disabled=false;
    next.disabled=false;
}

}