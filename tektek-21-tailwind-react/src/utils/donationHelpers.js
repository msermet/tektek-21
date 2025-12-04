const avatarGradients = ['green', 'blue', 'purple', 'pink', 'indigo', 'teal'];
const badgeColors = ['green', 'emerald', 'teal'];

export function transformFormDonationToCard(formDonation) {
  const avatarGradient = formDonation.avatarGradient || avatarGradients[Math.floor(Math.random() * avatarGradients.length)];
  const badgeColor = formDonation.badgeColor || badgeColors[Math.floor(Math.random() * badgeColors.length)];

  const donorName = `${formDonation.prenom}${formDonation.nom.charAt(0)}`;
  const donorInitial = formDonation.prenom.charAt(0).toUpperCase();

  const title = formDonation.marque && formDonation.modele
    ? `${formDonation.marque} ${formDonation.modele}`
    : formDonation.typeAppareil;

  const typeMapping = {
    'Ordinateur portable': 'Ordinateur',
    'Ordinateur fixe': 'Ordinateur',
    'Smartphone': 'Smartphone',
    'Tablette': 'Tablette',
    'Écran': 'Ordinateur',
    'Clavier': 'Ordinateur',
    'Souris': 'Ordinateur',
    'Autre': 'Ordinateur'
  };

  const placeholderImages = {
    'Ordinateur': 'https://via.placeholder.com/400x250/10b981/FFFFFF?text=Ordinateur',
    'Smartphone': 'https://via.placeholder.com/400x250/059669/FFFFFF?text=Smartphone',
    'Tablette': 'https://via.placeholder.com/400x250/047857/FFFFFF?text=Tablette'
  };

  const mappedType = typeMapping[formDonation.typeAppareil] || 'Ordinateur';

  const imageUrl = formDonation.image || placeholderImages[mappedType];

  return {
    id: formDonation.id,
    title,
    image: imageUrl,
    donor: donorName,
    donorInitial,
    avatarGradient: avatarGradient,
    association: formDonation.association,
    badgeColor: badgeColor,
    type: mappedType,
    state: formDonation.etatAppareil,
    description: formDonation.description || '',
    isUserDonation: true,
    date: formDonation.date
  };
}

export function getAllDonations(localStorageDonations, staticDonations) {
  const transformedUserDonations = localStorageDonations.map(transformFormDonationToCard);
  return [...transformedUserDonations, ...staticDonations];
}
