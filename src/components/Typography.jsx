import PropTypes from 'prop-types';

export default function Typography({
  children,
  variant = 'body',
  className = '',
  ...props
}) {
  const variantClasses = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-bold',
    h5: 'text-lg font-bold',
    h6: 'text-base font-bold',
    body: 'text-base',
    body2: 'text-sm',
    caption: 'text-xs',
  };

  const Component = variant.startsWith('h') ? variant : 'p';

  return (
    <Component className={`${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'body2', 'caption']),
  className: PropTypes.string,
};
