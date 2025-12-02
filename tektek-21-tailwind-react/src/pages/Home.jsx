import HeroSection from '../components/common/HeroSection';
import DonationCard from '../components/common/DonationCard';
import Button from '../components/ui/Button';

export default function Home() {
  const stats = [
    { value: '1,247', label: 'Appareils reconditionnés' },
    { value: '89', label: 'Associations partenaires' },
    { value: '3,456', label: 'Donateurs actifs' }
  ];

  const donations = [
    {
      title: 'Ordinateur portable',
      image: 'https://via.placeholder.com/400x250/10b981/FFFFFF?text=Ordinateur',
      donor: 'JeanDupont92',
      donorInitial: 'J',
      avatarGradient: 'green',
      association: 'Les Restos du Cœur',
      badgeColor: 'green'
    },
    {
      title: 'Smartphone Android',
      image: 'https://via.placeholder.com/400x250/059669/FFFFFF?text=Smartphone',
      donor: 'MarieL',
      donorInitial: 'M',
      avatarGradient: 'purple',
      association: 'Emmaüs France',
      badgeColor: 'emerald'
    },
    {
      title: 'Tablette iPad',
      image: 'https://via.placeholder.com/400x250/047857/FFFFFF?text=Tablette',
      donor: 'PaulTech',
      donorInitial: 'P',
      avatarGradient: 'blue',
      association: 'Secours Populaire',
      badgeColor: 'teal'
    }
  ];

  return (
    <>
      <HeroSection
        title="Donnez une seconde vie à vos appareils"
        description="Vos appareils sont reconditionnés puis remis aux associations de votre choix. Un geste solidaire et écologique soutenu par les pouvoirs publics."
        stats={stats}
      />

      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Dons récents</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Découvrez les dernières contributions de notre communauté solidaire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {donations.map((donation, index) => (
            <DonationCard key={index} {...donation} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="secondary">Voir tous les dons</Button>
        </div>
      </main>
    </>
  );
}
