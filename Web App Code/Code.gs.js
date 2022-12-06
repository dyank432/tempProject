// published for easy access in one location, working code can be seen 
// from https://script.google.com/home/projects/1yIVhSS_QQv8vr7efTWpClGjzTibrL9tEpi-ZvolkjkOjxkNpRkn_6n6e/edit

function doGet() {
  return HtmlService.createHtmlOutputFromFile('WebAppChart');
}

function getData()
{
  const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1"); 
  return ss.getRange(1,2, ss.getLastRow(), 2).getValues();
}
