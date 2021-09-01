import React, { Component } from 'react'
import Sidebar from './sidebar'
import Navbar from './navbar'

export default class home extends Component {


    render() {
        return(
            <div className = "d-flex justify-content">
                <Sidebar></Sidebar>
                <div className = "w-100 shadow">
                    <Navbar></Navbar>
                    
                </div>
                
            </div>
        )
    }
}