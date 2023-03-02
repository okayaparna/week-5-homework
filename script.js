console.log('Start ticking...')
function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

  

    if(hh >= 12){
        session = "PM";
    }
    else{
        session = "AM";
    }

    if(session = "AM"){
        document.getElementById("day").style.display = "initial";
        document.getElementById("night").style.display = "none";
        document.getElementById("myvideo-day").style.display = "initial";
        document.getElementById("myvideo-night").style.display = "none";
    }

    else{
        document.getElementById("night").style.display = "initial";
        document.getElementById("day").style.display = "none";
        document.getElementById("myvideo-night").style.display = "initial";
        document.getElementById("myvideo-day").style.display = "none";
    }
   
    let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("hours").innerText = hh; 
    document.getElementById("minutes").innerText = mm; 
    document.getElementById("seconds").innerText = ss; 
    document.getElementById("period").innerText = session; 

    let t = setTimeout(function(){ currentTime() }, 1000); 

    if ( session = "AM" ) {
        document.getElementById("day").style.display = "initial";
        document.getElementById("night").style.display = "none";
    }
    if ( session = "PM" ) {
        document.getElementById("night").style.display = "initial";
        document.getElementById("day").style.display = "none";
    }

}

 

currentTime();