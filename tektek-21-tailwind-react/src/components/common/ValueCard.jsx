export default function ValueCard({ icon, title, description, gradient = 'gradient-bg' }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
      <div className={`w-16 h-16 ${gradient} rounded-2xl flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h4 className="text-2xl font-bold text-gray-800 mb-4">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
