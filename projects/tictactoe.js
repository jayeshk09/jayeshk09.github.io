let boxes = document.querySelectorAll(".box")
let reset = document.querySelector(".reset")
let newgamebtn = document.querySelector(".newgame")
let msgcontainer = document.querySelector(".winr")
let msg = document.querySelector("#wintex")
let turnx = true;

let winpat = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
    [3,4,5],
 ];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
         console.log("click detected");
         box.innerText = turnx ? "X" : "O";
         turnx = !turnx;
         box.disabled = true;

         checkwinner();
         
    });
});

disablebox = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}
enablebox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        winr.classList.add("hide");
    }
}

const showwinner = (winner) => {
    msg.innerText = `congratulations, winner is  ${winner}`
    winr.classList.remove("hide");
    disablebox()
}
const checkwinner = () => {
     for( pattern of winpat) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
         
        if(pos1!="" && pos3!="" && pos2!="" && pos1 ==pos2 && pos2 ==pos3)
        {
             
            
            console.log("winner",pos1)    
            showwinner(pos1)
            
        }

         
     }
    
}

const resetgame = () => {
    turnx = true;
    enablebox();
}

newgamebtn.addEventListener("click",resetgame)
reset.addEventListener("click",resetgame)

 