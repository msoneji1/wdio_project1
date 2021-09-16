const assert = require('assert');

const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');


describe('Header Test Suite', () => {
    it('should redirect to dif site', () => {
        browser.url('');
        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        HeaderPage.linkLink.click();

        assert.equal(browser.getUrl(), 'https://glitchitsystem.com/', 'Did not go to the dif site');


    } );
    it('should open wolverine modal', () => {
        browser.url('/');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        HeaderPage.heroFactsLink.click();
        HeaderPage.wolverineOption.click();

        browser.pause(3000);

        assert.equal(HeaderPage.wolvModalWindow.isDisplayed(), true, 'Wolverine modal is not displaying');
        assert.equal(HeaderPage.wolvModalTitleText.getText(), 'Wolverine Fact', 'modal header text is not correct');
        assert.equal(HeaderPage.wolvModalContentText.getText(), 'Wolverine made his first comic book appearance in 1974.', 'modal content is not correct');


    });
    it('should close wolverine modal', () => {
        browser.url('/');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        HeaderPage.heroFactsLink.click();
        HeaderPage.wolverineOption.click();

        browser.pause(1000);
      
        assert.equal(HeaderPage.wolvModalWindow.isDisplayed(), true, 'Wolverine modal is not displaying');
        
        HeaderPage.wolvModalCloseButton.click();

        browser.pause(1000);
        
        assert.equal(HeaderPage.wolvModalWindow.isDisplayed(), false, 'Wolverine modal is still displaying');


});

it('should open spider-man modal', () => {
    browser.url('/');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    HeaderPage.heroFactsLink.click();
    HeaderPage.spidermanOption.click();

    browser.pause(3000);
    
    assert.equal(HeaderPage.spidModalWindow.isDisplayed(), true, 'Spider-man modal is not displaying');
    assert.equal(HeaderPage.spidModalTitleText.getText(), 'Spider-Man Fact', 'modal header text is not correct');
    assert.equal(HeaderPage.spidModalContentText.getText(), 'Spider-man was created by Stan Lee and Steve Ditko and first appeared in 1962.', 'modal content is not correct');

});
it('should close spider-man modal', () => {
    browser.url('/');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    HeaderPage.heroFactsLink.click();
    HeaderPage.spidermanOption.click();
    
    browser.pause(1000);

    assert.equal(HeaderPage.spidModalWindow.isDisplayed(), true, 'Spider-man modal is not displaying');
    
    HeaderPage.spidModalCloseButton.click();

    browser.pause(1000);

    assert.equal(HeaderPage.spidModalWindow.isDisplayed(), false, 'Spider-man modal is still displaying');

});
it('should search for wolverine', () => {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    HeaderPage.searchField.setValue('wolverine');
    HeaderPage.searchButton.click();

    assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(browser.getAlertText(), 'Wolverine is awesome!', 'Alert text is not correct');

});
it('should give descriptive msg for search with no results', () => {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    HeaderPage.searchField.setValue('something');
    HeaderPage.searchButton.click();

    assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(browser.getAlertText(), 'Your search for something returned 0 reults. Try something else.', 'Alert text is not correct');

});
it('should close alert', () => {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    HeaderPage.searchField.setValue('something');
    HeaderPage.searchButton.click();

    assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
    browser.acceptAlert();

    assert.equal(browser.isAlertOpen(), false, 'Alert is still open');

});


});