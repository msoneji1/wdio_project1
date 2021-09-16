const assert = require('assert');

const LoginPage = require('../pages/login.page');

const { emailField, passwordField } = require('../pages/login.page');

const HeaderPage = require('../pages/header.page');


describe('Login Test Suite', () => {
    it('should display error when pwd is missing', () => {
        browser.url('');
        LoginPage.emailField.setValue('test@test.com');
        LoginPage.submitButton.click();
        
        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), 'Please enter an email and password', 'Alert text is not correct');

        browser.acceptAlert();

        assert.equal(browser.isAlertOpen(), false, 'Alert is still open');

    });
    it('should display error when email is missing', () => {
        browser.url('');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), 'Please enter an email and password', 'Alert text is not correct');

        browser.acceptAlert();
        assert.equal(browser.isAlertOpen(), false, 'Alert is still open');

    });
    it('should display error when email and password are missing', () => {
        browser.url('');
        LoginPage.submitButton.click();

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), 'Please enter an email and password', 'Alert text is not correct');

        browser.acceptAlert();
        

        assert.equal(browser.isAlertOpen(), false, 'Alert is still open');       
    });
    it('should display error when email is incorrect', () => {
        browser.url('');
        LoginPage.emailField.setValue('3@4.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), "Invalid email and password", 'Alert text is not correct');


        browser.acceptAlert();

        assert.equal(browser.isAlertOpen(), false, 'Alert is still open');

    });
    it('should display error when password is incorrect', () => {
        browser.url('');
        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('pass');
        LoginPage.submitButton.click();

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), 'Invalid email and password', 'Alert text is not correct');

        browser.acceptAlert();
        assert.equal(browser.isAlertOpen(), false, 'Alert is still open');

    });
    it('should display error when password case is incorrect', () => {
        browser.url('');
        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('Password');
        LoginPage.submitButton.click();

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), 'Invalid email and password', 'Alert text is not correct');

        browser.acceptAlert();
        assert.equal(browser.isAlertOpen(), false, 'Alert is still open');

    });
    it('should login with valid email and password', () => {
        browser.url('');
        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        assert.equal(LoginPage.overlay.isDisplayed(), false, 'Overlay is still displayed');

    });
    it('should remember login credentials', () => {
        browser.url('');
        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.rememberLoginCheckbox.click();
        LoginPage.submitButton.click();

        assert.equal(LoginPage.overlay.isDisplayed(), false, 'Overlay is still displayed');

        HeaderPage.logoutLink.click();

        assert.equal(LoginPage.overlay.isDisplayed(), true, 'Overlay is not displayed');

        assert.equal(LoginPage.emailField.getValue(), '1@2.com', 'Correct email is not in field');
        assert.equal(LoginPage.passwordField.getValue().length, 8, 'Pwd in field is incorrect length'); 
        assert.equal(LoginPage.rememberLoginCheckbox.isSelected(), true, 'Checkbox is not selected');
    });
    it('should not remember login credentials', () => {
        browser.url('');
        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');

        LoginPage.submitButton.click();

        assert.equal(LoginPage.overlay.isDisplayed(), false, 'Overlay is still displayed');

        HeaderPage.logoutLink.click();

        assert.equal(LoginPage.overlay.isDisplayed(), true, 'Overlay is not displayed');

        assert.equal(LoginPage.emailField.getValue(), '', 'Email is displaying in email field');
        assert.equal(LoginPage.passwordField.getValue.length, 0, 'Pwd is displaying in password field');
        assert.equal(LoginPage.rememberLoginCheckbox.isSelected(), false, 'Checkbox is selected');
    });
});