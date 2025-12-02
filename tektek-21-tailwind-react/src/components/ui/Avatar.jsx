export default function Avatar({ letter, gradient = 'green' }) {
  const gradients = {
    green: 'bg-gradient-to-br from-green-400 to-green-600',
    purple: 'bg-gradient-to-br from-purple-400 to-purple-600',
    blue: 'bg-gradient-to-br from-blue-400 to-blue-600',
    pink: 'bg-gradient-to-br from-pink-400 to-pink-600'
  };

  return (
    <div className={`w-10 h-10 ${gradients[gradient]} rounded-full flex items-center justify-center text-white font-bold`}>
      {letter}
    </div>
  );
}
