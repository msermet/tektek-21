export default function OrganizationCard({ name, initials, description, devicesCount, gradient, status = 'Actif' }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
      <div className="flex items-center justify-between mb-6">
        <div className={`w-16 h-16 ${gradient} rounded-2xl flex items-center justify-center text-white font-bold text-2xl`}>
          {initials}
        </div>
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
          {status}
        </span>
      </div>
      <h4 className="text-2xl font-bold text-gray-800 mb-3">{name}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center space-x-4 text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
          </svg>
          <span>{devicesCount} appareils</span>
        </div>
      </div>
    </div>
  );
}
