import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import { AppStyled } from './index.style';

export const App: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <AppStyled>
            <p>{t('hello')}</p>
            <p>{'И всё это в styled-компоненте'}</p>
        </AppStyled>
    );
};
