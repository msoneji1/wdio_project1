const assert = require('assert');
const LoginPage = require('../pages/login.page');
const IntroPage = require('../pages/intro.page');

describe('Intro Page Test Suite', () => {
    it('should display correct title', () => {
        browser.url('');
        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        assert.equal(IntroPage.titleText.getText(), 'Superhero Roster', 'title text is not correct');

    })
    it('should display correct image', () => {
        browser.url('');
        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        assert.equal(IntroPage.mainImage.getAttribute('src'), './images/superhero.png', 'image source is not correct');
        assert.equal(IntroPage.mainImage.getAttribute('src'), './images/superhero.png', 'image source is not correct');
        assert.equal(IntroPage.mainImage.getAttribute('alt'), 'Superhero Image', 'image alt text is not correct');
    })
})