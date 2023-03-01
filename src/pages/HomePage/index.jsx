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
  const handleSearchValue = (value) => {
    console.log(value);
    setsearchValue(value);
  };
  const handleCardClick = (id) => {
    setOnCardClick(true);
    navigate(`/event/${id}`);
  };
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
          <EventFilter handleSearchValue={handleSearchValue} />
        </div>
        <div className="EventCard">
          {!searchValue &&
            eventData.map((event, index) => (
              <EventCard
                key={index}
                eventData={event}
                handleCardClick={handleCardClick}
              />
            ))}
          {searchValue &&
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
        </div>
      </div>
    </div>
  );
}

export default HomePage;
