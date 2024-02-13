import Sequelize from "sequelize";
import "dotenv/config";
const sequelize = new Sequelize(process.env.SQL_URL);
export default sequelize;
