// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Sebastian Hatleset</h1>
                <p>Blockchain Developer</p>
                <a href="mailto:sebastian.hatleset@gmail.com" className="button">Get in touch</a>
        
            </div>
        </section>
    );
}

export default Header;