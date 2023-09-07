const express = require('express');
const sequelize = require("./config/database");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const userRoutes = require("./routes/userRoutes")
const menuLinksRoutes = require("./routes/menuLinksRoutes")
const FoodMenuCategoryRoutes = require("./routes/FoodMenuCategoryRoutes")
const FoodMenuItemsRoutes = require("./routes/FoodMenuItemsRoutes")
const CustomerRoutes = require("./routes/CustomerRoutes")
const ItemSalesRoutes = require("./routes/ItemSalesRoutes")
const OrderRoutes = require("./routes/OrderRoutes");
const SalesSummaryRoutes = require("./routes/SalesSummaryRoutes");
const TableRoutes = require("./routes/TableRoutes")

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/users", userRoutes)
app.use("/api/menuLinks", menuLinksRoutes)
app.use("/api/foodMenuCategories", FoodMenuCategoryRoutes)
app.use("/api/foodMenuItems", FoodMenuItemsRoutes)
app.use("/api/customers", CustomerRoutes)
app.use("/api/itemSales", ItemSalesRoutes)
app.use("/api/orders", OrderRoutes)
app.use("/api/salesSummary", SalesSummaryRoutes)
app.use("/api/table", TableRoutes)


sequelize.authenticate().then(() => {
    app.listen(PORT, () => {
        console.log("Connected & Running on " + PORT)
    })
}).catch(err => {
    throw err;
})