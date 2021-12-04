const express = require("express");
const app = express();
const cors = require("cors");
const port = 3003;
const mysql = require("mysql");

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "domino",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

//Route
app.get("/", (req, res) => {
  res.send("Ate");
});

app.get("/labas", (req, res) => {
  res.send("Sveikutis, Zuikutis");
});

app.get("/labas/jonai", (req, res) => {
  res.send("Sveikutis, jonai");
});

app.get("/labas/:vardas", (req, res) => {
  res.send(`Sveikutis arba Sveikutė, ${req.params.vardas}`);
});

app.get("/sum/:d1/:d2", (req, res) => {
  res.send(`Atsakymas: ${parseInt(req.params.d1) + parseInt(req.params.d2)}`);
});

app.get("/diff/:d1/:d2", (req, res) => {
  res.send(`Atsakymas: ${parseInt(req.params.d1) - parseInt(req.params.d2)}`);
});

// app.post('/calculator', (req, res) => {
//     const d1 = parseFloat(req.body.d1);
//     const d2 = parseFloat(req.body.d2);
//     let answer;
//     let errMsg;
//     switch (req.body.action) {
//         case '+':
//             answer = d1 + d2;
//             break;
//         case '-':
//             answer = d1 - d2;
//             break;
//         case 'X':
//             answer = d1 * d2;
//             break;
//         case '/':
//             if (0 === d2) {
//                 errMsg = 'No way';
//             } else {
//                 answer = d1 / d2;
//             }
//             break;
//         default:
//             errMsg = 'WTF?';
//     }
//     res.json({
//         answer: answer,
//         errMsg: errMsg
//     })
// })

app.post("/dominos/add", (req, res) => {
  const sql = `
        INSERT INTO
        dices
        (left_side, right_side)
        VALUES (?, ?)
    `;
  con.query(sql, [req.body.left, req.body.right], (err) => {
    if (err) throw err;
    console.log("1 record inserted");
  });
  res.json({
    msg: "OKi",
  });
});

app.get("/dominos", (req, res) => {
  const sql = `
        SELECT * 
        FROM dices
    `;
  con.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      msg: "OK",
      dominos: result,
    });
  });
});

app.put("/dominos/update/:id", (req, res) => {
  const sql = `
      UPDATE dices
SET left_side = ?, right_side=?
WHERE id=? 
    `;
  con.query(sql, [req.body.left, req.body.right, req.params.id], (err) => {
    if (err) throw err;
    console.log("1 record updated");
  });
  res.json({
    msg: "OKi",
  });
});

app.delete("/dominos/delete/:id", (req, res) => {
  const sql = `
        DELETE FROM dices
    WHERE id=? 
      `;
  con.query(sql, [req.params.id], (err) => {
    if (err) throw err;
    console.log("1 record DELETED");
  });
  res.json({
    msg: "OKi",
  });
});

app.get("/dominos/sort/:sort", (req, res) => {
  let sql = `
              SELECT * 
              FROM dices

          `;
  let orderSQL = "";
  switch (req.params.sort) {
    case "LA":
      orderSQL = "ORDER BY left_side ASC";
      break;
    case "LD":
      orderSQL = "ORDER BY left_side DESC";
      break;
    case "RA":
      orderSQL = "ORDER BY right_side ASC";
      break;
    case "RD":
      orderSQL = "ORDER BY right_side DESC";
      break;
    case "BA":
      orderSQL = "ORDER BY (left_side+right_side) ASC";
      break;
    case "BD":
      orderSQL = "ORDER BY (left_side+right_side) DESC";
      break;
    default:
  }
  sql+=orderSQL;

  con.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      msg: "OK",
      dominos: result,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
