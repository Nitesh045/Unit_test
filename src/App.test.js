import { render, screen } from '@testing-library/react';
import App from './App';
import { Counter } from './Component/Counter';

test('renders learn react link', () => {
  render(<App />);
  
  expect(App).toBeTruthy();
});

test("check counter compo render",()=>{
  render(<Counter/>);
  expect(Counter).toBeTruthy();
})