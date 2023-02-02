# SimpleProtractorTest
Simple Protractor test to get started!

# Prerequisites

1. Protractor is a Node.js program, so Node.js should be installed.	

2. Download protractor package using npm .		
    
    The below command will install two command line tools, protractor and webdriver-manager	
    
    > npm install -g protractor 
			
    > protractor --version #verify if protractor is installed
    
3. Check Node.js version by running 

    >node--version
    
4. Protractor uses Jasmine test framework. Jasmine v2.4 is used here.

5.The test runs using a local stanalone Selenium Server to control browsers.	
		
  >webdriver-manager update #downloads the necessary libraries
    
6. Java Development Kit (JDK) should be installed. 
		
    >java -version #To check if java is installed.

# Steps to run the project 

1. If the project is opened after long time then update the chromedriver, run the below command 
in the cmd prompt. Also update chrome browser to latest version.

	> webdriver-manager update --chromedriver

2. Start the Standalone Webdriver before running protractor spec file

	 > webdriver-manager start

3. Open project in VSCode. In terminal, run the spec file using below command

	> protractor conf.js
	#only one spec file is configured in the conf.js, if multiple spec files are created conf.js should be updated.
	
Note: Browser version should be same as Driver version, otherwise leads to errors
	
# Some useful commands 

1.To create a file in project directory

	  echo> spec.js

2.Jasmine reporter install 

	  > npm install jasmine-spec-reporter --save-dev

3.ALLURE COMMAND LINE

	  >npm install allure-commandline --save-dev

4.GENERATE ALLURE REPORTS

	  >allure generate allure-results --clean -o allure-report

5.OPEN THE REPORTS

	  >allure open

6.For non angular applications use configuration,

  browser.ignoreSynchronization = true;
  
  
		
