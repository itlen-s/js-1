// var divs = document.querySelectorAll('div')
// var link = document.querySelector('a')

// for (var i=0; i <divs.length; i++) {
//     divs[i].addEventListener('click', function(event){
//         event.stopPropagation()
//         console.log(this.getAttribute('id'))
//     })
// }
// link.addEventListener('click' , handleLinkClick)
// function handleLinkClick (event) {
//     event.preventDefault()

//     var div = divs[0]
//     // if (div.style.display === 'none') {
//     //     div.style.display = 'flex'
//     // } else { 
//     //     div.style.display = 'none'
//     // }
//     div.style.display = div.style.display === 'none' ? 'flex' : 'none'
//     console.log(div.style.display)
// }

////////////

// var p = document.querySelectorAll('p')
// for (var i=0; i<p.length;i++){
//     p[i].addEventListener('click', function(event){
//         event.target.style.color = 'blue'
//     })
// }

document.getElementById('wrapper').addEventListener('click', function(event) {
    var tagName = event.target.tagName.toLowerCase()
    if (tagName === 'p') {
        event.target.style.color = 'blue'
    }
    if (event.target.classList.contains('color')) {
        event.target.style.color = 'red'
    }
})

