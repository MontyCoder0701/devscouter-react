import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App';
import SearchBox from '../components/SearchBox/SearchBox';
import ResultBox from '../components/SearchBox/ResultBox/ResultBox';
import LoadingModal from '../components/SearchBox/LoadingModal/LoadingModal';

const checkTextAfterRender = (component, text) => {
    render(component);
    const textElement = screen.getByText(new RegExp(text, 'i'));
    expect(textElement).toBeInTheDocument();
};

const checkImageAfterRender = (component, src) => {
    render(component);
    const imageElement = screen.getByAltText(src);
    expect(imageElement).toBeInTheDocument();
};

test('renders App', () => {
    checkTextAfterRender(<App />, 'DevScouter');
});

test('renders SearchBox', () => {
    checkTextAfterRender(<SearchBox />, 'Username:');
});

test('renders ResultBox', () => {
    checkTextAfterRender(<ResultBox />, 'Tech Stack');
});

test('renders LoadingModal', () => {
    checkImageAfterRender(<LoadingModal />, 'loading');
});