import React, {Component} from 'react'
import Co from './Co'
import simulate from '../body/data'

// function  Meme() {

//     console.log(simulate)
// const data  = simulate.map(item =>  <Co key={item.id} text = {item.text}/> )
//          return (
//             <div className='Meme'>
//                 {data}
//             </div>
//         )  
// }

class Meme extends Component{
    constructor(){
        super()
        this.state = {
            loggedInf : false,
            count : 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.handleClick3 = this.handleClick3.bind(this)
    }
    
    handleClick(){
        this.setState(prevState => {
            return{
                count : prevState.count + 1
            }
        })
    }

    handleClick2(){
        this.setState(prevState => {
            return{
                count : prevState.count - 1
            }
        })
    }

    handleClick3(){
        this.setState(prevState => {
            return{
                count : Math.floor(prevState.count / 2)
            }
        })
    }

    render(){
        let word 
    if(this.state.loggedInf === true){
        word = "In"
    }else{
        word = "Out"
    }    
        return(
            <div>
            <h1>You are currently logged {word}</h1>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>Augmenter</button>
            <button onClick={this.handleClick2}>diminuer</button>
            <button onClick={this.handleClick3}>diviser</button>
            </div>
        )
        
    }

}

export default Meme