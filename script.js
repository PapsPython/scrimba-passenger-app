let count = 0;
countEl= document.getElementById("count-el"); 

saveEnt= document.getElementById("display_entry");
sumAll = document.getElementById("summed_entry");




function increase(){
  count += 1
  countEl.innerText = count
}



function save() {
  count 
  let entry = count + " - "
  saveEnt.innerText += entry
  countEl.innerText= 0
  count = 0
 }





