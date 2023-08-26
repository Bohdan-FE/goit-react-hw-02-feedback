import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <div>
      <h4>{message}</h4>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};
