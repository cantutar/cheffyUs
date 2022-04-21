import { Nav } from "react-bootstrap";
import classes from "./Hero.module.css";
import "./Hero.css";
export default function Hero(props) {
  return (
    <>
      <section className="vh-100" style={{ marginBottom: "200px" }}>
        <div
          className={`${classes.Hero} d-flex justify-content-center align-items-center`}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="display-1 fw-bolder text-white">
                  Find The Next Amazing Hotel to Rent
                </h1>
                <p className="text-gray">
                  we provide best places to renting for a night or even Hours
                </p>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
        <div className={`mx-auto ${classes.search} `}>
          <Nav variant="tabs" defaultActiveKey="/home" className={classes.navi}>
            <Nav.Item>
              <Nav.Link href="/home">
                <i className="fa fa-building fa-x" />
                Hotel
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">
                <i className="fa fa-hotel fa-x" />
                Hostel
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">
                <i className="fa fa-book fa-x" />
                Room
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className={`py-5 px-5 ${classes.searchAlt} shadow-lg bg-body`}>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-3">
                    <select
                      className="form-select border-0"
                      type="text"
                      placeholder=".form-control-lg"
                    >
                      <option defaultValue={1}>Choose Country</option>
                    </select>
                  </div>
                  <div className="col-3  mx-auto">
                    <select
                      className="form-select border-0"
                      type="text"
                      placeholder=".form-control-lg"
                    >
                      <option defaultValue={1}>Choose City</option>
                    </select>
                  </div>
                  <div className="col-5">
                    <select
                      className="form-select border-0"
                      type="text"
                      placeholder=".form-control-lg"
                    >
                      <option defaultValue={1}>
                        You want Stay Hourly or Daily
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
            <div className="row mt-3">
              <div className="col-md-5">
                <select
                  className="form-select form-select-lg"
                  type="text"
                  placeholder=".form-control-lg"
                >
                  <option defaultValue={1}>Select Your Hotel</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-md-5">
                <input
                  className="form-control form-select-lg"
                  type="date"
                  name=""
                  id=""
                />
              </div>
              <div className="col-md-2">
                <button className="btn btn-lightgray btn-lg">
                  Reserve Hotel
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
