import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
// });

const Deposit = require("./App");
 describe("My banking-app", () => {
   test("works", () => {
    expect("Deposit.Deposit"()).toEqual("Deposit");
  });
 });