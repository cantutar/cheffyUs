import Wrapper from "../../components/Wrapper/Wrapper";
import classes from "./About.module.css";

function About(props) {
  return (
    <>
      <Wrapper>
        <div className="container pt-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className="display-1">
                Share Your Room,
                <br />
                <span className="fw-bold">Pay Fair !</span>
              </h1>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                perspiciatis.
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                magni dolor similique aspernatur? Perferendis magni tempora
                quaerat dolorum accusantium dolorem velit vitae magnam. A
                eligendi, totam earum accusantium mollitia voluptates ut fugit
                ratione omnis optio minus minima sapiente recusandae autem.
              </p>
              <a href="/home" className="text-dark text-decoration-none">
                Learn More about it <i className="fa fa-arrow-right" />
              </a>
            </div>
            <div className="col-md-6">
              <img
                src="https://via.placeholder.com/700x800"
                alt=""
                className={`shadow ${classes.baseImage}`}
              />
              <img
                src="https://via.placeholder.com/400x400"
                alt=""
                className={`shadow ${classes.secondImage}`}
              />
              <img
                src="https://via.placeholder.com/350x350"
                alt=""
                className={`shadow ${classes.topImage}`}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default About;
