import React from "react";
import http from "../lib/request";
import Character from "../components/Character";
import  "./detail.css"

class Home extends React.Component{
    state={
        characters:[]
    }
    componentDidMount = () =>{
        this.getData(URL)
    }
    getData = async(api_url) =>{
        /*try{
            const request = await fetch (`${api_url}`)
            const response = await request.json()
            console.log(response)
            const characterRequest = await fetch(`${response.data.character[1]}`)
            const characterData = await characterRequest.json()

            this.setState({chatacters: characterData})
            
        }catch(err){
            throw new Error(err);
        }*/

        const response = await http.instance.getCharacters(37999)
        this.setState({characters: response.data})
    }
    render(){
        return(
            <React.Fragment>
                 <body>
                     <div className="title">
                     <h1>Kaguya-sama Love is War Characters</h1>
                     <h2>Teammates: Derek Alvarado, Manuel Barraza and Jonathan Rico</h2>
                     <h3>Group: TIDBIS41M</h3>
                     </div>
                        <div className="character_boxes">
                        {this.state.characters.map((character) => 
                            {return  <Character character = {character}/>
                            })}
                        </div>
                 </body>
            </React.Fragment> 
        )
    }
}export default Home;