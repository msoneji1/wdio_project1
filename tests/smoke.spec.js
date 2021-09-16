const assert= require('assert');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');
const IntroPage = require('../pages/intro.page');
const RosterPage = require('../pages/roster.page');
const VotePage = require('../pages/vote.page');


describe('Smoke Test Suite', () => {
    it('should verify static elements are present', () => {
        browser.url('');

        //verify login page
        assert.equal(LoginPage.headingText.isDisplayed(), true, 'LoginPage.headingText');
        assert.equal(LoginPage.emailLabel.isDisplayed(), true, LoginPage.emailField, 'LoginPage.emailLabel');
        assert.equal(LoginPage.emailField.isDisplayed(), true, 'LoginPage.emailField');

        assert.equal(LoginPage.passwordLabel.isDisplayed(), true, 'LoginPage.passwordLabel');
        assert.equal(LoginPage.passwordField.isDisplayed(), true, 'LoginPage.passwordField');

        assert.equal(LoginPage.rememberLoginCheckbox.isDisplayed(), true, 'LoginPage.rememberLoginCheckbox');
        assert.equal(LoginPage.rememberLoginLabel.isDisplayed(), true, 'LoginPage.rememberLoginLabel');
        assert.equal(LoginPage.submitButton.isDisplayed(), true, 'LoginPage.submitButton');

        
        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        //verify header
        assert.equal(HeaderPage.logoutLink.isDisplayed(), true, 'Headerpage.logoutLink');
        assert.equal(HeaderPage.linkLink.isDisplayed(), true, 'Headerpage.linkLink');

        assert.equal(HeaderPage.heroFactsLink.isDisplayed(), true, 'Headerpage.heroFactsLink');

        HeaderPage.heroFactsLink.click();

        assert.equal(HeaderPage.wolverineOption.isDisplayed(), true, 'Headerpage.wolverineOption');
        assert.equal(HeaderPage.spidermanOption.isDisplayed(), true, 'Headerpage.supermanOption');

        assert.equal(HeaderPage.searchField.isDisplayed(), true, 'Headerpage.searchField');
        assert.equal(HeaderPage.searchButton.isDisplayed(), true, 'Headerpage.searchButton');
  
        
        //verify intro
        assert.equal(IntroPage.titleText.isDisplayed(), true, 'IntroPage.titleText');
        assert.equal(IntroPage.mainImage.isDisplayed(), true, 'IntroPage.mainImage');

        //verify roster
        assert.equal(RosterPage.instructionsText.isDisplayed(), true, 'RosterPage.instructionsText');
        assert.equal(RosterPage.listTitle.isDisplayed(), true, 'RosterPage.listTitle');
        assert.equal(RosterPage.wolverineItem.isDisplayed(), true, 'RosterPage.wolverineItem');

        assert.equal(RosterPage.ironManItem.isDisplayed(), true, 'RosterPage.ironManItem');
        assert.equal(RosterPage.deadPoolItem.isDisplayed(), true, 'RosterPage.deadPoolItem');
        assert.equal(RosterPage.thorItem.isDisplayed(), true, 'RosterPage.');
        assert.equal(RosterPage.spidermanItem.isDisplayed(), true, 'RosterPage.spidermanItem');

        assert.equal(RosterPage.addHeroLabel.isDisplayed(), true, 'RosterPage.addHeroLabel');
        assert.equal(RosterPage.addHeroField.isDisplayed(), true, 'RosterPage.addHeroField');
        assert.equal(RosterPage.submitButton.isDisplayed(), true, 'RosterPage.submitButton');

        //verify vote section
        assert.equal(VotePage.voteTitle.isDisplayed(), true, 'VotePage.voteTitle');
        
        assert.equal(VotePage.voteItem1.isDisplayed(), true, 'VotePage.voteItem1');
        assert.equal(VotePage.voteItem2.isDisplayed(), true, 'VotePage.voteItem2');
        assert.equal(VotePage.voteItem3.isDisplayed(), true, 'VotePage.voteItem3');
        assert.equal(VotePage.voteItem4.isDisplayed(), true, 'VotePage.voteItem4');
        assert.equal(VotePage.voteItem5.isDisplayed(), true, 'VotePage.voteItem5');
        
        assert.equal(VotePage.voteItemLabel1.isDisplayed(), true, 'VotePage.voteItemLabel1');
        assert.equal(VotePage.voteItemLabel2.isDisplayed(), true, 'VotePage.voteItemLabel2');
        assert.equal(VotePage.voteItemLabel3.isDisplayed(), true, 'VotePage.voteItemLabel3');
        assert.equal(VotePage.voteItemLabel4.isDisplayed(), true, 'VotePage.voteItemLabel4');
        assert.equal(VotePage.voteItemLabel5.isDisplayed(), true, 'VotePage.voteItemLabel5');
        
        assert.equal(VotePage.submitButton.isDisplayed(), true, 'VotePage.submitButton');

        assert.equal(VotePage.voteItemText1.isDisplayed(), true, 'VotePage.voteItemText1');
        assert.equal(VotePage.voteItemVal1.isDisplayed(), true, 'VotePage.voteItemVal1');
        assert.equal(VotePage.voteItemText2.isDisplayed(), true, 'VotePage.voteItemText2');
        assert.equal(VotePage.voteItemVal2.isDisplayed(), true, 'VotePage.voteItemVal2');
        assert.equal(VotePage.voteItemText3.isDisplayed(), true, 'VotePage.voteItemText3');
        assert.equal(VotePage.voteItemVal3.isDisplayed(), true, 'VotePage.voteItemVal3');
        assert.equal(VotePage.voteItemText4.isDisplayed(), true, 'VotePage.voteItemText4');
        assert.equal(VotePage.voteItemVal4.isDisplayed(), true, 'VotePage.voteItemVal4');
        assert.equal(VotePage.voteItemText5.isDisplayed(), true, 'VotePage.voteItemText5');
        assert.equal(VotePage.voteItemVal5.isDisplayed(), true, 'VotePage.voteItemVal5');

    });
});