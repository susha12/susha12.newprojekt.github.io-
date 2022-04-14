let input = document.querySelectorAll("input");
for(let i=0; i <input.length; i++){
input[i].onclick = ()=>{
        input[i].value = "";
    }
    console.log("yes")
}