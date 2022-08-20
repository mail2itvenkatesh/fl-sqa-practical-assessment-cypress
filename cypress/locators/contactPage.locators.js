let ContactPageLocators = {
    contact_page_title: function(){
        return {
            textToVerify: 'Reach out to Founder and Lightning today'
        }
    },

    founder_lightning_logo: function(){
        return '.navbar-brand > img'
        
    },
    contact_us_text: function(){
        return {
            locator: ".display-4",
            textToVerify: 'CONTACT US'
        }
    },

    whether_you_are_founder_para_text: function() {
        return {
            locator: ".m-0.text-center.lead.fw-bold",
            textToVerify: "Whether you’re a would-be founder, our next superstar looking for a future role, or an investor interested in our model, we’d love to meet you."
        }

    },

    exciting_idea_share_text: function(){
        return {
            locator: ".col-md-6.d-none.d-md-block span",
            textToVerify: ["EXCITING", "IDEA", "you'd like to", "SHARE?"]
        }
    },
    
    first_name_text_field: function(){
        return {
            locator:"input[name='firstname']",
            placeholderTextToVerify: "First name*"
        }
    },

    last_name_text_field: function(){
        return {
            locator:"input[name='lastname']",
            placeholderTextToVerify: "Last name*"
        }
    },

    email_text_field: function(){
        return {
            locator: "input[name='email']",
            placeholderTextToVerify: "Email*"
        }
    },

    mobile_phone_text_field: function(){
        return {
            locator: "input[name='mobilephone']",
            placeholderTextToVerify: "Mobile phone number*"
    }
    },

    select_how_did_you_hear_us: function(){
        return {
            locator: "select[name='how_did_you_hear_about_us_']",
            option_values_array: ["How did you hear about us?","Referral","Word of mouth","Event","Article","Facebook","Twitter","Instagram","LinkedIn","Job board","Other","Clubhouse"]
        
        }
    },

    message_label_text: function(){
        return {
            locator: "div[class*='hs_message hs-message'] label[data-reactid='.hbspt-forms-0.1:$3.1:$message.0'] span",
            textToVerify: "Message*"
        }
    },

    message_textarea_field: function(){
        return "textarea[name='message']"
    },

    send_message_button: function(){
        return {
            locator: "input[value='Send Message >']",
            textToVerify: "Send Message >"
        }
    },

    contact_form_recaptcha_parent: function(){
        return "iframe[title='reCAPTCHA']"
    },

    first_name_field_empty_error_msg: function(){
        return {
            locator: 'ul[data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3"] label[class="hs-error-msg"]',
            textToVerify: "Please complete this required field."
        }
    },

    last_name_field_empty_error_msg: function(){
        return {
            locator: 'ul[data-reactid=".hbspt-forms-0.1:$0.1:$lastname.3"] label[class="hs-error-msg"]',
            textToVerify: "Please complete this required field."
        }
    },

    email_field_empty_error_msg: function(){
        return {
            locator: 'ul[data-reactid=".hbspt-forms-0.1:$1.1:$email.3"] label[class="hs-error-msg"]',
            textToVerify: "Please complete this required field."
        }
    },

    mobile_phone_no_field_empty_error_msg: function(){
        return {
            locator: 'ul[data-reactid=".hbspt-forms-0.1:$1.1:$mobilephone.3"] label[class="hs-error-msg"]',
            textToVerify: "Please complete this required field."
        }
    },

    message_textarea_field_empty_error_msg: function() {
        return {
            locator: 'ul[data-reactid=".hbspt-forms-0.1:$3.1:$message.3"] label[class="hs-error-msg"]',
            textToVerify: "Please complete this required field."
        }
    },

    complete_all_required_fields_error_msg: function() {
        return {
            locator: 'ul[data-reactid=".hbspt-forms-0.4.0"] label[class="hs-main-font-element"]',
            textToVerify: "Please complete all required fields."
        }
    },

    thank_you_msg_after_form_submission: function(){
        return {
            locator: '.hbspt-form .submitted-message > p',
            textToVerify: "Thank you for your message. We'll get back to you as soon as possible."
        }
    }


}

export default ContactPageLocators