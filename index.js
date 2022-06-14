let countPoints = 0;


    function room1(){
        countPoints= countPoints - 20;
        console.log("incorrect");
        document.getElementById("scorePoints").innerHTML= countPoints;
    }

    function room2(){
        countPoints= countPoints+100;
        console.log("correct");
        document.getElementById("scorePoints").innerHTML= countPoints;
        alert("Congrats! You know where you are :)")
    }

    function room3(){
        countPoints= countPoints - 30;
        console.log("incorrect");
        document.getElementById("scorePoints").innerHTML= countPoints;
    }

    function room4(){
        countPoints= countPoints - 10;
        console.log("incorrect");
        document.getElementById("scorePoints").innerHTML= countPoints;
    }


    document.getElementById("scorePoints").innerHTML= countPoints;





//function pleaseWork(){
    //countPoints++;
    //console.log("yes");
//}

