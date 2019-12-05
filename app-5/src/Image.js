import React, {Component} from 'react'

class Image extends Component{
    render(){
        return(
            <div>
                <img src={this.props.url} />
                <h2>NOOOOOO!</h2>
            </div>
        )
    }
}




export default Image;