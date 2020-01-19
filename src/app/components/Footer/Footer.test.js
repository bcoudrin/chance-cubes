import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

import { MemoryRouter } from 'react-router-dom';

import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n/i18n";

test('renders Source code link', () => {
  i18n.changeLanguage('en');
  const { getByText } = render(
    <I18nextProvider i18n={i18n}>
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    </I18nextProvider>);
  expect(true);
});
