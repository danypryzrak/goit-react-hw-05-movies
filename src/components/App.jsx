import { Route, Routes } from "react-router"
import { Layout } from "./Layout/Layout";
import { Cast } from "./Pages/Cast";
import { HomePage } from "./Pages/HomePage";
import { MovieDetails } from "./Pages/MovieDetails";
import { MoviesPage } from "./Pages/MoviesPage";
import { Reviews } from "./Pages/Reviews";


export const App = () => {



  return (<>
  <Routes>
    <Route path='/' element={<Layout/>} >
        <Route index element={<HomePage/>}/>
        <Route path='movies' element={<MoviesPage />}/>
        <Route path='movies/:id' element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
    </Route>
  </Routes>
  </>
  );
};

// '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.
