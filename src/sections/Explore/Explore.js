import Slider from "../../components/Slider/Slider";
import Wrapper from "../../components/Wrapper/Wrapper";
import classes from "./Explore.module.css";
export default function Explore(props) {
  return (
    <>
      <Wrapper top={430}>
        <div className={`container-fluid ${classes.Explore}`}>
          <div className="row">
            <h1 className="display-3 fw-bold">Explorer Top Hotels</h1>
          </div>
          <Slider />
        </div>
      </Wrapper>
    </>
  );
}
