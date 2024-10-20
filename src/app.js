import express from "express";
import routes from "./src/routes/routes.js";
import connection from "./connection/connection.js";
// import User from "./models/User.js";
// import Role from "./models/Role.js";

const app = express();

// con estos middleware vamos a recibir lo que nos envien por formulario o js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/app", routes);

app.use((req, res, next) => {
  res.status(404).send({
    success: false,
    message: "not found",
  });
});

await connection.sync({force:false})

// Utiliza las rutas de usuarios
app.use("/api/users", userRoutes); // Asegúrate de que la ruta base coincida

app.listen(8000, () => {
  console.log(`🚀 ~ app.listen ~ localhost:8000`);
});
