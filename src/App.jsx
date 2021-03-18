import React from 'react'

import './App.css'
import Card from './layout/Card'

export default () =>
    <div className="App">
        <h1>FoodEasy</h1>
        <div className="Cards">
            <div>
                <Card titulo="Mesa 01"></Card>
            </div>
            <div>
                <Card titulo="Mesa 02"></Card>
            </div>
            <div>
                <Card titulo="Mesa 03"></Card>
            </div>
            <div>
                <Card titulo="Mesa 04"></Card>
            </div>
            <div>
                <Card titulo="Mesa 05"></Card>
            </div>
            <div>
                <Card titulo="Mesa 06"></Card>
            </div>
            <div>
                <Card titulo="Mesa 07"></Card>
            </div>
        </div>
    </div>

