displayData=(data)=>{
    output = document.getElementById('output')
    output.value+=data
}

clearDisplay=()=>{
      document.getElementById("output").value = "";
      output.placeholder=0
    }

removeLastItem=()=>{
    output= document.getElementById('output')
    output.value=output.value.slice(0,-1)
}

displayResult=()=>{
    output= document.getElementById('output')
    try{
        output.value = eval(output.value)
    }
    catch{
        output.value=""
        output.placeholder="Invalid Expression"
    }
    finally{
       // console.log("operation completed");
       // must run code place here   
    }
    
}