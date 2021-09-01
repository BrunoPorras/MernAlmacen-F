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
                <Intmain></Intmain>
                <Carrousel></Carrousel>
                <Intmain2></Intmain2>
                <Footer></Footer>
            </div>

        )
    }
}