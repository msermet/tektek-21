const authService = {
  register(userData) {
    try {
      const users = this.getAllUsers();

      if (users.find(u => u.email === userData.email)) {
        return { success: false, message: "Cet email est déjà utilisé" };
      }

      const newUser = {
        id: Date.now(),
        nom: userData.nom,
        email: userData.email,
        password: userData.password,
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      return { success: true, user: this.sanitizeUser(newUser) };
    } catch (error) {
      return { success: false, message: "Erreur lors de l'inscription" };
    }
  },

  login(email, password) {
    try {
      const users = this.getAllUsers();
      const user = users.find(u => u.email === email && u.password === password);

      if (!user) {
        return { success: false, message: "Email ou mot de passe incorrect" };
      }

      const sanitizedUser = this.sanitizeUser(user);
      localStorage.setItem('currentUser', JSON.stringify(sanitizedUser));

      return { success: true, user: sanitizedUser };
    } catch (error) {
      return { success: false, message: "Erreur lors de la connexion" };
    }
  },

  logout() {
    try {
      localStorage.removeItem('currentUser');
      return { success: true };
    } catch (error) {
      return { success: false, message: "Erreur lors de la déconnexion" };
    }
  },

  getCurrentUser() {
    try {
      const user = localStorage.getItem('currentUser');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      return null;
    }
  },

  isAuthenticated() {
    return this.getCurrentUser() !== null;
  },

  getAllUsers() {
    try {
      const users = localStorage.getItem('users');
      return users ? JSON.parse(users) : [];
    } catch (error) {
      return [];
    }
  },

  sanitizeUser(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
};

export default authService;
