let Show_Counter = document.querySelector(".Show_Count");

const decrement = () => {
    let current_value = Show_Counter.innerHTML;
    if(current_value > 0){
        Show_Counter.innerHTML = +Show_Counter.innerHTML - 1;
    }else{
         alert("Please Increament First!")
    }
}
const increament = () => {
    Show_Counter.innerHTML = +Show_Counter.innerHTML + 1;
}
const reset = ()=>{
    Show_Counter.innerHTML = 0;
}