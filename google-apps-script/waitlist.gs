// À coller dans l'éditeur Apps Script du Google Sheet (Extensions > Apps Script),
// puis déployer comme Web App. Voir README.md pour les étapes complètes.
//
// Ajoute une ligne [date, email] à l'onglet "Waitlist" (créé automatiquement
// s'il n'existe pas encore) chaque fois que la route /api/waitlist du site
// reçoit une inscription.
//
// On utilise doGet (email passé en paramètre d'URL) plutôt que doPost :
// script.google.com/.../exec répond par une redirection 302 vers
// script.googleusercontent.com, et un fetch() serveur (Node/undici, utilisé
// par Vercel) rétrograde automatiquement une requête POST en GET en suivant
// cette redirection — doPost ne recevait donc jamais le corps envoyé. GET
// n'a pas ce problème (GET redirigé reste GET), c'est pourquoi le site
// appelle cette URL avec ?email=... plutôt qu'un POST JSON.

function doGet(e) {
  return addEmailToSheet(e.parameter.email);
}

function addEmailToSheet(email) {
  var sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Waitlist") ||
    SpreadsheetApp.getActiveSpreadsheet().insertSheet("Waitlist");

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Date", "Email"]);
  }

  if (!email) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: "missing email" })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  sheet.appendRow([new Date(), email]);

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true })
  ).setMimeType(ContentService.MimeType.JSON);
}
