const router = require("express").Router();
const {
    contacts,
    addContact
} = require("../controllers/admin");
router.route("/contacts").get(contacts);
router.route("/addcontact").post(addContact);
module.exports = router;