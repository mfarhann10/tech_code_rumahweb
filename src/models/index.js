import { Sequelize } from sequelize
import sequelize from "../config/db"

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user.model")(sequelize, Sequelize);

export default db