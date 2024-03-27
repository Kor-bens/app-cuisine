const fs = require('fs');

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomString;
}

const randomString = generateRandomString(32);

// Lire le fichier .env
fs.readFile('.env', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  // Mettre à jour la variable JWT_SECRET dans le fichier .env
  const updatedData = data.replace(/JWT_SECRET=.*/, `JWT_SECRET=${randomString}`);
  
  // Écrire les modifications dans le fichier .env
  fs.writeFile('.env', updatedData, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('La variable JWT_SECRET a été mise à jour avec succès.');
  });
});