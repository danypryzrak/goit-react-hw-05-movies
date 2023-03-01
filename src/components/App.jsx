import { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router"
// import { Layout } from "./Layout/Layout";
// import { Cast } from "./Cast/Cast";
// import { Home } from "./Pages/Home";
// import { MovieDetails } from "./Pages/MovieDetails";
// import { Movies } from "./Pages/Movies";
// import { Reviews } from "./Reviews/Reviews";

const Movies = lazy(() => import('./Pages/Movies'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('./Pages/Home'));



export const App = () => {

  return (<Suspense fallback={<div>...Loading</div>}>
  <Routes>
    <Route path='/' element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path='movies' element={<Movies/>}/>
        <Route path='movies/:id' element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
    </Route>
  </Routes>
  </Suspense>
  );
};


