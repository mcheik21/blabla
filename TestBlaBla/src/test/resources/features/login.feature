@Login
Feature: Title of your feature
	In order to use the application features.

Background: User navigates to Application URL
	Given I am on the Login page URL "http://localhost:8888/index.php?"
	

@sanity
Scenario: Sign In with valid credential
	When I enter username as "admin"
	And i enter password as "pccmccpcc123"
	And  click on login button