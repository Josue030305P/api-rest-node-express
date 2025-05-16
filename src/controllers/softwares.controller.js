import { pool } from "../db.js";

export const getSoftwareById = async (req, res) => {
  try {
    const querySQL = "SELECT * FROM softwares WHERE id = ?";
    const { id } = req.params;
    const [results] = await pool.query(querySQL, [id]);
    if (results.length === 0) {
      return res.status(404).json({
        status: false,
        message: "Software no encontrado",
      });
    }
    res.send(results[0]);
  } catch (error) {
    console.error(error);
  }
};

export const getSoftwares = async (req, res) => {
  try {
    const querySQL = "SELECT * FROM softwares";
    const [results] = await pool.query(querySQL);
    res.send(results);
  } catch (error) {
    console.error(error);
  }
};

export const createSoftwares = async (req, res) => {
  try {
    const querySQL =
      "INSERT INTO softwares(nombre,espaciomb,versionsoft, precio) VALUES(?,?,?,?)";
    const { nombre, espaciomb, versionsoft, precio } = req.body;

    const [results] = await pool.query(querySQL, [
      nombre,
      espaciomb,
      versionsoft,
      precio,
    ]);

    if (results.affectedRows === 0) {
      res.json({ status: false, message: "Error al crear el software" });
    } else {
      res.json({
        status: true,
        message: "Software creado correctamente",
        id: results.insertId,
      });
    }
    res.send(results);
  } catch (error) {
    console.error(error);
  }
};

export const updateSoftwares = async (req, res) => {
  try {
    const querySQL =
      "UPDATE softwares SET nombre = ?, espaciomb = ?, versionsoft = ?, precio = ? WHERE id = ?";
    const { id } = req.params;
    const { nombre, espaciomb, versionsoft, precio } = req.body;

    const [results] = await pool.query(querySQL, [
      nombre,
      espaciomb,
      versionsoft,
      precio,
      id,
    ]);

    if (results.affectedRows === 0) {
      return res.status(404).json({
        status: false,
        message: "Software no encontrado",
      });
    } else {
      return res.send({
        status: true,
        message: "Software actualizado correctamente",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteSoftwares = async (req, res) => {
  try {
    const querySQL = "DELETE FROM softwares WHERE id = ?";

    const { id } = req.params;

    const [results] = await pool.query(querySQL, [id]);

    if (results.affectedRows === 0) {
      return res.status(404).json({
        status: false,
        message: "Software no encontrado / ID no valido",
      });
    } else {
      res.send({
        status: true,
        message: "Software eliminado correctamente",
      });
    }
  } catch (error) {
    console.error(error);
  }
};
