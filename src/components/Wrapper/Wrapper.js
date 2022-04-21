function Wrapper(props) {
  return (
    <section className="vh-100" style={{ marginTop: `${props.top}px` }}>
      {props.children}
    </section>
  );
}

export default Wrapper;
