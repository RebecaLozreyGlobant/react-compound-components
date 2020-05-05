import React, { Component }  from 'react';

const withToggle = ( WrappedComponent ) => {
    return class WithToggle extends Component{
        constructor(props){
            super(props)
            this.state = {
                toggleStatus: true
            }
        }
        
        toggle = (event) => {
            this.setState((prevState)=>{
                return {
                    toggleStatus: !prevState.toggleStatus
                }
            })
            console.log(event)
        }
        render(){
            return <WrappedComponent 
            toggleStatus={this.state.toggleStatus}
            toggle={this.toggle}
            name='Rebeca'
            {...this.props}
            />
        }
    }
}

export default withToggle