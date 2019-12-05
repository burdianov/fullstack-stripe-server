const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    // 30 days in milliseconds
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.COOKIE_KEY]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`);
});
