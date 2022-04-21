import Wrapper from "../../components/Wrapper/Wrapper";
import classes from "./WeAre.module.css";

export default function WeAre(props) {
  return (
    <Wrapper top={450}>
      <div className={`container ${classes.top}`}>
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-1">
              Why
              <br />
              <span className="fw-bold">Metoospace</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              magni dolor similique aspernatur? Perferendis magni tempora
            </p>
            <a href="/home" className="text-dark text-decoration-none">
              About Us <i className="fa fa-arrow-right" />
            </a>
          </div>
          <div className="col-md-6">
            <div className={classes.grid}>
              <div className={classes.place1}>
                <h1 className="fw-bold">13K</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className={classes.place2}>
                <h1 className="fw-bold">670</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className={classes.place3}>
                <h1 className="fw-bold">1650</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className={classes.place4}>
                <h1 className="fw-bold">+100</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <p className="pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              optio debitis aperiam adipisci dolorem repudiandae quaerat ipsa
              accusamus. Tempora, reiciendis ea eius adipisci excepturi velit
              facilis quas soluta aliquid repellat ratione sint? Corrupti
              impedit vel, numquam praesentium porro deserunt ipsam!
            </p>
          </div>
        </div>
        <div className="row">
          <img
            src="https://via.placeholder.com/1320x100"
            // className="img-fluid"
            height={100}
            alt=""
          />
        </div>
      </div>
    </Wrapper>
  );
}
