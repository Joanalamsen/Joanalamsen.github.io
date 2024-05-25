const btnlike1=document.getElementById("btnlike1")
const btnlike2=document.getElementById("btnlike2")
const countlikes1=document.getElementById("countlikes1")
const countlikes2=document.getElementById("countlikes2")

function hitlike1() {
 let totallike1 = parsent(count1.value) + 1
 countlike1.textContent = totallike1.toString()
}
btnlike1.addEventListener("click",hitlikes1)
                          
