const express = require("express");
const reportsController = require("../controllers/reportsController");
const router = express.Router();

router
  .route("/")
  .get(reportsController.get_reports)
  .post(reportsController.post_reports);

router.route("/down").get(reportsController.get_reports_which_are_down);

router
  .route("/:id")
  .get(reportsController.get_specific_report)
  .patch(reportsController.modify_report)
  .delete(reportsController.delete_report);

module.exports = router;
