/// <reference types="Cypress" />

Cypress.config().waitForAnimations = true

import {parametersAccountManager} from '../fixtures/parameters.js' 

// local urls for scripts
const registerURL = parametersAccountManager.formURL + 
"/register.html";
const loginURL = parametersAccountManager.formURL + 
"/index.html";
const loggedURL = parametersAccountManager.formURL + 
"/login.html";

// local method to check if URL is correct

const confirmURL = (url) => {
    cy.location().should(($loc=>{
        expect($loc.href).to.eq(url)
    }))
}

//main part of test script

describe('Form verification', ()=> {
    it('should open app', ()=>{
        cy.visit(parametersAccountManager.formURL)
    })
    it('should check UI elements of form', ()=>{
       // cy.verifyForm()
    })
})

