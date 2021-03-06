// spec.js
describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    //returns an Element Array Finder
    var history = element.all(by.repeater('result in memory'));
  
    function add(a, b) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
      }

    //runs before each it
    beforeEach(function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
    });
  
    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator');
      });
      
    it('should read the value from an input', function() {
        firstNumber.sendKeys(1);
        expect(firstNumber.getAttribute('value')).toEqual('1');
    });
  
    it('should add one and two', function() {
      firstNumber.sendKeys(1);
      secondNumber.sendKeys(2);
  
      goButton.click();
  
      expect(latestResult.getText()).toEqual('3');
    });
  
    it('should add four and six', function() {
        add(4,6);

      expect(latestResult.getText()).toEqual('10');
    });
    it('should have a history', function() {
        add(1, 2);
        add(3, 4);
    
        expect(history.count()).toEqual(2);
    
        add(5, 6);
    
        expect(history.count()).toEqual(0); // This is wrong!
      });
 
  });