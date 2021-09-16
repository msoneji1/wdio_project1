const assert = require('assert');
const LoginPage = require('../pages/login.page');
const VotePage = require('../pages/vote.page');


describe('Vote Section Test Suite', () => {
    it('should increment vote', () => {
        browser.url('');
        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        let currentVotes1 = Number(VotePage.voteItemVal1.getText());

        // using the default x-men selection
        VotePage.submitButton.click();
        assert.equal(VotePage.voteItemVal1.getText(), currentVotes1 + 1, 'Vote count is not correct');
        assert.equal(VotePage.thanksAlert.isDisplayed(), true, 'Confirmation alert is not displayed');
        assert.equal(VotePage.thanksAlert.getText(), 'Thanks for voting!', 'Text for confirmation alert is not correct');

    })
})