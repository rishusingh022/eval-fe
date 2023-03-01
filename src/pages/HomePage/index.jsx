import React, { useEffect } from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { EventCard, EventFilter } from '../../components';

import { GET_DATA_URL } from '../../constant/apiEndPoints';
import { default as makeRequest } from '../../utils/makeRequest/';

function HomePage() {
  const [eventData, setEventData] = React.useState([]);
  const navigate = useNavigate();
  React.useEffect(() => {
    makeRequest(GET_DATA_URL, {}, navigate)
      .then((res) => {
        setEventData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="HomePageContainer">
      <div className="HomePagefilter">
        <EventFilter />
      </div>
      <div className="EventCard">
        {eventData.map((event, index) => (
          <EventCard key={index} eventData={event} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
