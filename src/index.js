function getComponent() {

    return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        var element = document.createElement('div')
        var _ = _.default
        element.innerHTML = _.join(['Hello', 'webpack'], ' ')
        return element
    }).catch(error => 'An error occured while loading the component.')

    return element
}

getComponent().then(component => {
    document.body.appendChild(component)
})
