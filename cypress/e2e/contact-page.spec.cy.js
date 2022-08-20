/// <reference types="cypress-iframe" />
import "cypress-iframe"
import ContactPage from '../page-objects/contact.page'

const contactPage=new ContactPage()

describe('Contact Page Features Validation',() => {
    before(()=>{
        // cy.vist() is defined in support/commands.js file
        cy.getBaseURL('/contact')
        // cy.intercept('POST', '**/*google.com/recaptcha/**', { statusCode: 200, body: `["rresp","",null,null,null,""]` }).as("recaptchaINteract")
        // cy.wait(30000)

        cy.fixture('contact-test-data').then(function(data){
            //this keyword scope is entire class.
            // data object have whole json of example.json
            // this.data=data // is not working
            globalThis.data=data  //entirely new variable and available across globally
        })
    })

    it('ContactPage - Verify whether user is in Contact Page and validate title',{tags: ['@smoke','@regression']}, () => {
        // Verify title of the contact page
        contactPage.verify_title_text()

        // Not perfecting the actual image validation, just checking whether image is available
        contactPage.verify_founder_lightning_logo()

        // Verify whether url have /contact relative path
        cy.url().should('include','/contact')

    });

    it('ContactPage - Verify static or dynamic elements availability',{tags: ['@smoke','@regression']}, () => {
        // Verify Contact Us text
        contactPage.verify_contact_us_text()
        // Verify Whether you are founder para text
        contactPage.verify_whether_you_are_founder_para_text()
        // Verify exciting idea to share text
        contactPage.verify_exciting_idea_share_text()

        // Verify Static and dynamic elements like First Name, Last Name, etc
        contactPage.verify_placeholder_texts_labels_buttons()

        contactPage.click_send_message_button()

    });


    it('ContactPage - No information is passed and check for required field validation',{tags: ['@smoke','@regression']}, () => {
        contactPage.verify_execption_messages_for_required_fields()
    });

    it('Contact Page - Fill Form with valid Details and Send Message',{tags: ['@smoke','@regression']},()=>{
        // I have automated captcha with checkbox not a robot but haven't automated with image selection. I have tried with cypress.intercept() method with captcha API but no success.
        // tried appraoch is available in before() hook section.
        // For time being of this assignment, we have to wait for 60 to 120 seconds and manually select the image to validate the captcha.

        contactPage.enter_values_submit_contact_form(globalThis.data[0]['first_name'],globalThis.data[0]['last_name'],
                    globalThis.data[0]['email'],globalThis.data[0]['mobile_no'],globalThis.data[0]['hear_us_option'],globalThis.data[0]['message_text_area'])
    })

});
