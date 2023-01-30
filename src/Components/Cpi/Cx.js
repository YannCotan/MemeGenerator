import React ,{Component} from 'react'
import D from './D'

class Cx extends Component {
    constructor(){
        super()
        this.state = {
            Loaing: true
        }
    }

    componentDidMount(){
        setTimeout(() =>{
            this.setState({
                Loaing: false
            })
        } , 1500)
    }
  
  render()
  {
    return (
        <div>
            <D Loaing={this.state.Loaing} />
        </div>
            )  
  }  
}

export default Cx