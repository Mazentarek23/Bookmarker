var siteNameInput=document.getElementById("inputPassword5")
var siteUrlInput=document.getElementById("input5")
var validData =document.querySelector("#valid")
var modelError=document.querySelector("#modalerror")
var boxModal = document.querySelector("#modelValid")
var exampleModal  = document.querySelector("#exampleModal")
var close=document.getElementById("close")
var arrlist=[]
if(localStorage.getItem("arrlist")!=null){
    arrlist=JSON.parse(localStorage.getItem("arrlist"))
    showsite()
}


function addSite() {
    var site={
        name:siteNameInput.value,
        Url:siteUrlInput.value
    }
    if(siteNameInput.value===""||siteUrlInput.value===""){
        siteUrlInput.classList.add("is-invalid")
        siteNameInput.classList.add("is-invalid")
       boxModal.classList.remove("d-none")
       boxModal.classList.add("d-flex")
    }
    else{ 
        arrlist.push(site)
        showsite()
        localStorage.setItem("arrlist",JSON.stringify(arrlist))
        clearData()
        clearvalid()
    }
  
    
}

function showsite(){
    temp=""
    for (var i=0;i<arrlist.length;i++){
        temp +=`<tr>
        <td>`+(i+1)+`</td>
        <td>`+arrlist[i].name+`</td>
        <td> <a target="_blank" href="`+arrlist[i].Url+`"><button class="btn btn-visit"><i class="fa-solid fa-eye pe-2"> </i> visit </button></a></td>
        <td><button onclick="deletsite(`+i+`)" class="btn btn-delete"><i class="fa-solid fa-trash-can"> </i> Delete</button></td>
    </tr>`
    }
    document.getElementById("tableData").innerHTML=temp
}

function deletsite(x) {
    arrlist.splice(x,1)
    showsite()
    localStorage.setItem("arrlist",JSON.stringify(arrlist))
    
}

function clearData() {
    siteNameInput.value="",
    siteUrlInput.value=""
 }
function validationNameInput(){
    var regex =/^([A-Za-z]{3,})$/;
    if(regex.test(siteNameInput.value)==true){

     siteNameInput.classList.add("is-valid")
     siteNameInput.classList.remove("is-invalid")
    }
    else{
        siteNameInput.classList.add("is-invalid")
        siteNameInput.classList.remove("is-valid")
    }
}
function validationUrlInput(){
    var regex =/^(http:\/\/www\.|https:\/\/www\.){0,1}[A-Za-z0-9]{3,20}\.[A-Za-z]{2,6}(\/){0,1}/;
    if(regex.test(siteUrlInput.value)==true){

     siteUrlInput.classList.add("is-valid")
     siteUrlInput.classList.remove("is-invalid")
    }
    else{
        siteUrlInput.classList.add("is-invalid")
        siteUrlInput.classList.remove("is-valid")
    }
}

close.addEventListener("click",closeModel)

function closeModel(){
    boxModal.classList.replace("d-flex","d-none")
}

function clearvalid(){
    siteUrlInput.classList.remove("is-invalid")
    siteUrlInput.classList.remove("is-valid")
    siteNameInput.classList.remove("is-invalid")
    siteNameInput.classList.remove("is-valid")
}

