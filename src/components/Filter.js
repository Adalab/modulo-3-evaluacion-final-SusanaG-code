import "../stylesheets/Filter.scss";

const Filter = (props) => {
  const handleChange = (ev) => {
    props.handleChange(ev.target.value);
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleSelect = (ev) => {
    const selectValue = ev.target.value;
    props.handleSelect(selectValue);
  };
  return (
    <form onSubmit={handleFormSubmit} className="form">
      <input
        type="text"
        onChange={handleChange}
        placeholder="Who are you looking for?"
        value={props.filterText}
        className="input"
      ></input>
      <select onChange={handleSelect} className="select">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="unknown">Unknown</option>
        <option value="all">All</option>
      </select>
    </form>
  );
};
Filter.propTypes = {};
export default Filter;
