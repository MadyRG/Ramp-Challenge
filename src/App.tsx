import { useEffect, useState } from "react";
import "./styles.css";
import CharacterList from "./CharacterList";
/**
 * "aHR0cHM6Ly90bnM0bHBnbXppaXlwbnh4emVsNXNzNW55dTBuZnRvbC5sYW1iZGEtdXJsLnVzLWVhc3QtMS5vbi5hd3MvcmFtcC1jaGFsbGVuZ2UtaW5zdHJ1Y3Rpb25zLw=="
 * Decoded the above string using built in javascript function atob(), which gives below url />
 * "https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/ramp-challenge-instructions/"
 *
 * To capture the flag, below function is performed in  inspector console
 *  const listI = document.querySelectorAll('code > div > span > i');
    let url = "";
    for ( const oneI of listI){
        const value = oneI.getAttribute("value");
        url = url+value;
    }
    console.log(url);
 * 
 * This gives the link "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/647572"
 */
function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Making HTTPS request using fetch API
    fetch(
      "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/647572"
    )
      .then((response) => response.text())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []); // empty dependency array to make sure the call happens once on loading

  if (loading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div className="App">
      {/** Pass fetched data to child component */}
      <CharacterList text={data} />
    </div>
  );
}

export default App;
