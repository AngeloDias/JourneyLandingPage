import React, { Component } from 'react';
import TopEmailSectionComponent from './TopEmailSectionComponent';

/* Reference to create application using Docker */
// https://github.com/malithmcr/react-php-contact-form

/* References to build single page app with Symfony and React */
// https://www.twilio.com/blog/building-a-single-page-application-with-symfony-php-and-react
// https://symfony.com/doc/current/frontend/encore/reactjs.html
/*  */

/* Reference to create form to create form using React */
// https://blog.mailtrap.io/react-contact-form/

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