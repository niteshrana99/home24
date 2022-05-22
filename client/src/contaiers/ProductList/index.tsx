import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Articles from '../../Components/Articles'
import Sidebar from '../../Components/Sidebar'
import Spinner from '../../Components/Spinner';
import { useAppContext } from '../../hooks/useAppContext';

const ProductList = () => {
    const { appContext, loadInitialData, loadCategoryArticles } = useAppContext();
    console.log(appContext.state.appState);
    const { isLoading, childrenCategories, articlesData } = appContext.state.appState;
    let location = useLocation();
    useEffect(() => {
        if (location.pathname === '/') {
            loadInitialData(appContext.dispatch)
        } else {
            loadArticles()
        }
        // eslint-disable-next-line
    }, [location.pathname]);

    const loadArticles = () => {
        loadCategoryArticles(appContext.dispatch, {
            variables: {
                id: ["156318"],
                locale: "de_DE",
            },
        })
    }

    if (isLoading) {
        return <Spinner />
    }
    return (
        <>
            <Sidebar childrenCategories={childrenCategories} onMenuClick={loadArticles} />
            <Articles articlesData={articlesData} />
        </>
    )
}

export default ProductList