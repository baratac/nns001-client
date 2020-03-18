import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';


test('renders opening page', () => {
  const history = createMemoryHistory()
  let { getByTestId } = render(
    <Router history={history}>
      <App />
    </Router>
  )

  const homePage = getByTestId('home-page')
  expect(homePage).toBeInTheDocument();

});
/*
test('landing on a bad page shows 404 page', () => {
  const history = createMemoryHistory()
  history.push('/some/bad/route')
  const { getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  )
  expect(getByText('404 Not Found')).toBeInTheDocument();
})
*/