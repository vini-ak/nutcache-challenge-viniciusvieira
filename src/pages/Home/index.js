import React from "react";
import EmployeesList from "../../components/EmployeesList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";


function Home() {
    return (
        <div>
            <Header></Header>
            <EmployeesList></EmployeesList>
            <Footer></Footer>
        </div>
    );
}

export default Home;