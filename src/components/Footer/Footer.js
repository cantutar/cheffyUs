import classes from "./Footer.module.css";

export default function Footer(props) {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="container">
            <div className="row mt-3">
              <div className="col-5">
                <h6 className="fs-3 fw-bold">Metoospace</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Pariatur totam expedita tempora dicta dolorum aut, molestiae
                  sunt error molestias, excepturi iste saepe quam nemo debitis
                  obcaecati dolore est quos repudiandae qui laudantium nobis
                  adipisci dolores sapiente sint. Sed, a vero?
                </p>
                <div className="d-flex justify-content-around">
                  <i
                    className={`fa fa-facebook-official text-dark fa-2x ${classes.facebook}`}
                  />
                  <i
                    className={`fa fa-twitter text-dark fa-2x ${classes.twitter}`}
                  />
                  <i
                    className={`fa fa-instagram text-dark fa-2x ${classes.instagram}`}
                  />
                  <i
                    className={`fa fa-linkedin-square text-dark fa-2x ${classes.linked}`}
                  />
                </div>
              </div>
              <div className="col-6 mb-3 mx-auto">
                <div className="row">
                  <div className="col">
                    <h3>Quick Link</h3>
                    <ul className="nav flex-column">
                      <li className={`nav-item mb-2 ${classes.navItem}`}>
                        lorem
                      </li>
                      <li className={`nav-item mb-2 ${classes.navItem}`}>
                        lorem
                      </li>
                      <li className={`nav-item mb-2 ${classes.navItem}`}>
                        lorem
                      </li>
                      <li className={`nav-item mb-2 ${classes.navItem}`}>
                        lorem
                      </li>
                      <li className={`nav-item mb-2 ${classes.navItem}`}>
                        lorem
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h3>Quick Link</h3>
                    <ul className="nav flex-column">
                      <li className={`nav-item mb-2 ${classes.navItem}`}>
                        lorem
                      </li>
                      <li className={`nav-item mb-2 ${classes.navItem}`}>
                        lorem
                      </li>
                      <li className={`nav-item mb-2 ${classes.navItem}`}>
                        lorem
                      </li>
                      <li className={`nav-item mb-2 ${classes.navItem}`}>
                        lorem
                      </li>
                      <li className={`nav-item mb-2 ${classes.navItem}`}>
                        lorem
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h3>Quick Link</h3>
                    <ul className="nav flex-column">
                      <li className={`nav-item mb-2 ${classes.navItem}`}>
                        lorem
                      </li>
                      <li className={`nav-item mb-2 ${classes.navItem}`}>
                        lorem
                      </li>
                      <li className={`nav-item mb-2 ${classes.navItem}`}>
                        lorem
                      </li>
                      <li className={`nav-item mb-2 ${classes.navItem}`}>
                        lorem
                      </li>
                      <li className={`nav-item mb-2 ${classes.navItem}`}>
                        lorem
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="d-flex justify-content-between">
              <p className="text-muted">
                Lorem ipsum dolor sit amet. 2021-2022
              </p>
              <div className="">
                <a
                  href="http://"
                  className="mx-auto text-decoration-none text-muted"
                >
                  Press
                </a>
                <a
                  href="http://"
                  className="mx-2 text-decoration-none text-muted"
                >
                  Blog
                </a>
                <a
                  href="http://"
                  className="mx-auto text-decoration-none text-muted"
                >
                  Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
