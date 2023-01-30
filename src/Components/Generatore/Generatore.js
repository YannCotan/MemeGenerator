import React , {Component} from 'react'
import "./Generatore.css"
//import simulate from './data'

class Generatore extends Component {
    //Ici on initialise nos diférrents états
        constructor(){
            super()
            this.state = {
                Toptext : "",
                Bottomtext : "",
                imgs : "https://i.imgflip.com/1bij.jpg",
                allimg: [],
                Loading: false
            } 
        //Ici on bind nos différentes méthodes qu'on a créer plus bas
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
    }

    //componentDidMount() nous permet de changer d'état dès que le premier composant
    //de notre page est monté.
        componentDidMount(){
               fetch("https://api.imgflip.com/get_memes")
                    .then(Response => Response.json())
                    .then(Response => {
                        const {memes} = Response.data
                        this.setState({
                            allimg : memes,
                            Loading : true
                        })
                    }) 
        }
    //Nous créons notre méthode handleSubmit ici.
    //En lui passant le paramètre event.
        handleSubmit(event){
                event.preventDefault()
                
                //On créer une variable ici qui va stocker un nombre aléatoire inférieur 
                //ou égale à la longeur de notre tableau d'images allimh
                    const rand = Math.floor(Math.random() * this.state.allimg.length)

                //On selectionne ici une image aleatoire dans notre tableau d'images
                    const randimg = this.state.allimg[rand]

                //Et on fais une mise à jour de l' etat imgs en lui ajoutant l'image aleatoire
                        this.setState({
                        imgs : randimg,
                        Loading : false
                    })
                
                
            }

    handleChange(event){
        const{name , value} = event.target
        this.setState({[name] : value})
    }
   
  render(){
      return (
          <div>
                <form className="forme" onSubmit={this.handleSubmit} >
                    <input value={this.state.Toptext} type="text" name="Toptext" placeholder="Entrez le premier text" onChange={this.handleChange}/>
                    <input value={this.state.Bottomtext} type="text" name="Bottomtext" placeholder="Entrez le second text" onChange={this.handleChange}/>
                    <button > Générer </button>
                    
                </form>
                {this.state.Loading ? <h5>Chargement</h5> : <h5>Votre meme est là :)</h5>}
                <div className='meme__field'>
                        <div className="top__text">
                            <h2>{this.state.Toptext}</h2>
                        </div>
                            <img src={(this.state.imgs.url)} alt="" />
                        <div className="bottom__text">
                            <h2>{this.state.Bottomtext}</h2>
                        </div>
                        
                    </div>
            </div>
            )
  }
    
}

export default Generatore