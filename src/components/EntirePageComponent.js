import React, { Component } from 'react';
import TopSectionComponent from './TopSectionComponent';
import ContentSectionComponent from './ContentSectionComponent';

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