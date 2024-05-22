import Navbar from "./components/navbar/navbar";
import {Route, Routes,} from "react-router-dom";
import Home from "./pages/home/home";
import Explore from "./pages/explore/explore";
import Footer from "./components/footer/footer";
import Cocktail from "./pages/cocktail/cocktail";
import Search from "./pages/search/search";
import DrinksByType from "./pages/drinks-by-type/drinks-by-type";
import Category from "./pages/category/category";
import SignupLoginModal from "./components/signup-login-modal/signup-login-modal";
import Favorites from "./pages/favorites/favorites";

export default function App() {


    return (
        <>
            <Navbar/>
            <div className="max-w-screen-2xl overflow-hidden flex-1 px-6 md:px-16 w-full mx-auto">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/explore" element={<Explore/>}/>
                    <Route path="/search" element={<Search/>}/>
                    <Route path="/signup" element={<></>}/>
                    <Route path="/cocktail/:cocktailName" element={<Cocktail/>}/>
                    <Route path="alcoholic-drinks" element={<DrinksByType/>}/>
                    <Route path="non-alcoholic-drinks" element={<DrinksByType/>}/>
                    <Route path="category/:category" element={<Category/>}/>
                    <Route path="my-favorites" element={<Favorites/>}/>
                    <Route path="*" element={<></>}/>
                </Routes>
            </div>
            <SignupLoginModal />
            <Footer/>
        </>
    )
}