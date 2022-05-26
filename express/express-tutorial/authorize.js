const authorize = (req, res, next) => {
  if (user === "louis") {
    req.user = { name: "admin", id: 3 };
    console.log("Authorized");
    next(); // go to the next middleware
  } else {
    res.status(401).send("Unauthorized");
  }
};

const authorize2 = (req, res, next) => {
  const { name } = req.body;
  if (name === "louis") {
    req.user = { name: "admin" };
    next();
  } else {
    res.status(401).json({
      status: "unauthorized",
      message: "Who the heck are you!",
    });
  }
};

module.exports = { authorize, authorize2 };
