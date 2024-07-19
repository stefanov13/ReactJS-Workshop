import { useEffect, useState } from "react";

import * as request from "../../api/requester";
import * as gamesAPI from '../../api/games-api'

import GameListItem from "./game-list-item/GameListItem";

export default function GameList() {
    // useEffect(() => {
    //     (async () => {
    //         const GamesResult = await request.requester('GET', 'http://localhost:3030/jsonstor/games')
    //         const gamesResult = await request.get('http://localhost:3030/jsonstor/games')
    //     })()
    // }, [])
    const [games, setGames] = useState([]);

    useEffect(() => {
        gamesAPI.getAll()
            .then(result => setGames(result));
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.length > 0
                ? games.map(game => <GameListItem key={game._id} {...game} />)
                : <h3 className="no-articles">No games yet</h3>
            }

        </section>
    );
}