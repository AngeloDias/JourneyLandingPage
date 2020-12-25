import React, { Component } from 'react';
import TopEmailSectionComponent from './TopEmailSectionComponent';

/* Reference to create application using Docker */
// https://github.com/malithmcr/react-php-contact-form

/* Reference to create form to create form using React */

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