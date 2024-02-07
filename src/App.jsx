import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Main from './components/layout/Main'
import "swiper/scss"
import Banner from './components/banner/Banner'
// import HomePage from './pages/HomePage'
// import MoviePage from './pages/MoviePage'
// import MovieDetail from './pages/MovieDetail'
import { lazy, Suspense } from 'react'

const HomePage = lazy(() => import('./pages/HomePage'))
const MoviePageV2 = lazy(() => import('./pages/MoviePageV2'))
const MovieDetail = lazy(() => import('./pages/MovieDetail'))

function App() {

  return (
    <>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path='/' element={<Main></Main>}>
            <Route path='/' element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }>
            </Route>
            <Route path='/movies' element={<MoviePageV2></MoviePageV2>}></Route>
            <Route path='/movie/:movieId' element={<MovieDetail></MovieDetail>}></Route>
          </Route>
        </Routes>
      </Suspense>

    </>
  )
}

export default App
