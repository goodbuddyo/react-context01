
const Footer=() => {
  return (
    <footer className="text-center">
      <div className="stats">
        <button
          title="Refresh List"
          className="btn btn-theme-primary"
          onClick={console.log("Refresh from footer")}
        >
          <i className="fas fa-sync"></i>
        </button>

        <div className="clear-completed">
          <button
            className="btn btn-theme-danger btn-md"
            onClick={console.log("Clear from footer")}
          >
            Clear Completed
          </button>
        </div>

        <div className="quick-stats">
          <p>
            <span className="badge text-bg-secondary">
              Badge Lorem ipsum
            </span>{" "}
            Items:Lorem ipsum{" "}
            <span className="badge theme-main-bg">
              Lorem ipsum
            </span>{" "}
            not completed of which{" "}
            <span className="badge btn-theme-danger">
              Important items
            </span>{" "}
            are important
          </p>

          <p className="hidden-block">
            <span className="badge text-bg-secondary">x</span>{" "}
            Items: <span className="badge theme-main-bg">x</span>{" "}
            not completed of which{" "}
            <span className="badge btn-theme-danger">x</span> are
            important
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
