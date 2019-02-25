package com.TestBlaBla.stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepdefinition {
	
	
	WebDriver driver;
	
	@Given("^I am on the Login page URL \"(.*?)\"$")
	public void i_am_on_the_Login_page_URL(String arg1) throws Throwable {
	    
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Ali.Mcheik\\Downloads\\chromedriver_win32\\chromedriver.exe");
		
		driver= new ChromeDriver();
		driver.get(arg1);
		driver.manage().window().maximize();
		
		
	}

	

	@When("^I enter username as \"(.*?)\"$")
	public void i_enter_username_as(String arg1) throws Throwable {
		
		driver.findElement(By.xpath("//input[@name='user_name']")).sendKeys(arg1);
	   
	}

	@When("^i enter password as \"(.*?)\"$")
	public void i_enter_password_as(String arg1) throws Throwable {
		driver.findElement(By.xpath("//input[@type='password']")).sendKeys(arg1);
	  
	}

	@When("^click on login button$")
	public void click_on_login_button() throws Throwable {
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	    
	}

}
