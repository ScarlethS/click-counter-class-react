import React from "react";
import '../stylessheets/Count.css';


class Count extends React.Component{
    render(){
        return(
            <div className="count">
                {this.props.numclicks}
            </div>
        )
    }
}


export default Count;