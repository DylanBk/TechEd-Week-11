import { ThemeProvider } from "./context/ThemeContext";

const Providers = ({children}: {children: React.ReactNode}) => {
    return <ThemeProvider>{children}</ThemeProvider>
};

export default Providers;