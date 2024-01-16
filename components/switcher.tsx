
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";

type props={
    isDarkMode:boolean,
    setDarkMode:Function
}
 
export default function Switcher({isDarkMode, setDarkMode}:props) {
    const toggleDarkMode = (checked: boolean) => {
      setDarkMode(checked);
    };
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

  
    return (
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={(event)=>{
            toggleDarkMode(event);
            theme == "dark"? setTheme('light'): setTheme("dark")
        }}
        size={24}
        className=' dark:bg-[#0E1B18] dark:text-white'
      />
    );
}