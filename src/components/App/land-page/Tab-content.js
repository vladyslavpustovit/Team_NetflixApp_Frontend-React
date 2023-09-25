import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function TabContent(props) {
  /* const [toggleState, setToggleState] = useState(1);
   function toggleTab(id){
    setToggleState(id);
   }
  */
  const stdata = props.data;
  return (
    <section className="tab-content display-block py-12 bg-black text-white">
      <div className="container max-w-70 mx-auto overflow-hidden px-8">
  
      {stdata === 1 &&
           <div className="tab-1-content-inner grid grid-cols-2 gap-8 items-center justify-center">
            <div>
              <p className="text-lg mb-4 grid grid-cols-2 gap-8 items-center justify-center">
                If you decide Netflix isn't for you - no problem. No commitment.
                Cancel online anytime. this is props {stdata}
              </p>
              <a
                href="#"
                className="btn btn-lg text-xl py-5 px-8 uppercase bg-red-700"
              >
                Watch Free For 30 Days
              </a>
            </div>
            <img src="/assets/images/cancel1.png" alt="" />
          </div>
        
       }

      { stdata === 2 && <div
          id="tab-2-content hidden opacity-0"
        >
        <div className="tab-2-content-top grid grid-cols-2fr-1fr gap-4 justify-center items-center">
          <p className="text-lg mb-4">
            Watch TV shows and movies anytime, anywhere — personalized for
            you. this is props {stdata}
          </p>
          <a
          href="#"
          className="btn  btn-lg text-xl py-5 px-8 uppercase bg-red-700"
        >
          Watch Free For 30 Days
        </a>
      </div>
      <div className="tab-2-content-bottom mt-8 grid grid-cols-3 gap-8 text-center">
        <div>
          <img src="/assets/images/content1.png" alt="" />
          <p className="text-md mb-6 text-lg">Watch on your TV</p>
          <p className="text-dark  text-gray-600">
            Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div>
          <img src="/assets/images/content2.png" alt="" />
          <p className="text-md mb-6 text-lg">
            Watch instantly or download for later
          </p>
          <p className="text-dark  text-gray-600">
            Available on phone and tablet, wherever you go.
          </p>
        </div>
        <div>
          <img src="/assets/images/content3.png" alt="" />
          <p className="text-md mb-6 text-lg">Use any computer</p>
          <p className="text-dark text-gray-600 ">
            Watch right on Netflix.com.
          </p>
        </div>
      </div>
      </div> 
      }
       
       {stdata === 3 && <div
          id="tab-3-content hidden opacity-0"
        >
          <div className="text-center text-2xl mb-4 ">
            <p className="text-lg mb-4">
              Choose one plan and watch everything on Netflix. this is props
              {stdata}
            </p>
            <a
              href="#"
              className="btn btn-lg text-xl py-5 px-8 uppercase bg-red-700"
            >
              Watch Free For 30 Days
            </a>
          </div>
          <table className="w-full mt-8 border-collapse border-spacing-0 ">
            <thead className="uppercase py-2 px-3 text-center ">
              <tr>
                <th></th>
                <th className=" pb-2">Basic</th>
                <th className=" pb-2">Standard</th>
                <th className=" pb-2">Premium</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 py-2 px-3 text-center ">
              <tr className="odd:bg-gray-900">
                <td className="text-gray-600 py-2 px-3 text-left">
                  Monthly price after free month ends on 11/11/23
                </td>
                <td>$8.99</td>
                <td>$12.99</td>
                <td>$15.99</td>
              </tr>
              <tr className="">
                <td className="text-gray-600 py-2 px-3 text-left">
                  HD Available
                </td>
                <td>
                  <FontAwesomeIcon icon={faXmark} className="" />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr className="odd:bg-gray-900">
                <td className="text-gray-600 py-2 px-3 text-left">
                  Ultra HD Available
                </td>
                <td>
                  <FontAwesomeIcon icon={faXmark} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faXmark} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td className="text-gray-600 py-2 px-3 text-left">
                  Screens you can watch on at the same time
                </td>
                <td>1</td>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr className="odd:bg-gray-900">
                <td className="text-gray-600 py-2 px-3 text-left">
                  Watch on your laptop, TV, phone and tablet
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td className="text-gray-600 py-2 px-3 text-left">
                  Unlimited movies and TV shows
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />{" "}
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />{" "}
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />{" "}
                </td>
              </tr>
              <tr className="odd:bg-gray-900">
                <td className="text-gray-600 py-2 px-3 text-left">
                  Cancel anytime
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />{" "}
                </td>
              </tr>
              <tr>
                <td className="text-gray-600 py-2 px-3 text-left align-item-center">
                  First month free
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
       }
      </div>
    </section>
  );
}

export default TabContent;
