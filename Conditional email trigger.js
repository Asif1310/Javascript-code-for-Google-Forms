function afterformsubmit(e){
  var formValues = e.namedValues;
  var html = '<table>';
  var keys = ['Timestamp','Question1', 'Question2', 'Question3']

for(key of keys){
 html += '<tr><td>' + key + "</td><td> " + formValues[key] + '</td>';
}
  if (formValues["QuestionwithOptions"] == "Yes") {
    GmailApp.sendEmail('emailaddress', 'subject', 'Not rendering HTML', {htmlBody: html,cc: "ccemail1,ccemail2"});
  };
}



