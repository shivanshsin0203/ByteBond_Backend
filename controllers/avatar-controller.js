const userService = require('../services/avatar-service');

class UserController {
  async uploadProfileImage(req, res) {
    const { email } = req.body;
    const profileImageUrl = req.file.path;

    const result = await userService.createUser(email, profileImageUrl);
      
    if (result.success) {
      return res.json({ ImageUrl:result.ImageUrl, message: result.message });
    } else {
      return res.status(500).json({ error: result.error });
    }
  }
  async getAllUsers(req, res) {
    const result = await userService.getAllUsers();
    if (result.success) {
      return res.json(result.data);
    } else {
      return res.status(500).json({ error: result.error });
    }
  }
}

module.exports = new UserController();
