import React from 'react';
import './EventFilter.css';
function EventFilter() {
  const [advancefilter, setadvanceFilter] = React.useState(false);
  const handleAdvanceFilter = () => {
    setadvanceFilter(!advancefilter);
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
          <input placeholder="EVENT NAME"></input>
          <i className="fas fa-search fa-2x"></i>
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
