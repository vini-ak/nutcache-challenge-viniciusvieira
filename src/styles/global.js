import styled, { createGlobalStyle } from "styled-components";
import * as Variables from "./_variables";
import * as Fonts from "./_fonts";


export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Raleway;
        src: url(${Fonts.RALEWAY}) format('ttf');
    }

    html, body {
        margin: 0;
        overflow-x: hidden;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: color 0.3s ease;
        transition: background-color 0.3s ease;
        font-family: Raleway, sans-serif;
    }

`;