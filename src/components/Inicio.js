import React, { Component } from 'react'
import Navigation from './comp_home/Navigation'
import Footer from './comp_home/Footer'
import Intmain from './comp_home/Int_main'
import Carrousel from './comp_home/Carrousel'
import Intmain2 from './comp_home/Int_main2'

export default class Inicio extends Component {
    
    render() {
        
        return (
            <div>
                <Navigation></Navigation>
                <div className= "sep-peq1"></div>
                <Intmain></Intmain>
                <div className= "sep-peq1"></div>
                <Carrousel></Carrousel>
                <div className= "sep-peq1"></div>
                <Intmain2></Intmain2>
                <div className= "sep-peq1"></div>
                <Footer></Footer>
            </div>

        )
    }
}