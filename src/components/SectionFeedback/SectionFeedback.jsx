import PropTypes from 'prop-types';

export const Section = ({ title }) => {
  return <>
    {title && <h2>{title}</h2>
    }
  </>
}
Section.propTypes = {
  title: PropTypes.string
};
