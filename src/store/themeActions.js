import { SWITCH_THEME, SWITCH_THEME_SAGA } from "./actionsTheme"


export const switchTheme = theme =>{
        return{
            type: SWITCH_THEME_SAGA,
            theme: theme,
        }
}