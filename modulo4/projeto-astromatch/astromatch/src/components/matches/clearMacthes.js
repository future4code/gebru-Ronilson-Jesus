import axios from "axios"

const headers = 'Content-Type: application/json'

export default function ClerMacthes() {


const limparMatches = () => {
    axios
        .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ronilson-souza-gebru/clear", headers)
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err);
        });
      }

      return (
        <div>
          <button onClick = { limparMatches }> <b> Limpar Matches </b></button>
        </div>
        )
      }