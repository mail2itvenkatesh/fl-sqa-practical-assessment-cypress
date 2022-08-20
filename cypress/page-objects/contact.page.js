/// <reference types="Cypress" />

import ContactPageLocators from '../locators/contactPage.locators'

class ContactPage{

    // constructor(){
    //     this.checkOutButtonLocator = '#navbarResponsive > .navbar-nav > .nav-item > .nav-link'
    // }

    // cy.get('.home-redirect.redbus-logo').should('have.text','redbus')

    // Getting the text(text property) of the element using jQuery method
    // cy.get('.home-redirect.redbus-logo').invoke('text').then((text) => {
    //     cy.log(text)
    // })

    // using contains() method
    // cy.contains('redbus').should('have.text', 'redbus')
    
    // To verify title text
    verify_title_text(){
        const fecthed_det = ContactPageLocators.contact_page_title()
        cy.title().should('eq', fecthed_det.textToVerify)
    }

    // To verify Founder and Lightning Logo
    verify_founder_lightning_logo(){
        cy.get(ContactPageLocators.founder_lightning_logo()).should('be.visible')
        cy.get(ContactPageLocators.founder_lightning_logo()).should('have.attr', 'src').should('include','logo-black.svg')
    }

    // To verify CONTACT US Text
    verify_contact_us_text(){
        let updated_array = []
        const fecthed_det = ContactPageLocators.contact_us_text()
        cy.get(fecthed_det.locator).then((txt) => {
            txt.text().trim().replace('\n', "").replace(' ','').split('\n').forEach((ele)=> {
                updated_array.push(ele.trim().toUpperCase())
            })
            cy.log(`updated joined array is ${updated_array.join(" ")}`)
            expect(fecthed_det.textToVerify).equals(`${updated_array.join(" ")}`)
        })
    }

    // To verify text - Whether you’re a would-be founder, our next superstar looking for a future role, or an investor interested in our model, we’d love to meet you.
    verify_whether_you_are_founder_para_text(){
        const fecthed_det = ContactPageLocators.whether_you_are_founder_para_text()
        cy.get(fecthed_det.locator).invoke('text').then((txt)=>{
            cy.log(txt.trim())
            expect(fecthed_det.textToVerify).equals(txt.trim())
        })
    }

    // To verify - EXCITING IDEA text..
    verify_exciting_idea_share_text(){
        
        const fecthed_det = ContactPageLocators.exciting_idea_share_text()
        cy.get(fecthed_det.locator).should('have.length',4).each(($el,index,$list)=> {
            if (index === 0 || index === 1 || index === 3){
                expect(fecthed_det.textToVerify[index]).equals($el.text().trim().toUpperCase())
            }
            else{
                expect(fecthed_det.textToVerify[index]).equals($el.text().trim())
            }
        })
    }

    //Click Send Message Button
    click_send_message_button(){
        const send_message_button_info = ContactPageLocators.send_message_button()
        cy.get(send_message_button_info.locator).click({force:true})
    }

    // Fill form data with necessary details
    enter_values_submit_contact_form(first_name, last_name, email, mobile_no, hear_us_option,message_text_area){
        const first_name_text_field_info = ContactPageLocators.first_name_text_field()
        cy.get(first_name_text_field_info.locator).type(first_name)
    
        const last_name_text_field_info = ContactPageLocators.last_name_text_field()
        cy.get(last_name_text_field_info.locator).type(last_name)

        const email_text_field_info = ContactPageLocators.email_text_field()
        cy.get(email_text_field_info.locator).type(email)

        const mobile_phone_text_field_info = ContactPageLocators.mobile_phone_text_field()
        cy.get(mobile_phone_text_field_info.locator).type(mobile_no)

        const select_how_did_you_hear_us_info = ContactPageLocators.select_how_did_you_hear_us()
        cy.get(select_how_did_you_hear_us_info.locator).select(hear_us_option).should('have.value',hear_us_option)

        cy.get(ContactPageLocators.message_textarea_field()).type(message_text_area)

        const message_label_text_info = ContactPageLocators.message_label_text()
        cy.get(message_label_text_info.locator).then(textFetched => {
            // cy.log(textFetched.text().trim())
            expect(message_label_text_info.textToVerify).equals(textFetched.text().trim())
        })

        cy.get(ContactPageLocators.contact_form_recaptcha_parent()).should('be.visible')

        const send_message_button_info = ContactPageLocators.send_message_button()
        cy.get(send_message_button_info.locator).should('have.value', send_message_button_info.textToVerify).click()

        cy.wait(30000) // timeout for manual selection of captcha
        
        const thank_you_msg_after_form_submission_info = ContactPageLocators.thank_you_msg_after_form_submission()
        cy.get(thank_you_msg_after_form_submission_info.locator).should('have.text', thank_you_msg_after_form_submission_info.textToVerify)
    }

