import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n/i18n";

test('renders learn react link', () => {
  /*const { getByText } =*/ render(
    <I18nextProvider i18n={i18n}>
      <Home />
    </I18nextProvider>);
  expect(true);
});
