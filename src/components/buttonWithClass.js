import { Component } from "react/cjs/react.production.min";

class ButtonWithClass extends Component {
    constructor () {
        super();
        this.state = {
            caption: "Hello"
        }
    }
    render (){
        return(
            <div>
                <p>{this.state.text}</p>
                <button onClick= { () => this.setState({ caption : "by"} ) }>Click Me</button>
            </div>
        )
    }
}


export default ButtonWithClass;