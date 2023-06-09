const controller = require('../controllers/users');
const router = require('expresss').Router();

//  CRUD Routes users

router.get('/', controller.getUsers);
router.get('/:userId', controller.getUser);
router.post('/', contoller.createUser);
router.put('/:userId',controller.updateUser);
router.delete('/:userId', contoller.deleteUser);

module.exports = router;