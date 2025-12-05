import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="TekTek-21 Logo" className="w-12 h-12 object-contain" />
              <h3 className="text-2xl font-bold">TekTek-21</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Plateforme solidaire pour donner une seconde vie à vos appareils électroniques et soutenir les associations.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/presentation" className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Présentation</span>
                </Link>
              </li>
              <li>
                <Link to="/collaborateurs" className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Collaborateurs</span>
                </Link>
              </li>
              <li>
                <Link to="/tous-les-dons" className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Tous les dons</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Nous contacter</span>
                </Link>
              </li>
              <li>
                <Link to="/donner" className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Faire un don</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Nos engagements</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400 text-sm">Collecte gratuite de vos appareils</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400 text-sm">Reconditionnement professionnel</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400 text-sm">Don aux associations locales</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400 text-sm">Transparence totale du processus</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400 text-sm">Impact écologique mesurable</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Nous contacter</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Adresse</p>
                  <span className="text-sm">
                    123 Avenue de la République<br />75011 Paris, France
                  </span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Téléphone</p>
                  <span className="text-sm">01 23 45 67 89</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <span className="text-sm">contact@tektek-21.fr</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2024 TekTek-21 - Tous droits réservés</p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Pour un numérique plus responsable</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
