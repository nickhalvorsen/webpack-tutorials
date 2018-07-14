import _ from 'lodash'
import printMe from './print.js'
import './style.css'

if (process.env.NODE_ENV !== 'production') {
    console.log('looks like we are in development mode!')
}


function component() {
    var element = document.createElement('div')
    var btn = document.createElement('button')

    // lodash is imported
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')

    btn.innerHTML = 'Click me and check the console!'
    btn.onclick = printMe

    element.appendChild(btn)

    return element
}

document.body.appendChild(component())
