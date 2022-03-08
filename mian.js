var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validator() {
  var data = {};
  var errors = {};
  // fullname
  if (fullname.value) {
    data.fullname = fullname.value;
  } else {
    errors.fn = "Full name is missing";
  }
  // email
  if (email.value && reg.test(email.value)) {
    data.email = email.value;
  } else if (email.value && !reg.test(email.value)) {
    errors.em = "Email is format error";
  } else {
    errors.em = "Email is missing";
  }
  // message
  if (message.value) {
    data.message = message.value;
  } else {
    errors.message = "Message is missing";
  }
  if(JSON.stringify(errors)!="{}"){
    console.log("ERRORS", errors);
  }else if(JSON.stringify(data)!="{}"){
    console.log("COLLECTED DATA", data);
    fullname.value = "";
    email.value = "";
    message.value = "";
    alert(JSON.stringify(data));
  }
}