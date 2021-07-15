import PropType from 'prop-types';

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <h3>Find contact by name</h3>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
        placeholder="Enter name for Search"
      />
    </>
  );
};

Filter.prototype = {
  filter: PropType.string,
  target: PropType.string,
};

export default Filter;
