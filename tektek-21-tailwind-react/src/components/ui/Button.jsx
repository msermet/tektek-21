export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseClasses = 'px-6 py-2.5 rounded-full font-medium transition-all duration-200';

  const variants = {
    primary: 'gradient-bg text-white hover:shadow-lg transform hover:scale-105',
    secondary: 'bg-gray-800 text-white hover:bg-gray-900 transform hover:scale-105 shadow-lg',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-green-600'
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
