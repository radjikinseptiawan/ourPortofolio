const btnAbt = document.getElementById("btnAbt");
const abtm = document.getElementById("abtm");
const btnHub = document.getElementById("btnHub");
const footer = document.getElementById("footer")
//TODO : bikin slider nanti
// const skill = document.getElementById("skill-box");


// const arrayPage = [skill]
// function slider(){
    
// }


function showBio(){
     btnAbt.style.borderColor = "#06388a"
return new Promise((success,failed)=>{
setTimeout(()=>{
    btnAbt.textContent = "Tentang Saya";
    if(abtm.style.display === "none"){
        btnAbt.textContent = "Tutup";
        btnAbt.style.borderColor = "#020f24"
        abtm.style.display = "block";
        document.querySelector(".loading-element").style.display = "none";
        success();
    }else if(abtm.style.display === "block"){
        abtm.style.display = "none"
        btnAbt.style.borderColor = "#020f24"
        btnAbt.textContent = "Tentang Saya";
        failed();
        document.querySelector(".loading-element").style.display = "none";
    }
    
},500)
})
}


async function getBio(){
     try{
       await showBio();
    } catch(err) {
        console.log(err)
    } 
}
btnAbt.addEventListener("click",()=>{
    getBio();
    document.querySelector(".loading-element").style.display = "block";
})


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });