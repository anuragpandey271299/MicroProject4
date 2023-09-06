let display = document.getElementById('displayArea');
display.value='0'

const operation = (passedValue) => {
    if(display.value=='0'){
        display.value=''
    }
    
    display.value += passedValue

}

const remove = () => {
    display.value = display.value.substring(0, display.value.length-1);
    if(display.value.length==0){
        display.value='0'
    }
}

const answer = () => {
    try{
    display.value=display.value.replace('x','*')
    display.value = parseFloat(eval(display.value).toFixed(6));
    }
    catch(error){
        alert("INVALID INPUT")
    }
    
}

const reset = () => {
    display.value = '0'
}