import { useState, useEffect } from 'react';

export default function EditDonationModal({ donation, onSave, onClose }) {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    typeAppareil: '',
    marque: '',
    modele: '',
    etatAppareil: '',
    description: '',
    association: '',
    image: null
  });
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (donation) {
      setFormData({
        prenom: donation.prenom || '',
        nom: donation.nom || '',
        email: donation.email || '',
        telephone: donation.telephone || '',
        typeAppareil: donation.typeAppareil || '',
        marque: donation.marque || '',
        modele: donation.modele || '',
        etatAppareil: donation.etatAppareil || '',
        description: donation.description || '',
        association: donation.association || '',
        image: donation.image || null
      });
      setImagePreview(donation.image);
    }
  }, [donation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5000000) {
        alert("L'image est trop volumineuse. Taille maximum : 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFormData(prev => ({ ...prev, image: null }));
    setImagePreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...donation,
      ...formData,
      avatarGradient: donation.avatarGradient,
      badgeColor: donation.badgeColor
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl my-8 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center z-10">
          <h3 className="text-2xl font-bold text-gray-800">Modifier le don</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Prénom *</label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Nom *</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Téléphone</label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Type d'appareil *</label>
              <select
                name="typeAppareil"
                value={formData.typeAppareil}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none"
              >
                <option value="">Sélectionnez un type</option>
                <option>Ordinateur portable</option>
                <option>Ordinateur fixe</option>
                <option>Smartphone</option>
                <option>Tablette</option>
                <option>Écran</option>
                <option>Clavier</option>
                <option>Souris</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">État *</label>
              <select
                name="etatAppareil"
                value={formData.etatAppareil}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none"
              >
                <option value="">Sélectionnez l'état</option>
                <option>Comme neuf</option>
                <option>Très bon état</option>
                <option>Bon état</option>
                <option>État correct</option>
                <option>En panne</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Marque</label>
              <input
                type="text"
                name="marque"
                value={formData.marque}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Modèle</label>
              <input
                type="text"
                name="modele"
                value={formData.modele}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Description</label>
            <textarea
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none resize-none"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Photo de l'appareil</label>
            {!imagePreview ? (
              <label className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors cursor-pointer block">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <svg className="w-10 h-10 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-600 text-sm">Cliquez pour changer la photo</p>
              </label>
            ) : (
              <div className="relative border-2 border-gray-200 rounded-lg overflow-hidden">
                <img src={imagePreview} alt="Aperçu" className="w-full h-48 object-cover" />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all font-semibold shadow-md"
            >
              Enregistrer les modifications
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all font-semibold"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
