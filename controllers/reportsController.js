const Reports = require("../models/reportsModel");

exports.get_reports = async (req, res, next) => {
  try {
    const reports = await Reports.find({ status: "up" });
    res.status(200).json({
      data: reports,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

exports.post_reports = async (req, res, next) => {
  try {
    const created_report = await Reports.create(req.body);

    res.status(201).json({
      data: created_report,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

exports.get_reports_which_are_down = async (req, res, next) => {
    try {
      const reports = await Reports.find({ status: "down" });
      res.status(200).json({
        data: reports,
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  };

exports.get_specific_report = async (req, res, next) => {
  try {
    const specific_report = await Reports.findById(req.params.id);
    res.status(200).json({
      data: specific_report,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

exports.modify_report = async (req, res, next) => {
  try {
    const modified_report = await Reports.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(204).json({
      data: modified_report,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

exports.delete_report = async (req, res, next) => {
  try {
    const delete_report = await Reports.findByIdAndDelete(req.params.id);

    res.status(204).json({
      //200 will return the deleted report, 204 will return nothing
      data: delete_report,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};
