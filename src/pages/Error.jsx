import { Link } from 'react-router-dom'
import PenguinError from '../assets/gif/Glitch Ok Sticker by Pudgy Penguins.gif'
function Error () {

    return (
        <main>
            <h1>Error 404</h1>
            <p>this page doesn't exist</p>
            <img src={PenguinError} alt="Penguin crying over error page" />
            <Link to='/'>Back to home page</Link>

        </main>
    )
}

export default Error;