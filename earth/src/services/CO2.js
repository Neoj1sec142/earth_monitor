import axios from 'axios'

const GetCurrentCO2 = async () => {
    try{
        await axios.get("https://api.hge.earth/api/co2/2021")
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }catch(e){
        console.log(e, "Error")
    }
}
export default GetCurrentCO2