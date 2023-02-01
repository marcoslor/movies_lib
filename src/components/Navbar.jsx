import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { TiFilm } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const searchQ = new URLSearchParams(window.location.search).get('q') ?? '';

    const [searchTerm, setSearchTerm] = useState(searchQ);

    const navigate = useNavigate();

    const onSearch = (e) => { 
        e.preventDefault();
        navigate('/search?q=' + encodeURIComponent(searchTerm));
    }

    return (
        <nav className="navbar navbar-dark bg-dark bg-opacity-75">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand text-primary"><TiFilm />MoviesLib</Link>
                <form className="d-flex" onSubmit={onSearch}>
                    <input className="form-control me-2" type="search" placeholder="Search a title" aria-label="Search" value={searchTerm} onInput={(e) => setSearchTerm(e.target.value)}/>
                    <button className="btn btn-outline-primary d-flex align-items-center" type="submit"><FaSearch /></button>
                </form>
            </div>
        </nav>
    );
}