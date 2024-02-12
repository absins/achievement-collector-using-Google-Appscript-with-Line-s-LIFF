var Ach = "";

function onFormSubmit(e) {

  var formResponse = e.response;
  var itemResponses = formResponse.getItemResponses();
  var token = itemResponses[0].getResponse();  // returns a string
  var achievement = itemResponses[1].getResponse();
  var gg = SpreadsheetApp.openById(Ach);
  var sheet = gg.getSheetByName("Form Responses 1");
  var data = sheet.getDataRange();


  var user = sheet.createTextFinder(token).matchEntireCell(true).findNext().getRowIndex();

  data.getCell(user,+achievement+4).setValue(1);
  
}
