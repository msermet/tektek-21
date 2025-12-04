import { Link } from 'react-router-dom';
import HeroSection from '../components/common/HeroSection';
import DonationCard from '../components/common/DonationCard';
import Button from '../components/ui/Button';
import { homeStats } from '../data/stats';
import { allDonations } from '../data/donations';
import useLocalStorage from '../hooks/useLocalStorage';
import { getAllDonations } from '../utils/donationHelpers';

export default function Home() {
  const [userDonations] = useLocalStorage('donations', []);
  const combinedDonations = getAllDonations(userDonations, allDonations);

  const recentDonations = combinedDonations
    .sort((a, b) => {
      const dateA = new Date(a.date || 0);
      const dateB = new Date(b.date || 0);
      return dateB - dateA;
    })
    .slice(0, 3);

  return (
    <>
      <HeroSection
        title="Donnez une seconde vie à vos appareils"
        description="Vos appareils sont reconditionnés puis remis aux associations de votre choix. Un geste solidaire et écologique soutenu par les pouvoirs publics."
        stats={homeStats}
      />

      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Dons récents</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Découvrez les dernières contributions de notre communauté solidaire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentDonations.length > 0 ? (
            recentDonations.map((donation) => (
              <DonationCard key={donation.id || donation.title} {...donation} />
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-500 text-lg">Aucun don récent pour le moment</p>
              <Link to="/donner" className="inline-block mt-4">
                <Button>Faire le premier don</Button>
              </Link>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <Link to="/tous-les-dons">
            <Button variant="secondary">Voir tous les dons</Button>
          </Link>
        </div>
      </main>
    </>
  );
}
