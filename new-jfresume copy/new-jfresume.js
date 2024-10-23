    function check (){
        let age=document.getElementById("age").value;
        if (Number(age) >= 18 && (Number(age)<=150)){
            document.getElementById("container").style.visibility="visible";
            document.getElementById("message").innerHTML= 'Welcome'
        }
        else if (Number(age) <0){
            document.getElementById("container").style.visibility="block";
            document.getElementById("message").innerHTML= 'Who even has a negative age?'
        }
        else if(isNaN(age)){
            document.getElementById("container").style.visibility="block";
            document.getElementById("message").innerHTML= 'Letters? Can you even read?'
        }
        else if(Number(age)%1>0){
            document.getElementById("container").style.visibility="block";
            document.getElementById("message").innerHTML= 'Good try, but decimals do not work.'
        }
        else{
            document.getElementById("container").style.visibility="block";
            document.getElementById("message").innerHTML= 'You are not old enough.'
        }
    }