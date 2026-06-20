import { Link } from 'react-router-dom'
import PenguinError from '../assets/gif/Glitch Ok Sticker by Pudgy Penguins.gif'
import '../styles/pages/error.scss'
function Error () {

    return (
        <main>
            <div className='flexError'>
                <h1 className='errorTitle'>Error 404</h1>
                <p className='errorText'>this page doesn't exist</p>
                <img src={PenguinError} alt="Penguin crying over error page" className='penguinGif'/>
                <Link to='/'>Back to home page →</Link>
            </div>
        </main>
    )
}

export default Error;