import PropTypes from 'prop-types';

export default function Badge({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}) {
  const baseClasses = 'inline-flex items-center font-medium rounded-full';
  const variantClasses = {
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    danger: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
  };
  const sizeClasses = {
    small: 'px-2 py-0.5 text-xs',
    medium: 'px-3 py-1 text-sm',
    large: 'px-4 py-2 text-base',
  };

  const badgeClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};
