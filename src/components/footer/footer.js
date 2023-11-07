import { Link } from 'react-router-dom';
import './footer.css'



function Footer() {
 
  return (
    <>
      <footer className='grid grid-cols-1'>
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <img src="/assets/images/logo.png" className="logo h-8 mr-3" alt="Logo" />
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link
                to='/about'
                className="mr-4 hover:underline md:mr-6 "
                >
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://github.com/vladyslavpustovit/Team_NetflixApp_Frontend-React" className="hover:underline">
              Repo™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>

    </>
  );
}

export default Footer;
