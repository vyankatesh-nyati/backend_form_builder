const Response = require("../model/response");

exports.addNewResponse = async (req, res) => {
  const { formId, answers } = req.body;

  try {
    const exitsReponse = await Response.find({ formId: formId });
    if (exitsReponse.length == 0) {
      const newResponse = Response({
        formId: formId,
        responses: [
          {
            solution: answers,
          },
        ],
      });
      const result = await newResponse.save();
      res.status(200).json({
        data: result,
      });
    } else {
      exitsReponse[0].responses.push({
        solution: answers,
      });
      const result = await exitsReponse[0].save();
      res.status(200).json({
        data: result,
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the form." });
  }
};

exports.fetchAllReponse = async (req, res) => {
  try {
    const exitsReponse = await Response.find({});
    res.status(200).json({
      data: exitsReponse,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the form." });
  }
};
