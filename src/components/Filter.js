import "../stylesheets/Filter.scss";

const Filter = (props) => {
  const handleChange = (ev) => {
    props.handleChange(ev.target.value);
    const selectValue = ev.target.value;
    console.log(selectValue);
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleChangeSelect = (ev) => {
    const selectValue = ev.target.value;
    console.log(selectValue);

    props.handleChangeSelect(selectValue);
  };

  return (
    <form onSubmit={handleFormSubmit} className="form">
      <input
        type="text"
        onChange={handleChange}
        value={props.filterText}
        className="input"
      ></input>

      <select onChange={handleChangeSelect}>
        <option value="Gender" name="Gender">
          Gender
        </option>
        <option value={props.species} name="Species">
          Species
        </option>
      </select>
    </form>
  );
};
Filter.propTypes = {};
export default Filter;
