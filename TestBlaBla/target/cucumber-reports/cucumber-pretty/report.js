$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Title of your feature",
  "description": "In order to use the application features.",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "stepdefinition.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 9061316304,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Sign In with valid credential",
  "description": "",
  "id": "title-of-your-feature;sign-in-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "i enter password as \"pccmccpcc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "stepdefinition.i_enter_username_as(String)"
});
formatter.result({
  "duration": 135300233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pccmccpcc123",
      "offset": 21
    }
  ],
  "location": "stepdefinition.i_enter_password_as(String)"
});
formatter.result({
  "duration": 130359146,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.click_on_login_button()"
});
formatter.result({
  "duration": 3174676679,
  "status": "passed"
});
});