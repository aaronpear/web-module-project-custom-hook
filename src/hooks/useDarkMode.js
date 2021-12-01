
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkModeOn, setDarkModeOn] = useLocalStorage('darkMode', 'false');

    return([darkModeOn, setDarkModeOn])
}

export default useDarkMode;