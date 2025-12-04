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
    'Ordinateur': 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=250&fit=crop&q=80',
    'Smartphone': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop&q=80',
    'Tablette': 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=250&fit=crop&q=80'
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

  const staticDonationsWithDate = staticDonations.map((donation, index) => ({
    ...donation,
    date: donation.date || new Date(Date.now() - (index + 1) * 86400000).toISOString()
  }));

  return [...transformedUserDonations, ...staticDonationsWithDate];
}
