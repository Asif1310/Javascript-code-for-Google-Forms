function thankyou(e){
   var formValues = e.namedValues;
   var emailadd = formValues['Email Address']; 
    GmailApp.sendEmail(emailadd, 'Thank you subject', 'Thank you body');
}