const User = require('../models/avatar');

class UserService {
  async createUser(email, profileImageUrl) {
    try {
      const user = new User({ email, profileImageUrl });
      await user.save();
      return { ImageUrl:profileImageUrl,success: true, message: 'User created successfully!' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

module.exports = new UserService();
