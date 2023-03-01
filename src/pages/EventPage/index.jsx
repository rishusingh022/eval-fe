import React, { useEffect } from 'react';
import './EventPage.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Header, Footer } from '../../components';
import { EventPageCard } from '../../components';
import { GET_DATA_BY_ID_URL } from '../../constant/apiEndPoints';
import { default as makeRequest } from '../../utils/makeRequest/';
function EventPage() {
  const idObj = useParams();
  const [eventData, setEventData] = React.useState({});
  const navigate = useNavigate();
  React.useEffect(() => {
    makeRequest(GET_DATA_BY_ID_URL(idObj.id), navigate, {})
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
      <div className="EventPageContainer">
        <div className="EventPageCard">
          <EventPageCard eventData={eventData} />
        </div>
      </div>
    </div>
  );
}

export default EventPage;
