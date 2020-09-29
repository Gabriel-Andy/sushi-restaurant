 
 let tabheader = document.querySelectorAll(".tabheader");
 console.log(tabheader)

for(let i = 0; i < tabheader.length; i++){
    tabheader[i].onclick = function() {
        let tabNumber = parseInt(this.dataset.tab);

    document.querySelector(".active-tab").classList.remove("active-tab");
    this.classList.add("active-tab");
     switch(tabNumber){
         case 1:
             changetabsection(tabNumber);
             break;

         case 2:
              changetabsection(tabNumber);
             break;
         case 3:
              changetabsection(tabNumber);
             break;
         case 4:
              changetabsection(tabNumber);
             break;
         default:
             break;
     }

    }
}
let changetabsection = (tabNumber) => {
    let currentTab = document.querySelector(".show-tab");
    currentTab.classList.remove("show-tab");
    currentTab.classList.add("hide-tab");
    let newSection = document.getElementById("tabSection-" +tabNumber);
    newSection.classList.remove("hide-tab");
    newSection.classList.add("show-tab");
 };
