const userSearch = document.getElementById('site-search')
const sButton = document.getElementById('s-b')

sButton.addEventListener('click', function () {
    const searched = userSearch.value;

    if (searched !== "") {
        const jusSearched = ("https://www.google.com/search?q=" + searched)
        window.open(jusSearched) 
     // alert("You searched for: " + searched);
    } else {
        alert ("Please Type Somthing In The Search Bar")
    }
})

