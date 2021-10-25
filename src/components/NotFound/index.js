import React from "react";
import { NotFoundContainer } from "./styles";

function NotFoundView() {
    return (
        <NotFoundContainer>
            <h3>Oops! We couldn't get the data :(</h3>
            <img src={'https://d3timt52sxdbq0.cloudfront.net/wp-content/uploads/2020/11/illustrationCarriere_shadow-1-1200x808.png'}></img>
        </NotFoundContainer>
    );
}

export default NotFoundView;