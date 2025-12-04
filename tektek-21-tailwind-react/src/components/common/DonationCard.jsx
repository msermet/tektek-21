import Badge from '../ui/Badge';
import Avatar from '../ui/Avatar';

export default function DonationCard({ title, image, donor, donorInitial, avatarGradient, association, badgeColor = 'green', isUserDonation = false, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group relative">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="absolute top-4 left-4">
          <Badge color={badgeColor}>{isUserDonation ? 'Mon don' : 'Nouveau'}</Badge>
        </div>
        {isUserDonation && (
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={onEdit}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors shadow-lg"
              title="Modifier"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button
              onClick={onDelete}
              className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors shadow-lg"
              title="Supprimer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Avatar letter={donorInitial} gradient={avatarGradient} />
            <div>
              <p className="text-sm text-gray-500">Donné par</p>
              <p className="text-gray-800 font-semibold">{donor}</p>
            </div>
          </div>
          <div className="border-t pt-3">
            <p className="text-sm text-gray-500 mb-1">Association bénéficiaire</p>
            <p className="text-gray-800 font-semibold flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {association}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
