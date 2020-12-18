import React, { Component } from 'react';
import axios from 'axios';

const PHP_FILE_PATH = 'http://localhost:3002/journey-landing-page/src/php/index.php';

export default class TopSectionComponent extends Component {
    state = {
        first_name: null,
        email: null,
        mail_sent: false,
        error: null
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    resetForm = () => {
        this.setState({
            first_name: '',
            email: ''
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios({
            method: 'POST',
            url: `${PHP_FILE_PATH}`,
            headers: {
                'content-type': 'application/json'
            },
            data: this.state
        })
            .then(result => {
                this.setState({
                    mail_sent: result.data.sent
                })
            })
            .catch(error => this.setState({ error: error.message }));
    }

    render() {
        return (
            <div className="iris valign-wrapper responsive-img">
                <div className="card transparent z-depth-5" />

                <div className="center-align white-text wrapper-content">
                    <div>
                        <h1 className="text-darken-1">A Jornada</h1>
                        <h4 className="text-darken-1">O ponto de partida para você se tornar gente de verdade</h4>
                    </div>

                    <div className="row">
                        <div className="col s12 m6"></div>

                        <div className="col s12 m6">

                            <div>
                                <h6 className="flow-text"><strong>Dias 11, 12 e 13 de dezembro, às 21 h, gratuitamente no Instagram <a href="http://instagram.com/rebecca.athayde">@rebecca.athayde</a></strong></h6>
                            </div>

                            <div className="dividers-container responsive-img">
                                <div className="divider-separator" />
                                <div className="divider-separator" />
                                <div className="divider-separator" />
                                <div className="divider-separator" />
                                <div className="divider-separator" />
                                <div className="divider-separator" />
                                <div className="divider-separator" />
                                <div className="divider-separator" />
                                <div className="divider-separator" />
                            </div>

                            <div className="row">
                                <div>
                                    <p className="flow-text p-subscribe-asking"><strong>INSCREVA-SE GRÁTIS E RECEBA O MATERIAL EXCLUSIVO DAS AULAS</strong></p>
                                </div>

                                <form method="POST" className="col s12 m12" onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="input-field col s12 input-to-blank">
                                            <input id="first_name" type="text" className="validate" onChange={this.handleChange} />
                                            <label htmlFor="first_name">Seu primeiro nome</label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="input-field col s12 input-to-blank">
                                            <input id="email" type="email" className="validate" onChange={this.handleChange} />
                                            <label htmlFor="email">Seu melhor email</label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <button className="btn waves-effect waves-orange orange btn-to-width col s12" type="submit" name="action">Iniciar a minha jornada</button>
                                    </div>

                                    <div>
                                        {this.state.mailSent && <div>Thank you for contcting us.</div>}
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>

                </div>
            </div >
        )
    }
}