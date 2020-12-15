import React from 'react';
import aula01 from '../images/aula01.jpg';
import aula02 from '../images/aula02.jpg';
import aula03 from '../images/aula03.jpg';

export default function ContentSectionComponent() {
    return (
        <div>
            <div>

                <div className="row">
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src={aula01} className="responsive-img small-image-in-card" alt="card-aula-01" />
                                <span className="card-title">Aula 01 - 11/12</span>
                            </div>

                            <div className="card-content">
                                <p>Retirando as máscaras e reconhecendo sua imaturidade.</p>
                            </div>
                        </div>
                    </div>
                
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src={aula02} className="responsive-img small-image-in-card" alt="card-aula-02" />
                                <span className="card-title">Aula 02 - 12/12</span>
                            </div>

                            <div className="card-content">
                                <p>Trilhando um caminho de crescimento na personalidade.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src={aula03} className="responsive-img small-image-in-card" alt="card-aula-03" />
                                <span className="card-title">Aula 03 - 13/12</span>
                            </div>

                            <div className="card-content">
                                <p>Direcionando a sua vida ao que é belo, bom e verdadeiro.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="row center">
                <div className="col s12 m4"></div>

                <div className="col s12 m4">

                    <div className="social-media-icons">
                        <div>
                            <a className="waves-effect waves-light social-icon btn instagram black-instagram" href="#3">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>

                        <div>
                            <a className="waves-effect waves-light social-icon btn youtube red-youtube" href="#3">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="col s12 m4"></div>
            </div>
        </div>
    )
}