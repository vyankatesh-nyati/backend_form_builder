const Form = require("../model/form");

exports.createForm = (req, res) => {
  const formData = {
    title: req.body.title,
    questions: req.body.questions,
  };

  const newForm = new Form(formData);

  newForm
    .save()
    .then((createdForm) => {
      res.status(201).json({ id: createdForm._id });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "An error occurred while creating the form." });
    });
};

exports.getFormById = (req, res) => {
  const formId = req.params.id;

  Form.findById(formId)
    .then((foundForm) => {
      if (!foundForm) {
        return res.status(404).json({ error: "Form not found." });
      }
      res.status(200).json(foundForm);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching the form." });
    });
};