    // Verify Static and Dynamic Elements like Placeholder Texts, Select fields, buttons, etc
    verify_placeholder_texts_labels_buttons(){
        const first_name_text_field_info = ContactPageLocators.first_name_text_field()
        cy.get(first_name_text_field_info.locator).should('have.attr','placeholder',first_name_text_field_info.placeholderTextToVerify)
    
        const last_name_text_field_info = ContactPageLocators.last_name_text_field()
        cy.get(last_name_text_field_info.locator).should('have.attr','placeholder',last_name_text_field_info.placeholderTextToVerify)

        const email_text_field_info = ContactPageLocators.email_text_field()
        cy.get(email_text_field_info.locator).should('have.attr','placeholder',email_text_field_info.placeholderTextToVerify)

        const mobile_phone_text_field_info = ContactPageLocators.mobile_phone_text_field()
        cy.get(mobile_phone_text_field_info.locator).should('have.attr','placeholder',mobile_phone_text_field_info.placeholderTextToVerify)

        let optionsArray = []
        const select_how_did_you_hear_us_info = ContactPageLocators.select_how_did_you_hear_us()
        cy.get(select_how_did_you_hear_us_info.locator).should('be.visible').find('option').each(($el,index,$list)=>{
            optionsArray.push($el.text().trim())
        }).then(()=>{
            cy.log(`Options Array info is ${optionsArray}`)
            expect(optionsArray).to.deep.equal(select_how_did_you_hear_us_info.option_values_array)
        })

        const message_label_text_info = ContactPageLocators.message_label_text()
        cy.get(message_label_text_info.locator).then(textFetched => {
            // cy.log(textFetched.text().trim())
            expect(message_label_text_info.textToVerify).equals(textFetched.text().trim())
        })

        cy.get(ContactPageLocators.contact_form_recaptcha_parent()).should('be.visible')

        const send_message_button_info = ContactPageLocators.send_message_button()
        cy.get(send_message_button_info.locator).should('have.value', send_message_button_info.textToVerify)
    }

    // To verify the exception/error/required messages if no data is passed
    verify_execption_messages_for_required_fields(){
        this.click_send_message_button()
        cy.wait(5000)

        const first_name_field_empty_error_msg_info = ContactPageLocators.first_name_field_empty_error_msg()
        cy.get(first_name_field_empty_error_msg_info.locator).should('have.text',first_name_field_empty_error_msg_info.textToVerify)

        const last_name_field_empty_error_msg_info = ContactPageLocators.last_name_field_empty_error_msg()
        cy.get(last_name_field_empty_error_msg_info.locator).should('have.text',last_name_field_empty_error_msg_info.textToVerify)

        const email_field_empty_error_msg_info = ContactPageLocators.email_field_empty_error_msg()
        cy.get(email_field_empty_error_msg_info.locator).should('have.text',email_field_empty_error_msg_info.textToVerify)

        const mobile_phone_no_field_empty_error_msg_info = ContactPageLocators.mobile_phone_no_field_empty_error_msg()
        cy.get(mobile_phone_no_field_empty_error_msg_info.locator).should('have.text',mobile_phone_no_field_empty_error_msg_info.textToVerify)
        
        const message_textarea_field_empty_error_msg_info = ContactPageLocators.message_textarea_field_empty_error_msg()
        cy.get(message_textarea_field_empty_error_msg_info.locator).should('have.text',message_textarea_field_empty_error_msg_info.textToVerify)
        
        const complete_all_required_fields_error_msg_info = ContactPageLocators.complete_all_required_fields_error_msg()
        cy.get(complete_all_required_fields_error_msg_info.locator).should('have.text',complete_all_required_fields_error_msg_info.textToVerify)
        
    }

    // https://bobbyhadz.com/blog/javascript-get-object-key-by-value
    getObjKey(obj, value) {
        return Object.keys(obj).find(key => obj[key] === value);
      }



}

export default ContactPage;
