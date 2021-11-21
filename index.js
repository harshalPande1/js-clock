// setInterval(()=>{
//     let d = new Date();
//     let h = d.getHours();
//     let m = d.getMinutes();
//     let s = d.getSeconds();

//    let hrotion = h*30 + m/2;
//    let mrotion = m*6 ; 
//    let srotion = s*6 ; 

   
//    document.getElementById('hour').style.transform = `rotate(${hrotion}deg)`;
//    document.getElementById('min').style.transform = `rotate(${mrotion}deg)`;
//    document.getElementById('sec').style.transform = `rotate(${srotion}deg)`;
// },1000)

setInterval(()=>{
let d = new Date();
let hrotion = d.getHours();
let mrotion = d.getMinutes();
let srotion = d.getSeconds();
document.getElementById('hour').style.transform = `rotate(${hrotion*30 + mrotion/2}deg)`;
document.getElementById('minute').style.transform = `rotate(${mrotion*6}deg)`;
document.getElementById('second').style.transform = `rotate(${srotion*6}deg)`;
},1000);