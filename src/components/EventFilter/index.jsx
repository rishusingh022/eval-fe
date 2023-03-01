import React from 'react';
import './EventFilter.css';
import props from 'prop-types';
function EventFilter(props) {
  const [advancefilter, setadvanceFilter] = React.useState(false);
  const handleAdvanceFilter = () => {
    setadvanceFilter(!advancefilter);
  };
  const [searchName, setSearchName] = React.useState('');
  const handleSetSearchName = (e) => {
    console.log(e.target.value);
    setSearchName(e.target.value);
  };
  const handleClick = () => {
    setSearchName(searchName);
    props.handleSearchValue(searchName);
    setSearchName('');
  };
  return (
    <div className="container">
      <div className="event-filter">
        <div className="filter">
          <i className="fas fa-filter fa-2x"></i>
          <span>Filter</span>
          <i
            onClick={handleAdvanceFilter}
            className="• fas fa-chevron-up fa-2x"
          ></i>
        </div>
        <div className="search">
          <input
            onChange={handleSetSearchName}
            placeholder="EVENT NAME"
          ></input>
          <i onClick={handleClick} className="fas fa-search fa-2x"></i>
        </div>
      </div>
      {advancefilter && (
        <div className="filter-radiobuttons">
          <div className="rb-col-left">
            <span>
              <input type="radio" value="all" name="filter" /> ALL
            </span>
            <span>
              <input type="radio" value="registered" name="filter" /> REGISTERED
            </span>
          </div>
          <div className="rb-col-right">
            <span>
              <input type="radio" value="bookmarked" name="filter" />
              BOOKMARKED
            </span>
            <span className="fix">
              <input type="radio" value="seats" name="filter" />
              SEATS AVAILABLE
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventFilter;

EventFilter.propTypes = {
  handleSearchValue: props.func,
};
