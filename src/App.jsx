import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Film from "./Film";
import Home from "./Home";
import Search from "./Search";

export default function App() {
    return (
        <>
            <Navbar />
            <Container className="py-5">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/film/:id" element={<Film />} />
                </Routes>
            </Container>
        </>
    )
}