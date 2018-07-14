import _ from 'lodash'
import printMe from './print.js'
import './styles.css'

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

let element = component() // store the element to re-render on print.js changes
document.body.appendChild(element)

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepted the updated printMe module!')
        document.body.removeChild(element)
        element = component() // re-render the "component" to update the click handler
        document.body.appendChild(element)
    })
}
