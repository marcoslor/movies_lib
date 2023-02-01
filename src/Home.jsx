import { useQuery } from "react-query";
import FilmList from "./FilmList";

export default function Home() {

    const filmsQuery = useQuery('films', 
        () => fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=' + import.meta.env.VITE_API_KEY).then(res => res.json())
    )

    if (filmsQuery.isLoading) return <div>Loading...</div>

    return (
        <FilmList title={"Best Movies"} films={ filmsQuery.data.results } />
    )
}