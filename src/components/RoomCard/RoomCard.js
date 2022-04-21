export default function RoomCard(props) {
  Array(6).fill(
    <>
      <input
        type="checkbox"
        className="btn-check"
        id="btncheck1"
        autoComplete="off"
      />
      <label className="btn btn-outline-secondary" htmlFor="btncheck1">
        Checkbox 1
      </label>
    </>
  );
  return (
    <>
      <div className="col-md-4">
        <div className="card">
          <img
            src="https://via.placeholder.com/200x250"
            className={`shadow card-img-top ${props.cardImage}`}
            alt="cardImage"
          />
          <div className="card-body">
            <h5 className="card-title">Signature Taba</h5>
            <p className="card-text">
              Click on box to discover more information.
            </p>
            <>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck1"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="btncheck1">
                Checkbox 1
              </label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck2"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="btncheck2">
                Checkbox 2
              </label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck3"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="btncheck3">
                Checkbox 3
              </label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck4"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="btncheck4">
                Checkbox 4
              </label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck5"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="btncheck5">
                Checkbox 5
              </label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck6"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="btncheck5">
                Checkbox 6
              </label>
            </>
            <div className="row pt-2">
              <div className="col">
                <p className="text-gray">
                  <span className="text-dark fs-5 fw-bold">45$</span>
                  /night
                </p>
              </div>
              <div className="col">
                <p className="text-gray">
                  <span className="text-dark fs-5 fw-bold">15$</span>
                  /Hour
                </p>
              </div>
              <div className="col-md-5">
                <a href="/" className="btn btn-secondary ms-auto">
                  View availability
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
