import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import BookShop from './BookShop'
import About from './About'
import Navbar from './Navbar'
import Book from './Book'

//React memungkinkan untuk membuat component satu page penuh. Kita dapat menyatukan full-page component
//menjadi 1 aplikasi. Untuk menjadikannya menjadi satu aplikasi kita butuh Route yang akan menyambungkan
//satu page component ke page component lain.

const Index = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/bookshop">
                    <BookShop />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path='/book/:id' children={<Book />}></Route>
            </Switch>
        </Router>
    )
}

export default Index
