import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import ProductList from './containers/ProductList'

const App = () => {

    return (
        <div className={'page'}>
            <section className={'header'}>
                <Header />
            </section>
            <>
            <Routes>
                <Route path="/" element={<ProductList />}>
                    <Route path=":name" element={<ProductList />} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            </>
           
            <section className={'footer'}>
            <Footer />
            </section>
        </div>
    )
}

export default App;
