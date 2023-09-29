const result = document.querySelector(".text");
const val = document.querySelectorAll(".val");
const ClearAll = document.querySelector(".ac");
const deleteVal = document.querySelector(".del");
const equals = document.querySelector(".equals");

//Display all values into the box

val.forEach((v)=>{
    v.addEventListener("click",()=>{
        result.value += v.value; 
    })
})

//For clearing all values
ClearAll.addEventListener("click",()=>{
    result.value = "";
})


//For deleting last digit 
deleteVal.addEventListener("click",()=>{
    result.value = result.value.slice(0,-1);
})

//For calculating result

equals.addEventListener("click",()=>{
    try{
        result.value = eval(result.value);
    }
    catch(e){
        alert(e);
    }
})