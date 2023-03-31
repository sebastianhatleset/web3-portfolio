// Import Assets
import profile from '../assets/profile.png';

let past = new Date('2023-03-30');

 function heleShitten(){

    let now = new Date();
  
    let ms = (now - past);

    function dhm (ms) {
        const days = Math.floor(ms / (24*60*60*1000));
        const daysms = ms % (24*60*60*1000);
        const hours = Math.floor(daysms / (60*60*1000));
        const hoursms = ms % (60*60*1000);
        const minutes = Math.floor(hoursms / (60*1000));
        const minutesms = ms % (60*1000);
        const sec = Math.floor(minutesms / 1000);
        return "I have been a developer for " + days + " days, " + hours + " hours, " + minutes + " minutes and " + sec + " seconds";
  }
  console.log(dhm(ms))
  document.getElementById("timer").innerHTML = dhm(ms);
 }
  setInterval(heleShitten,100);







const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Sebastian Hatleset" />

            <div className='header__content'>
                <h1>Hi, I'm Sebastian Hatleset</h1>
                <p id="timer"></p>
                <a href="mailto:sebastian.hatleset@gmail.com" className="button">Get in touch</a>
            </div>  
        </section>
    );
}

export default Header;