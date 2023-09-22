import { Link } from 'react-router-dom';
import './land-page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import Footer from '../../footer/footer';
import Tab from './Tab';








function Landing () {

    return(
        <div>
        <div className="wrapper">
        <section>
        <div className="h-20 flex justify-between items-center px-10 navWrapper md:w-4/5 md:mx-auto">
          {/* logo section */}
          <div>
          <img 
            className="w-32 h-32 md:w-52 align-items-center"
            src="./assets/images/logo.png" alt='logo-image'/>
          </div>

          {/* large screen */}
          <div></div>

          {/* small screen */}
          <div className="flex space-x-4">
            <div>
            <select className="h-11 bg-transparent text-white">
                    <option>English</option>
                    <option>French</option>
                </select>
            </div>
                <Link to="/login">
            <div>
            <button className="px-4 py-3 bgRed capitalize text-sm text-white font-semibold">
                sign in
              </button>
            </div>
                </Link>
          </div>

        </div>
      </section>
       
       <div className="h-screen -mt-20 text-white px-10 space-y-5 centered flex-col md:w-2/3 md:mx-auto">
          <h1 className="text-4xl font-bold md:text-6xl">
          See what's next
          </h1>
          <p className="text-xl md:text-3xl">
            Watch anywhere. Cancel at anytime
          </p>
          <a href="#" class="btn btn-xl"
          > 
        </a>

          <div className="centered flex flex-col space-y-5 md:space-y-0 md:flex-row  ">
          <button
              type="button"
              className="px-5 py-3.5 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-medium text-sm text-center inline-flex items-center md:px-10 md:py-5 md:text-3xl"
            >
             Watch Free For 30 Days 
              <FontAwesomeIcon icon={faChevronRight} />
            
            </button>
          </div>
        </div> 
        </div>


     <Tab/>
    
   
    <Footer />
        </div>
        
  );
};

export default Landing