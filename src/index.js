import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import Data from './data.xml'

function component() {
    var element = document.createElement('div')

    // lodash is imported
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')

    // add the image to our existing div
    var myIcon = new Image()
    myIcon.src = Icon;
    element.appendChild(myIcon)

    console.log(Data)

    return element
}

document.body.appendChild(component())
