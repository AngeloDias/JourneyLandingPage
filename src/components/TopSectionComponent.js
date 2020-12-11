import React from 'react';

export default function TopSectionComponent() {
    return (
        <div className="iris valign-wrapper responsive-img">
            <div className="card transparent z-depth-5" />

            <div className="center-align white-text">
                <div>
                    <h1 className="text-darken-1">A Jornada</h1>
                    <h5 className="text-darken-1">O ponto de partida para você se tornar gente de verdade</h5></div>

                <div>
                    <h2 className="flow-text"><strong>Dias 12, 13 e 14 de dezembro, às 21 h, gratuitamente no Instagram <a href="http://instagram.com/rebecca.athayde">@rebecca.athayde</a></strong></h2>
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
                    </form>
                </div>

            </div>
        </div >
    )
}