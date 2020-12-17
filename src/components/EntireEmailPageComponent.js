import React, { Component } from 'react';
import TopEmailSectionComponent from './TopEmailSectionComponent';

/* Reference to create form to create form using React */
// https://blog.mailtrap.io/react-contact-form/#How_do_you_create_a_contact_form_with_React

/* Reference to send email using emailjs.com */
// https://blog.mailtrap.io/react-send-email/

/* Sending emails with PHP */
// https://blog.mailtrap.io/phpmailer/

export default class EntireEmailPageComponent extends Component {
    render() {
        return(
            <div>
                <TopEmailSectionComponent />
            </div>
        )
    }
}