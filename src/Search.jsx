import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import FilmList from "./FilmList";

export default function Search() {
    const searchTerm = new URLSearchParams(useLocation().search).get('q');
    const filmsQuery = useQuery('search:' + searchTerm, () => fetch('https://api.themoviedb.org/3/search/movie?api_key=' + import.meta.env.VITE_API_KEY + '&query=' + searchTerm).then(res => res.json()))

    if (filmsQuery.isLoading) return <div>Loading...</div>

    const films = filmsQuery.data.results;
    return (
        <FilmList films={films} title={"Search"} />
    )
}