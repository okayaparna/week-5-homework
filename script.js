console.log('Start ticking...')
// function currentTime() {
//     let date = new Date(); 
//     let hh = date.getHours();
//     let mm = date.getMinutes();
//     let ss = date.getSeconds();
//     let session = "AM";

  

//     if(hh > 12){
//         session = "PM";
//     }
   
//      hh = (hh < 10) ? "0" + hh : hh - "12";
//      mm = (mm < 10) ? "0" + mm : mm;
//      ss = (ss < 10) ? "0" + ss : ss;
      
//     //let time = hh + ":" + mm + ":" + ss + " " + session;
  
//     //document.getElementById("clock").innerText = time; 
    
//     document.getElementById("hours").innerText = hh; 
//     document.getElementById("minutes").innerText = mm; 
//     document.getElementById("seconds").innerText = ss; 
//     document.getElementById("period").innerText = session; 

//     let t = setTimeout(function(){ currentTime() }, 1000); 

//     if ( session = "AM" ) {
//         document.getElementById("day").style.display = "initial";
//         document.getElementById("night").style.display = "none";
//     }
//     if ( session = "PM" ) {
//         document.getElementById("night").style.display = "initial";
//         document.getElementById("day").style.display = "none";
//     }

// }

 

// currentTime();

// function currentTime() {
//     let date = new Date(); 
//     let hh = date.getHours();
//     let mm = date.getMinutes();
//     let ss = date.getSeconds();
//     let session = "AM";
  
//     if(hh == 0){
//         hh = 12;
//     }
//     if(hh > 12){
//         hh = hh - 12;
//         session = "PM";
//      }
  
//      hh = (hh < 10) ? "0" + hh : hh;
//      mm = (mm < 10) ? "0" + mm : mm;
//      ss = (ss < 10) ? "0" + ss : ss;
      
//      let time = hh + ":" + mm + ":" + ss + " " + session ;
  
//     document.getElementById("clock").innerText = time; 
//     let t = setTimeout(function(){ currentTime() }, 1000);
//   }
//   currentTime();

function displayTime (){
    var dateTime = new Date ();
    var hr = dateTime.getHours();
    var min = datetime.getMinutes ();
    var sec = dateTime.getSeconds ();
    var session = document.getElementById('period');
    
document.getElementById('hours').innerHTML = 'hr' ;
document.getElementById('minutes').innerHTML = 'min';
document.getElementById('seconds').innerHTML = 'sec';
}

setInterval(displayTime, 10);