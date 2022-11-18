import React from "react";


export default class ClassComponent extends React.Component{
    
    constructor(props){

        super(props);
    }
    
    

    render(){
        return(
            <>
                {this.props.name.map((elem, index) => {
                    return <h1 key = {index}>Hello {elem}, classes are love you</h1>
                })}
                
            </>
        )
    }
}