function doGet(e) {
  // Updating User Id between 1-2 AM
  var dd = new Date().getUTCHours();
  if(dd==18){
    return HtmlService.createHtmlOutputFromFile('Outofservice');
  }

  // Check if user get in by main link or another way
  if(!e.parameters.LineId){
    return HtmlService.createHtmlOutputFromFile('wrong');
  }

  //Select if user need to register or can go to main page directly
      return decision(e.parameters['LineId'][0]);
}

function decision(hash){
  var ss= SpreadsheetApp.openById('1mN6gqee83e3D_ukk7Un8a9ribGxQu9vPnkGqkpHCwbc');
  var IdSheet = ss.getSheetByName('IdSheet');
  var IdLastRow = IdSheet.getLastRow();
  var IdRange = IdSheet.getRange(2, 1, IdLastRow-1, 2);
  if (IdRange.createTextFinder(hash).matchEntireCell(true).findNext()==null){
    return HtmlService.createHtmlOutputFromFile('Register');
  }
  else{
    return HtmlService.createHtmlOutputFromFile('Main');
  }
}

function getRemainQuota(){
  console.log(MailApp.getRemainingDailyQuota());
  return 0;
}


function getScriptUrl() {
  //var url = ScriptApp.getService().getUrl();
  return ScriptApp.getService().getUrl();
}

function sendVeriEmail(Array){
  var StudentId = Array['StudentId'][0];
  var VeriCode = Array['VeriCode'][0];

  MailApp.sendEmail(
    {
    to: StudentId + "@student.chula.ac.th",
    subject: "Verification Code",
    htmlBody: VeriCode
    }
  );
  return 'Success';
}

function registerLineId(Id){
  //StudentId = 'student1';
  var LineId = Id['LineId'][0];
  var StudentId = Id['StudentId'][0];
  var ss= SpreadsheetApp.openById('1mN6gqee83e3D_ukk7Un8a9ribGxQu9vPnkGqkpHCwbc');
  var IdSheet = ss.getSheetByName('IdSheet');
  var IdLastRow = IdSheet.getLastRow();
  var IdRange = IdSheet.getRange(2, 1, IdLastRow-1, 2);
  var found = IdRange.createTextFinder(StudentId).matchEntireCell(true).findNext();
  console.log(found.getRow());
  var WorkingCell = IdSheet.getRange(found.getRow(), 2, 1, 1);
  
  WorkingCell.setValue(LineId);
  
  return 'add success';


}

function getdata(LineId){
  //StudentId = 'student1';
  //var Id = {"LineId" : ['6035018930']};
  //LineId = 'ggg';
  var ss= SpreadsheetApp.openById('1mN6gqee83e3D_ukk7Un8a9ribGxQu9vPnkGqkpHCwbc');
  var IdSheet = ss.getSheetByName('IdSheet');
  var dd= SpreadsheetApp.openById('14qh_n3MNNP4cdbddef14gTwH-Ns_WjoQ6qb6jIsK3ss');
  var database = dd.getSheetByName('individual');
  var IdLastRow = IdSheet.getLastRow();
  var dataLastRow = database.getLastRow();
  var IdRange = IdSheet.getRange(2, 1, IdLastRow-1, 2);
  var searchRange = database.getRange(2, 1, dataLastRow-1, 1);
  var found = IdRange.createTextFinder(LineId).matchEntireCell(true).findNext();
  console.log(found.getRow());
  var WorkingCell = IdSheet.getRange(found.getRow(), 1, 1, 1);
  var StudentId = WorkingCell.getValue();
  console.log(StudentId);
  var foundagain = searchRange.createTextFinder(StudentId).matchEntireCell(true).findNext();
  var dataRange = database.getRange(foundagain.getRow(), 1, 1, 36);
  var name = database.getRange(1, 1, 1, 36);
  var array = [name.getValues()[0], dataRange.getValues()[0]];
  for (a=0; a<37; a++){
    if (array[1][a]==''){array[1][a]=0}
  }
  console.log(array);
  
  return array;
}

