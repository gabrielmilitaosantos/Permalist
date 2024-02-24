import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client({
  host: "localhost", // Or your db external link.
  port: 5432, // Your port in db.
  database: "permalist", // Or any database name you prefer
  user: "", // Your username to access database.
  password: "" // Your password.
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// let items = [
//   { id: 1, title: "Buy milk" },
//   { id: 2, title: "Finish homework" },
// ];

let items = [];

async function checkItems() {
  const result = await db.query("SELECT * FROM items");
  items = result.rows;
  return items
}

app.get("/", async (req, res) => {
  try {
    await checkItems();
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  // items.push({ title: item });
  try {
    await db.query(
      "INSERT INTO items (title) VALUES ($1)",
      [item]
    );
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.post("/edit", async (req, res) => {
  const itemUpdatedId = req.body.updatedItemId;
  const newTitle = req.body.updatedItemTitle;

  try {
    await db.query(
      "UPDATE items SET title = $1 WHERE id = $2",
      [newTitle, itemUpdatedId]
    );
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.post("/delete", async (req, res) => {
  const deleteId = req.body.deleteItemId;

  try {
    await db.query(
      "DELETE from items WHERE id = $1",
      [deleteId]
    );
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
