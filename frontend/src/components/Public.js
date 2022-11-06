import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Our international school assistance for studens</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Vilnius city</p>
                <address className="public__addr">
                    School Assistance<br />
                    Vilnius, Lithuania<br />
                    <a href="/">(+370) 658-8456</a>
                </address>
                <br />
                <p>Owner: John Wick</p>
            </main>
            <footer>
                <Link to="/login">Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public