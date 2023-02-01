import { FaStar } from "react-icons/fa"
import { BsWallet2 } from "react-icons/bs"
import { BiMoney } from "react-icons/bi"
import { CgSandClock } from "react-icons/cg"
import { RiNewspaperLine } from "react-icons/ri"

import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import styled from "styled-components"

const FilmPage = styled.div`
    padding-top: 6rem;

    svg {
        color: var(--bs-primary);
    }

    .backdrop {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 30rem;
        z-index: -1;

        ::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.45 ) 40%);
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .poster-wrapper{
        background-color: var(--bs-gray-1000);
        width: 30%;
        margin: 0 auto;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .info {
        h2 {
            font-size: 1.4rem;
        }
    }
`

export default function Film() {
    const id = useParams().id

    const filmQuery = useQuery('film:'+id, () => fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + import.meta.env.VITE_API_KEY).then(res => res.json()))

    console.log(filmQuery)

    if (filmQuery.isLoading) return <div>Loading...</div>
    
    const film = filmQuery.data;

    return (
        <FilmPage>
            <div className="backdrop">
                <img src={'https://image.tmdb.org/t/p/original' + film.backdrop_path} alt="" />
            </div>
            <div className="p-2 poster-wrapper mb-4">
                <img src={'https://image.tmdb.org/t/p/w500' + film.poster_path} />   
            </div>
            <div className="text-center">
                <h1>{film.original_title}</h1>
                <p>{film.tagline}</p>
                <p><FaStar/> { Number(film.vote_average).toFixed(1) }</p>
            </div>
            <div className="info">
                <h2><BsWallet2 /> Budget</h2>
                <p>${Number(film.budget).toLocaleString('en-US')}</p>
                <h2><BiMoney /> Revenue</h2>
                <p>${Number(film.revenue).toLocaleString('en-US')}</p>
                <h2><CgSandClock /> Runtime</h2>
                <p>{film.runtime} minutes</p>
                <h2><RiNewspaperLine /> Overview</h2>
                <p>{film.overview}</p>
            </div>
        </FilmPage>
    )
}