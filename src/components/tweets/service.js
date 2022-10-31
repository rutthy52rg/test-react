import client from "../../api/client";
const urlTweets = "/api/tweets" // añadimos esta variable pq se va a repetir en todos los endpoints

export const getLatestTweets =()=>{
    const url = urlTweets
    return client.get(url);
}