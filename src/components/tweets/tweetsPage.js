import classNames from "classnames";
import { useEffect, useState } from "react";
import Button from "../common/button/Button";
import { getLatestTweets } from "./service";
import styles from "./TweetsPage.module.css";

const TweetsPage = () => {
  //1.- creo use state para recoger los tweets en un array y los inicializo a array vacío
  const [tweets, setTweets] = useState([]);
  //2.- llamo a la api para coger los tweets como es una promesa lo meto con un then  y cuando tenga la respuesta con los tweets ejecuto setTweets para insertarlos en el array y que se puedan pintar y como sólo quiero q se ejecute una vez la llama da uso useEfect. La fx getLatestTweets viene de la api client.js.

  useEffect(() => {
    //3.- recojo los twwets de la promesa y los meto con setTweets en el array para pintarlos  ==> ¡¡¡¡ver client.js!!!!
    getLatestTweets().then((tweets) => setTweets(tweets));
  }, []);

  const handleClick = () => console.log('click');
  // si quiere hacerse en forma de async await no se puede directamente en el useEffect, tiene que ser dentro
  // useEffect(() => {
  //     const execute = async () => {
  //       const tweets = await getLatestTweets();
  //       setTweets(tweets);
  //     };
  //     execute();
  // }, []);
  //¡¡¡¡ echar un vistazo a className framework
  //va entre corchetes por que pasas el parámetro como variable que no sabes el valor que va a llegar
  /*
  const a = 'hola'
  const b = {[a]: 5 } ===> const b = {'hola' : 5 }
 */

  const className = classNames(styles.tweetsPage, {
    [styles.empty]: tweets.length,
  });
  const style = { color: "red", backgroundColor: "green" };


  return (
    <div className={className} style={style}>
      <ul>
        {tweets.length ? (
          tweets.map((ele) => <li key={ele.id}>{ele.content}</li>)
        ) : (
          <Button>añade tweet</Button>
        )}
      </ul>
      <Button disabled={ false } variants="20px" variant= "primary" onClick={handleClick}>esto es mu muajo to</Button>
    </div>
  );
};
export default TweetsPage;
