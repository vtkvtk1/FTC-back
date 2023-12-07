const Contacts = require("../models/Contact");
const asyncHandler = require("../middleware/async");

// @desc Renders admin client deposits page
// @access public
exports.contacts = asyncHandler(async(req, res, next) => {
    const contacts = await Contacts.find({});
    res.render("admin/contacts", { contacts });
});

// @desc Logs an admin in
// @access public
exports.addContact = asyncHandler(async(req, res, next) => {
    const {
        name,
        email,
        message,
      } = req.body;
      const contact = await Contacts.create({
        name,
        email,
        message,
      });
    res.send({ success: true });
});
