import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Main from './components/layout/Main'
import "swiper/scss"
import Banner from './components/banner/Banner'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import MovieDetail from './pages/MovieDetail'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main></Main>}>
          <Route path='/' element={
            <>
              <Banner></Banner>
              <HomePage></HomePage>
            </>
          }>
          </Route>
          <Route path='/movies' element={<MoviePage></MoviePage>}></Route>
          <Route path='/movie/:movieId' element={<MovieDetail></MovieDetail>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
