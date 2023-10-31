import { Link } from "react-router-dom";
function TabContent({ activeTabName }) {
  if (activeTabName == "CANCEL_AT_ANY_TIME") {
    return (
      <section className="tab-content">
        <div className="container">
          <div
            id="tab-1-content"
            className={`tab-content-item ${
              activeTabName === "CANCEL_AT_ANY_TIME" && "show"
            }`}
          >
            <div className="tab-1-content-inner">
              <div>
                <p className="text-lg">
                  If you decide Netflix isn't for you - no problem. No
                  commitment. Cancel online anytime.
                </p>
                <Link className="btn btn-lg">Watch Free For 30 Days</Link>
              </div>
              <img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (activeTabName == "WATCH_ANYWHERE") {
    return (
      <section className="tab-content">
        <div className="container">
          <div
            id="tab-2-content"
            className={`tab-content-item ${
              activeTabName === "WATCH_ANYWHERE" && "show"
            }`}
          >
            <div className="tab-2-content-top">
              <p class="text-lg">
                Watch TV shows and movies anytime, anywhere — personalized for
                you.
              </p>
              <Link className="btn btn-lg">Watch Free For 30 Days</Link>
            </div>
            <div className="tab-2-content-bottom">
              <div>
                <img
                  src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png"
                  alt=""
                />
                <p className="text-md">Watch on your TV</p>
                <p className="text-dark">
                  Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
                  players and more.
                </p>
              </div>
              <div>
                <img
                  src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png"
                  alt=""
                />
                <p className="text-md">Watch instantly or download for later</p>
                <p className="text-dark">
                  Available on phone and tablet, wherever you go.
                </p>
              </div>
              <div>
                <img
                  src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png"
                  alt=""
                />
                <p className="text-md">Use any computer</p>
                <p className="text-dark">Watch right on Netflix.com.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (activeTabName == "PICK_YOUR_PRICE") {
    return (
      <section className="tab-content">
        <div className="container">
          <div
            id="tab-3-content"
            className={`tab-content-item ${
              activeTabName === "PICK_YOUR_PRICE" && "show"
            }`}
          >
            <div className="text-center">
              <p className="text-lg">
                Choose one plan and watch everything on Netflix.
              </p>
              <Link to="/" className="btn btn-lg">
                Watch Free For 30 Days
              </Link>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <th>Basic</th>
                    <th>Standard</th>
                    <th>Premium</th>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly price after free month ends on 6/19/19</td>
                  <td>$8.99</td>
                  <td>$12.99</td>
                  <td>$15.99</td>
                </tr>
                <tr>
                  <td>HD Available</td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>Ultra HD Available</td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>Screens you can watch on at the same time</td>
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Watch on your laptop, TV, phone and tablet</td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>Unlimited movies and TV shows</td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>Cancel anytime</td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>First month free</td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
}

export default TabContent;