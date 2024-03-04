function customRender(reactElement, container){
    /*
    const domElem = document.createElement(reactElement.type)
    domElem.innerHTML = reactElement.children
    domElem.setAttribute('href', reactElement.props.href)
    domElem.setAttribute('target', reactElement.props.target)
    container.appendChild(domElem)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])

    }
    container.appendChild(domElement)

}

const reactElement = {
    type : 'a',
    props :{
        href: 'https://google.com',
        target : '_blank'
    },
    children : ' Open google'
} 


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)