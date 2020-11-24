import "../stylesheets/Filter.scss";

const Filter = (props) => {
  const handleChange = (ev) => {
    props.handleChange(ev.target.value);
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleFormSubmit} className="form">
      <input
        type="text"
        onChange={handleChange}
        value={props.filterText}
        className="input"
      ></input>
    </form>
  );
};
Filter.propTypes = {};
export default Filter;
