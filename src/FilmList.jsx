import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { useQuery } from "react-query";

const FilmsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    padding: 1rem;
    
    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const FilmCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: var(--bs-gray-1000);
`

export default function FilmList({ films, title }) {
    return (
        <>
            <h1 className="text-center mb-4">{title}</h1>
            <FilmsGrid>
                {films.map(film => (
                    <FilmCard key={film.id}>
                        <img src={"https://image.tmdb.org/t/p/w500/" + film.poster_path} loading="lazy" className="card-img-top mb-3" alt="..." />
                        <div className="fs-3">{film.original_title}</div>
                        <div className="mb-4"> <FaStar /> {film.vote_average}</div>
                        <Link className="btn btn-primary w-100 mt-auto" to={'/film/' + film.id}>Details</Link>
                    </FilmCard>
                ))}
            </FilmsGrid>
        </>
    )
    
}