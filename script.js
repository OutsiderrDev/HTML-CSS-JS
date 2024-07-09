const searchBar = document.getElementById('searchBar');
const serachImg = document.getElementById('serachImg');
let isClicked = false;

function Expand(){
    if(isClicked == false)
        {
            searchBar.style.display = "inline";
            serachImg.src = "close.png";
            isClicked = true;
        }
    else{
        searchBar.style.display = "none";
        serachImg.src = "search.png";
        isClicked = false;
    }
}