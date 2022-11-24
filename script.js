

let ans=document.getElementById(`ans`)
let reset=document.getElementById(`clr`)

let nums=document.querySelectorAll('.num')

var input=document.getElementById('input')

//------------------------- Accessing button text function-----------------
input.value= '';
for(let num of nums){

    num.addEventListener('click',(e)=>{


         str =''
        buttonText=e.target.innerText;
        input.value += buttonText;
 
    })
}


//------------------------- reset button function-----------------
reset.addEventListener('click',()=>{

    input.value=''
})


//------------------------- Calculation button function-----------------
ans.addEventListener('click',()=>{


    try{
        let evaluat= eval(input.value);

        input.value=evaluat
    }
    catch(err){
        alert("Invalid Input");
    }
    
})
