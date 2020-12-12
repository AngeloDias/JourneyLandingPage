import React from 'react';

export default function TopSectionComponent() {
    return (
        <div className="iris valign-wrapper responsive-img">
            <div className="card transparent z-depth-5" />

            <div className="center-align white-text">
                <div>
                    <h1 className="text-darken-1">A Jornada</h1>
                    <h4 className="text-darken-1">O ponto de partida para você se tornar gente de verdade</h4>
                </div>

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

                <div>
                    <p className="flow-text">INSCREVA - SE GRÁTIS E RECEBA O MATERIAL EXCLUSIVO DAS AULAS</p>
                </div>

                <div className="row">
                    <form method="post" className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="first_name" type="text" className="validate"/>
                                <label htmlFor="first_name">Seu primeiro nome</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate"/>
                                <label htmlFor="email">Seu melhor email</label>
                            </div>
                        </div>
                        <div className="row">
                            <button class="btn waves-effect waves-light orange" type="submit" name="action">Iniciar a minha jornada</button>
                        </div>
                    </form>
                </div>

            </div>
        </div >
    )
}