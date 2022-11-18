
import React from "react";
import classes from "./secondComponent.module.css"

export default class SecondClassComponent extends React.Component{
    
    constructor(props){
        console.log("second component props =>", props);
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