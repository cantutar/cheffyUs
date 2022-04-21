// import Wrapper from "../../components/Wrapper/Wrapper";
import classes from "./infoSection.module.css";

export default function InfoSection(props) {
  return (
    <>
      <div className="container mb-5 pb-5">
        <div className="row text-center">
          <h1 className="display-1 fw-bold">Enjoy Your vacation</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className={`${classes.grid}`}>
          <div className={classes.place1}>
            <div className="col-md-6">
              <img
                src="https://via.placeholder.com/450x250"
                alt=""
                className="rounded"
              />
              <h1>Clean bathrooms</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Impedit optio adipisci cumque suscipit velit debitis, eum nam
                dignissimos dolor dolores!
              </p>
            </div>
          </div>
          <div className={classes.place2}>
            <div className="pt-3">
              <div className="row">
                <div className="col">
                  <h1>Clean bathrooms</h1>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Impedit optio adipisci cumque suscipit velit debitis, eum
                    nam dignissimos dolor dolores!
                  </p>
                </div>
                <div className="col">
                  <img
                    src="https://via.placeholder.com/250x250"
                    alt=""
                    className="rounded"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.place3}>
            <div className="col-md-6">
              <div className="">
                <img src="https://via.placeholder.com/250x450" alt="" />
                <h1>Cozy Living room</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit optio adipisci cumque suscipit velit debitis, eum nam
                  dignissimos dolor dolores!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
