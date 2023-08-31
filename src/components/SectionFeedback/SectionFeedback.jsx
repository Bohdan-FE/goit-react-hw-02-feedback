import PropTypes from 'prop-types';

export const Section = ({ title }) => {
  return <h2>{title}</h2>;
};

Section.propTypes = {
  title: PropTypes.string,
};
