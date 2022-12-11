import { render, screen } from '@testing-library/react';
import MyHome from 'pages/home';

describe('Testa página home', () => {
  test('Testa botão - Lista de Alunos', () => {
    render(<MyHome />);
    const allButtons = screen.getAllByRole('button');
    expect(allButtons).toHaveLength(8);
  });
  test('Testa nome da escola', () => {
    render(<MyHome />);
    const textDeltaSchool = screen.getByText('DELTA SCHOOL');
    expect(textDeltaSchool).toBeInTheDocument();
  });
  test('Testa quantidade de cards', () => {
    render(<MyHome />);
    const newsCardHome = screen.getAllByTestId('newsCardHome');
    expect(newsCardHome).toHaveLength(8);
  });
});
