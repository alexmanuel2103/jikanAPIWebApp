const URL = "https://api.jikan.moe/v4/"

class http{
    static instance = new http()

    getCharacters = async(id) => {
        try{
            const request = await fetch (`${URL}anime/${id}/characters`)
            const response = await request.json()
            return response
        }catch(err){
            throw new Error(err);
        }
     
    }

    getCharacter = async(id) => {
        try{
            const request = await fetch (`${URL}characters/${id}`)
            const response = await request.json()
            return response
        }catch(err){
            throw new Error(err);
        }
    }
    getImage = async(id) => {
        try{
            const request = await fetch (`${URL}characters/${id}/pictures`)
            const response = await request.json()
            return response
        }catch(err){
            throw new Error(err);
        }
    }
}export default http;

/*{id}/manga*/