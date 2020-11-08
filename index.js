function ludo(){
    var a=Math.random();
    var b=Math.random();
    a=Math.floor((a*6)+1); 
    b=Math.floor((b*6)+1);


    if(a===1){
        document.querySelectorAll("img")[0].setAttribute("src" , "images/die_face_1.png" )
    }else if(a===2){
        document.querySelectorAll("img")[0].setAttribute("src" , "images/die_face_2.png" )
    }else if(a===3){
        document.querySelectorAll("img")[0].setAttribute("src" , "images/die_face_3.png" )
    }else if(a===4){
        document.querySelectorAll("img")[0].setAttribute("src" , "images/die_face_4.png" )
    }else if(a===5){
        document.querySelectorAll("img")[0].setAttribute("src" , "images/die_face_5.png" )
    }else{
        document.querySelectorAll("img")[0].setAttribute("src" , "images/die_face_6.png" )
    }


    if(b===1){
        document.querySelectorAll("img")[1].setAttribute("src" , "images/die_face_1.png" )
    }else if(b===2){
        document.querySelectorAll("img")[1].setAttribute("src" , "images/die_face_2.png" )
    }else if(b===3){
        document.querySelectorAll("img")[1].setAttribute("src" , "images/die_face_3.png" )
    }else if(b===4){
        document.querySelectorAll("img")[1].setAttribute("src" , "images/die_face_4.png" )
    }else if(b===5){
        document.querySelectorAll("img")[1].setAttribute("src" , "images/die_face_5.png" )
    }else{
        document.querySelectorAll("img")[1].setAttribute("src" , "images/die_face_6.png" )
    }


    if(a>b){
        document.querySelectorAll("div")[4].innerHTML="YOU WON";
    }else if(a<b){
        document.querySelectorAll("div")[4].innerHTML="BAPU WON";
    }else{
        document.querySelectorAll("div")[4].innerHTML="BOTH GOT SAME SCORE";
    }

}