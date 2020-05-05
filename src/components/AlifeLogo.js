import React, { Component }  from 'react';
import logo from '../logo.svg';
import withToggle from '../shared/withToggle'


class AlifeLogo extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const { toggle, toggleStatus, name } = this.props
        const style = {
            backgroundColor: 'black'
        }
        !toggleStatus? style.backgroundColor = 'white' : style.backgroundColor = 'black'
        console.log(toggleStatus)
        return(
            <div onMouseOver={(event) => toggle(event)}
                style={style}>
                <img src={logo} className="App-logo" alt="logo" />
                <div> Toggle Satus is {toggleStatus} </div>
                <div> My Name is {name} </div>
            </div>
        )
    }
}
export default withToggle(AlifeLogo)