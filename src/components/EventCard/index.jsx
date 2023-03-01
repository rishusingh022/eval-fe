import React from 'react';
import './EventCard.css';
import { mockEventData } from '../../mocks/mockData';
import { default as dateFromUtcDate } from '../../utils/common/dateFromUtcDate';
import props from 'prop-types';
function EventCard(props) {
  const [isRegistered, setIsRegistered] = React.useState(
    props.eventData.isRegistered
  );
  const [isBookmarked, setIsBookmarked] = React.useState(
    props.eventData.isBookmarked
  );
  const handleRegister = () => {
    setIsRegistered(!isRegistered);
  };
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="event-card">
      <img src={props.eventData.imgUrl} alt="event" />
      <hr />
      <div className="event-card-content">
        <div className="event-card-name">{props.eventData.name}</div>
        <div className="event-card-discription">
          {props.eventData.description}
        </div>
        <div className="event-card-venue">
          <strong>VENUE: </strong>
          {props.eventData.venue}
        </div>
        <div className="event-card-date">
          <strong>DATE: </strong>
          {dateFromUtcDate(props.eventData.datetime)}
        </div>
      </div>
      <div className="event-footer">
        <div className="event-footer-left">
          {isRegistered && (
            <div onClick={handleRegister} className="event-footer-register">
              <i className="far fa-check-circle" />
              <p>REGISTERED</p>
            </div>
          )}
        </div>
        <div className="event-footer-right">
          <div onClick={handleBookmark} className="event-footer-bookmark">
            {isBookmarked ? (
              <i className="fas fa-bookmark" />
            ) : (
              <i className="far fa-bookmark" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;

EventCard.propTypes = {
  eventData: props.object,
};
