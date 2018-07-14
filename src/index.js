import _ from 'lodash'

function component() {
    var element = document.createElement('div')

    // lodash is imported
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')

    return element
}

document.body.appendChild(component())
