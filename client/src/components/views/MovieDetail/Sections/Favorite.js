import Axios from 'axios'
import React, {useEffect, useState} from 'react'

function Favorite(props) {

    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.movieTitle
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)

    useEffect(() => {

        let variables = {
            userFrom: userFrom,
            movieId: movieId
        }

        Axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                if(response.data.success) {
                    console.log(response.data);     
                    setFavoriteNumber(response.data.favoriteNumber)               
                } else {
                    alert('get err : favoriteNumber');
                }
            })

        Axios.post('/api/favorite/favorited', variables)
            .then(response => {
                if(response.data.success) {
                    console.log(response.data);
                    setFavorited(response.data.favorited)
                } else {
                    alert('get err : favorited');
                }
            })


    }, [])

    return (
        <div>
            <button>{Favorited ? " Not Favorite" : " Add to Favorite "} {FavoriteNumber}</button>
        </div>
    )
}

export default Favorite
