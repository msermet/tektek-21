import Badge from '../ui/Badge';
import Avatar from '../ui/Avatar';

export default function DonationCard({ title, image, donor, donorInitial, avatarGradient, association, badgeColor = 'green' }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="absolute top-4 left-4">
          <Badge color={badgeColor}>Nouveau</Badge>
        </div>
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
