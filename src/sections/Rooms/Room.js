import RoomCard from "../../components/RoomCard/RoomCard";
import Wrapper from "../../components/Wrapper/Wrapper";

import classes from "./Room.module.css";

export default function Room(props) {
  return (
    <>
      <Wrapper top={250}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="display-3" style={{ fontWeight: 500 }}>
                Rent Room even for <br />
                <span className="fw-bolder">2 Hours</span> or more !
              </h1>
            </div>
            <div className="col-md-6 pt-4">
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                voluptatem eius quibusdam beatae rerum sunt?
              </h6>
              <p className="pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                commodi natus, sed nam dolorem recusandae a beatae. Voluptas,
                id. Consequuntur fugit inventore nesciunt distinctio libero
                incidunt, officia provident? Mollitia voluptas in consequuntur
                consectetur vero nihil?
              </p>
              <a href="/home" className="text-dark text-decoration-none">
                Learn More about it <i className="fa fa-arrow-right" />
              </a>
            </div>
            <div className="col-md-2">
              <h6>Lorem ipsum dolor sit amet.:</h6>
              <p>
                <i className="fa fa-plus" /> Lorem, ipsum dolor.
              </p>
              <p>
                <i className="fa fa-plus" /> Lorem, ipsum dolor.
              </p>
              <p>
                <i className="fa fa-plus" /> Lorem, ipsum dolor.
              </p>
            </div>
          </div>
          <Wrapper top={200}>
            <div className="row">
              <RoomCard cardImage={classes.cardImage} />
              <RoomCard cardImage={classes.cardImage} />
              <RoomCard cardImage={classes.cardImage} />
            </div>
            <div className="row pt-5 ">
              <div className="d-flex justify-content-center">
                <a
                  href="http://"
                  className="btn btn-outline-secondary btn-lg mx-auto"
                >
                  Explorer More Options
                </a>
              </div>
            </div>
          </Wrapper>
        </div>
      </Wrapper>
    </>
  );
}
