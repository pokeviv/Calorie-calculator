function calculate(){
    var p = document.getElementById('protein').value;
    var c = document.getElementById('carbs').value;
    var f = document.getElementById('fat').value;
    var ans = (p*4)+(c*4)*(f*9);
    document.getElementById ('calories').value = ans;
}



/*<button.onclick= document.getElementById('protein')
{


    document.getElementById('calories').value = (p*4)+(c*4)*(f*9);

}

button.addEventListener("click", () =>{
    answer.value = (p*4)+(c*4)*(f*9);
});


closedFace.addEventListener("click", () => {
    if(openFace.classList.contains("open")) {
        openFace.classList.add("active");
        closedFace.classList.remove("active");
    }
});


#calories {

}
<input type = "button" value = "=" onclick = "form1.answer.value = eval(form1.answer.value) "></input>
*/