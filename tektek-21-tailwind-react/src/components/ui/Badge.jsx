export default function Badge({ children, color = 'green', className = '' }) {
  const colors = {
    green: 'bg-green-500',
    emerald: 'bg-emerald-500',
    teal: 'bg-teal-500'
  };

  return (
    <span className={`${colors[color]} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg ${className}`}>
      {children}
    </span>
  );
}
