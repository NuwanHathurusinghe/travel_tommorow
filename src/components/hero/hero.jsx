import './hero.css'
import Slideshow from '../Slideshow/Slideshow'
import SearchBar from '../SearchBar/SearchBar'

function Hero() {
  return (
    <div id="hero">
        <Slideshow />
        <SearchBar/>
    </div>
  )
}

export default Hero