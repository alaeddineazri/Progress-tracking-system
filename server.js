//node-express
const express = require("express");
const  app = express();
//mongoose
const mongoose = require("mongoose"); 
const morgan = require("morgan"); 
const bodyParser = require("body-parser"); 
const cookieParser = require("cookie-parser"); //to read cookies
const expressValidator = require("express-validator"); //to validate data
const cors = require('cors');

//.env
require('dotenv').config();


//import routes
const projectRoutes = require("./routes/project");
const taskRoutes = require("./routes/task");
const milestonesRoutes = require("./routes/milestone");
const taskMilestoneRoutes = require("./routes/taskMilestone");



//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());
//routes middleware
app.use("/api", projectRoutes);
app.use("/api", taskRoutes);
app.use("/api", milestonesRoutes);
app.use("/api", taskMilestoneRoutes);





//connect to mongodb
    mongoose
  .connect(process.env.MONGODB_URI, {
    autoIndex: true,
  })
  .then(() => {
    console.log("connected to mongoDB ");
  })
  .catch((err) => {
    console.log(err);
  });






const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);