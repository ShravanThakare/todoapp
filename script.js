const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");


function AddTask(){



    if(inputBox.value === ``){
        // console.log("hii");
        alert('You have to write something!');
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    savedata();
}

listContainer.addEventListener("click",(e)=>{

if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    savedata();
}
else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    savedata();
}


});


function savedata(){

    localStorage.setItem("value",listContainer.innerHTML);
}


function show(){
   let a= localStorage.getItem("value");
   listContainer.innerHTML=a;
}

show();