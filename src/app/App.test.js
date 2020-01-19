import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { MemoryRouter } from 'react-router-dom';

import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/i18n";

test('renders learn react link', () => {
  i18n.changeLanguage('en');
  const { getByText } = render(
    <I18nextProvider i18n={i18n}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </I18nextProvider>
  );
  expect(true);
});
