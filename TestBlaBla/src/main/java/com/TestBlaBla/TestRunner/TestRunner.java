package com.TestBlaBla.TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/features",
		glue= {"com/TestBlaBla/stepdefinitions"},
		plugin= {"pretty","html:target/cucumber-reports/cucumber-pretty",
				"json:target/cucumber-reports/CucumberTestReport.json",
				"rerun:target/cucmber-reports/rerun.txt"})
public class TestRunner {
	
	

}
