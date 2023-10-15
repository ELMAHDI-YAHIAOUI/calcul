inputspace = document.querySelector('#input')

function display(num){
    inputspace.value += num
}

function clearResult(){
    inputspace.value = ""
}
function calcule(){
    try{
        inputspace.value = eval(inputspace.value)
    }
    catch(err){
        inputspace.value = "ERROR"
    }
}







