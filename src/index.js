function component() {
    var element = document.createElement('div')

    element.innerHTML = join(['Hello', 'webpack'], ' ')

    this.alert("this is legacy code that is assuming 'this' is the window object, which isnt a good idea")

    return element
}

document.body.appendChild(component())

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        console.log('we retrieved the data. this should work in a variety of browsers')
        console.log(json)
    })
    .catch(error => console.error('something went wrong when fetching this data: ', error))
