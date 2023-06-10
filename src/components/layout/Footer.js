//import { useContext } from "react";
//import { ToDosDataContext } from "../../contexts/ToDosDataContext";

const Footer=() => {
  const {todoList,deleteTodo,reFetch,loadingStatus}=
    "lorum ipsum";
  //useContext(ToDosDataContext)

  const totalItems=todoList?.length;
  const notCompletedItems=todoList?.filter(
    (r) => !r.completed,
  ).length;
  const importantItems=todoList?.filter(
    (r) => !r.completed&&r.important,
  ).length;

  const handleClearCompleted=() => {
    const response=window.confirm("Clear Completed Todos?");
    if(response) {
      let completedIds=todoList
      //  .filter((todoItem) => {
      //    return todoItem.completed;
      //  })
      //  .map((rec) => rec.id);
      //deleteTodo(completedIds);
    }
  };

  return (
    <footer className="text-center">
      <div className="stats">
        <button
          title="Refresh List"
          className="btn btn-theme-primary"
          onClick={() => {
            console.log('reFetch')
          }}
        >
          <i className="fas fa-sync"></i>
        </button>

        <div className="clear-completed">
          <button
            onClick={handleClearCompleted}
            className="btn btn-theme-danger btn-md"
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
