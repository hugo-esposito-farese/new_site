// À coller dans l'éditeur Apps Script du Google Sheet (Extensions > Apps Script),
// puis déployer comme Web App. Voir README.md pour les étapes complètes.
//
// Ajoute une ligne [date, email] à l'onglet "Waitlist" (créé automatiquement
// s'il n'existe pas encore) chaque fois que la route /api/waitlist du site
// reçoit une inscription.

function doPost(e) {
  var sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Waitlist") ||
    SpreadsheetApp.getActiveSpreadsheet().insertSheet("Waitlist");

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Date", "Email"]);
  }

  var data = JSON.parse(e.postData.contents);
  var email = data.email;

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
