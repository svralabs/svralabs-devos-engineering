import PropTypes from 'prop-types';

export default function Card({
  children,
  className = '',
  ...props
}) {
  const baseClasses = 'bg-white rounded-lg shadow-md overflow-hidden';

  return (
    <div className={`${baseClasses} ${className}`} {...props}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
