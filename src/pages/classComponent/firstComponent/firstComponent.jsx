
import React from "react";
import classes from "./firstComponent.module.css"


export default class FirstClassComponent extends React.Component{
    
    constructor(props){
        console.log("first component props =>",props);
        super(props);
    }
    
    

    render(){

        return(
            <>
                <ul className={classes.list}>
                    <li>Name: {this.props.user.name}</li>
                    <li>Age: {this.props.user.age}</li>
                </ul>
            </>
        )
    }
}