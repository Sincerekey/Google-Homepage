const userImgSearch = document.getElementById('site-search-img')
const sIButton = document.getElementById('s-b-i')

sIButton.addEventListener('click', function () {
    const imgSearched = userImgSearch.value;

    if (imgSearched !== "") {
        const imgJusSearched = ("https://www.google.com/search?q=" + imgSearched + "&tbm=isch")
        window.open(imgJusSearched) 
     // alert("You searched for: " + searched);
    } else {
        alert ("Please Type Somthing In The Image Search Bar")
    }
})