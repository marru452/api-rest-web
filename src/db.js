const sqlite3 = require('sqlite3').verbose();
const { color } = require('../lib/color');

// Abre la base de datos
const db = new sqlite3.Database('./mydb.sqlite3', (err) => {
  if (err) {
    console.error(color('Error connecting to SQLite:', 'red'), err.message);
  } else {
    console.log(color('Connected to the SQLite database.', 'green'));
  }
});

// Crea una tabla
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS user (name TEXT, age INTEGER, email TEXT)', (err) => {
    if (err) {
      console.error(color('Error creating table:', 'red'), err.message);
    }
  });

  // Inserta un registro
  const stmt = db.prepare('INSERT INTO user VALUES (?, ?, ?)');
  stmt.run('John Doe', 30, 'john@example.com', (err) => {
    if (err) {
      console.error(color('Error inserting record:', 'red'), err.message);
    } else {
      console.log(color('Record inserted:', 'green'));
    }
  });
  stmt.finalize();

  // Lee los registros
  db.each('SELECT name, age, email FROM user', (err, row) => {
    if (err) {
      console.error(color('Error reading records:', 'red'), err.message);
    } else {
      console.log(row);
    }
  });
});

// Cierra la base de datos
db.close((err) => {
  if (err) {
    console.error(color('Error closing SQLite:', 'red'), err.message);
  } else {
    console.log(color('Closed the SQLite database.', 'green'));
  }
});






