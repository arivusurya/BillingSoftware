const controllers = {};

controllers.AddProduct = async (req, res) => {
  try {
    const {} = req?.body;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went Wrong" });
  }
};

module.exports = controllers;
