// document object is the one from the results.html (the page that called the src)
// (so if you're  going to test out document or window values in the browser console, do it on the results.html page)
const placeForResults = document.getElementById("results")

// window.location.search: 
// The location object is a property of the window object and contains info about the current URL.
// The search property of the location object returns (or sets) the query string part of a URL.

console.log(window.location.search)

// URLSearchParams constructor returns an instance of the URLSearchParams object
// The returned instance has a forEach() method, which iterates thru all the values in the object instance
// parameter (e.g. window.location.search) can be a literal key-value string pair

console.log(new URLSearchParams(window.location.search))



new URLSearchParams(window.location.search).forEach((value, name) => {
  console.log(name, value)

  // if you wanted to see the contents of the div element before, use this line. 
  // console.log(placeForResults.innerHTML)

  // div element gets stuff added on => you'll see the stuff rendered by the browser
  placeForResults.append(`${name} : ${value}`)
  placeForResults.append(document.createElement("br"))

  // if you wanted to see the contents of the div element after, use this line. 
  // console.log(placeForResults.innerHTML)
})



// For more, see https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
