import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import { AppStyled, CatStyled } from './index.style';

import cat from '../assets/images/Cat.png';
import svgCat from '../assets/icons/Cat.svg';

export const App: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <AppStyled>
            <p>{t('hello')}</p>
            <p>{'И всё это в styled-компоненте'}</p>
            <CatStyled src={cat} alt="cool cat" />
            <img src={svgCat} />
        </AppStyled>
    );
};
