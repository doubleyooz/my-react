var page ;

const Root = "/home/waifu-forever/Downloads/VsProjects/";
const Profile = "Pages/Profile/index.html";

function currentPage(i){
    page = i;

    /*var container = document.getElementsByClassName("container");
    
    container[0].remove();
    container[0].innerHTML(Projects);*/

    console.log(buildAd(Root + Profile));
    
   
}

function buildAd(file){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", file);
    xhr.responseType = "DOMString";
    xhr.send();
    
}
    
   
