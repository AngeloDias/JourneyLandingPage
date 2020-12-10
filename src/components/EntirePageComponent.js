import React, { Component } from 'react';
import TopSectionComponent from './TopSectionComponent';
import ContentSectionComponent from './ContentSectionComponent';

// Portfolio
// http://labs.qnimate.com/portfolio-materialize/

// Materialize CSS tutorial
// https://scotch.io/tutorials/make-material-design-websites-with-the-materialize-css-framework

export default class EntirePageComponent extends Component {
    render() {
        return(
            <div>
                <TopSectionComponent />
                <ContentSectionComponent />
            </div>
        )
    }
}