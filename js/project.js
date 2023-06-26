let left = document.querySelector(".left-btn");
let right = document.querySelector(".right-btn");



let p = document.querySelector(".projects");

left.addEventListener("click" , function(){
    let active = document.querySelector(".p-active");
    let p_val = active.id;
    console.log(p_val);

    active.classList.remove("p-active");
    
    if (p_val -1 == 0) {
        p_val = 6;
    }
    else {
        p_val --;
    }

    console.log(p_val);
    let new_active = document.getElementById(`${p_val}`);
    new_active.classList.add("p-active");
})


right.addEventListener("click" , function(){
    let active = document.querySelector(".p-active");
  
    let p_val = active.id;
    console.log(p_val);
    p_val = parseInt(p_val);
    active.classList.remove("p-active");
    
    if (parseInt(p_val +1)   == 7) {
        p_val = 1;
    }
    else {
        p_val = p_val + 1;
    }

    console.log(p_val);
    let new_active = document.getElementById(`${p_val}`);
    new_active.classList.add("p-active");
    
})

