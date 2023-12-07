const router = require("express").Router();
const {
    contacts,
    addContact
} = require("../controllers/admin");
router.route("/clientdeposits").get(contacts);
router.route("/addcontact").post(addContact);
module.exports = router;