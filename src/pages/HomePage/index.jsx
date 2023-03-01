import React, { useEffect } from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { EventCard, EventFilter } from '../../components';

import { GET_DATA_URL } from '../../constant/apiEndPoints';
import { default as makeRequest } from '../../utils/makeRequest/';
import { Header, Footer } from '../../components';
function HomePage() {
  const [eventData, setEventData] = React.useState([]);
  const navigate = useNavigate();
  const [onCardClick, setOnCardClick] = React.useState(false);
  const [searchValue, setsearchValue] = React.useState('');
  const [filterIsRegistered, setFilterIsRegistered] = React.useState(false);
  const [filteredIsBookmarked, setFilteredIsBookmarked] = React.useState(false);
  const [filteredIsAvailable, setFilteredIsAvailable] = React.useState(false);
  const handleFilterIsRegistered = () => {
    setFilterIsRegistered(true);
    setFilteredIsBookmarked(false);
    setFilteredIsAvailable(false);
  };
  const handleFilteredIsBookmarked = () => {
    setFilteredIsBookmarked(true);
    setFilterIsRegistered(false);
    setFilteredIsAvailable(false);
  };
  const handleFilteredIsAvailable = () => {
    setFilteredIsAvailable(true);
    setFilterIsRegistered(false);
    setFilteredIsBookmarked(false);
  };

  const handleSearchValue = (value) => {
    console.log(value);
    setsearchValue(value);
  };
  const handleCardClick = (id) => {
    setOnCardClick(true);
    navigate(`/event/${id}`);
  };
  console.log(filterIsRegistered, filteredIsBookmarked, filteredIsAvailable);
  React.useEffect(() => {
    makeRequest(GET_DATA_URL, navigate, {})
      .then((res) => {
        setEventData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="HomePageContainer">
        <div className="HomePagefilter">
          <EventFilter
            handleFilterIsRegistered={handleFilterIsRegistered}
            handleFilteredIsBookmarked={handleFilteredIsBookmarked}
            handleFilteredIsAvailable={handleFilteredIsAvailable}
            handleSearchValue={handleSearchValue}
          />
        </div>
        <div className="EventCard">
          {!filterIsRegistered &&
            !filteredIsBookmarked &&
            !filteredIsAvailable &&
            !searchValue &&
            eventData.map((event, index) => (
              <EventCard
                key={index}
                eventData={event}
                handleCardClick={handleCardClick}
              />
            ))}
          {!filterIsRegistered &&
            !filteredIsBookmarked &&
            !filteredIsAvailable &&
            searchValue &&
            eventData
              .filter((event) => {
                return event.name.toLowerCase().includes(searchValue);
              })
              .map((event, index) => (
                <EventCard
                  key={index}
                  eventData={event}
                  handleCardClick={handleCardClick}
                />
              ))}
          {filterIsRegistered &&
            eventData
              .filter((event) => {
                return event.isRegistered === true;
              })
              .map((event, index) => (
                <EventCard
                  key={index}
                  eventData={event}
                  handleCardClick={handleCardClick}
                />
              ))}
          {filteredIsBookmarked &&
            eventData
              .filter((event) => {
                return event.isBookmarked === true;
              })
              .map((event, index) => (
                <EventCard
                  key={index}
                  eventData={event}
                  handleCardClick={handleCardClick}
                />
              ))}
          {filteredIsAvailable &&
            eventData
              .filter((event) => {
                return event.areSeatsAvailable === true;
              })
              .map((event, index) => (
                <EventCard
                  key={index}
                  eventData={event}
                  handleCardClick={handleCardClick}
                />
              ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
