

let ans=document.getElementById(`ans`)
let reset=document.getElementById(`clr`)

let nums=document.querySelectorAll('.num')

var input=document.getElementById('input')


input.value= '';
for(let num of nums){

    num.addEventListener('click',(e)=>{
         str =''
        buttonText=e.target.innerText;
        input.value += buttonText;

    })
}

reset.addEventListener('click',()=>{

    input.value=''
})

ans.addEventListener('click',()=>{
//     let evaluat= eval(input.value);

//     input.value=evaluat
        try{
        let evaluat= eval(input.value);

        input.value=evaluat
    }
    catch(err){
        alert("Invalid Input");
    }
})
