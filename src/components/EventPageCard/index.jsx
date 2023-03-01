import React from 'react';
import './EventPageCard.css';
import { default as dateFromUtcDate } from '../../utils/common/dateFromUtcDate';
import { useNavigate, useParams } from 'react-router-dom';
import props from 'prop-types';
import { UPDATE_DATA_URL } from '../../constant/apiEndPoints';
import { default as makeRequest } from '../../utils/makeRequest/';

function EventPageCard(props) {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = React.useState(
    props.eventData.isRegistered
  );
  const [isBookmarked, setIsBookmarked] = React.useState(
    props.eventData.isBookmarked
  );
  const [areSeatsAvailable, setAreSeatsAvailable] = React.useState(
    props.eventData.areSeatsAvailable
  );
  const handleRegister = () => {
    makeRequest(UPDATE_DATA_URL(props.eventData.id), navigate, {
      data: {
        isRegistered: !isRegistered,
      },
    });
    setIsRegistered(!isRegistered);
  };
  const handleBookmark = () => {
    makeRequest(UPDATE_DATA_URL(props.eventData.id), navigate, {
      data: {
        isBookmarked: !isBookmarked,
      },
    });
    setIsBookmarked(!isBookmarked);
  };
  return (
    <div className="event-page-card">
      <img src={props.eventData.imgUrl} alt="event" />
      <hr />
      <div className="event-page-card-content">
        <div className="event-page-card-name">{props.eventData.name}</div>
        <div className="event-page-card-discription">
          {props.eventData.description}
        </div>
        <div className="event-page-card-venue">
          <strong>VENUE: </strong>
          {props.eventData.venue}
        </div>
        <div className="event-page-card-date">
          <strong>DATE: </strong>
          {dateFromUtcDate(props.eventData.datetime)}
        </div>
      </div>
      <div className="event-page-footer">
        <div className="event-page-footer-left">
          {!isRegistered && (
            <div onClick={handleRegister} className="event-footer-register">
              <i className="far fa-check-circle" />
              <p>REGISTERED</p>
            </div>
          )}
          {areSeatsAvailable && (
            <div className="event-footer-left-cross">
              <i className="fa-solid fa-circle-xmark fa-2x" />
              <span> NO SEATS AVAILABLE</span>
            </div>
          )}
        </div>
        <div className="event-page-footer-right">
          <div onClick={handleBookmark} className="event-footer-bookmark">
            {isBookmarked ? (
              <i className="fas fa-bookmark" />
            ) : (
              <i className="far fa-bookmark" />
            )}
          </div>
        </div>
      </div>
      <div className="event-page-footer-register">
        <button onClick={handleRegister}>
          {isRegistered ? 'UNREGISTER' : 'REGISTER'}
        </button>
      </div>
    </div>
  );
}

export default EventPageCard;

EventPageCard.propTypes = {
  eventData: props.object,
  handleCardClick: props.func,
  toRegister: props.bool,
};
