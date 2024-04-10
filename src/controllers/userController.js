import { pool } from "../db.js";

export const renderUsers = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM users");
  res.render("users", { users: rows });
};

export const createUsers = async (req, res) => {
  const newUser= req.body;
  await pool.query("INSERT INTO users set ?", [newUser]);
  res.redirect("/");
};

export const editUser = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("SELECT * FROM users WHERE id = ?", [
    id,
  ]);
  res.render("users_edit", { user: result[0] });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const newUser = req.body;
  await pool.query("UPDATE users set ? WHERE id = ?", [newUser, id]);
  res.redirect("/");
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM users WHERE id = ?", [id]);
  if (result.affectedRows === 1) {
    res.json({ message: "User deleted" });
  }
  res.redirect("/");
};
