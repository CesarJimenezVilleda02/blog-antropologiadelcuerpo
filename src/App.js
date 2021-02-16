import NavBar from './components/navbar/navbar.jsx';
import MainPage from './pages/main/main.jsx';
import Footer from './components/footer/footer.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Data from './data/data.js';
import Article from './pages/article/article.jsx';

function App() {
    window.addEventListener('hashchange', (event) => {
        console.log(event);
    });
    // console.log(Data);
    return (
        <div style={{ width: '100%' }}>
            <Router>
                <NavBar />
                <Switch>
                    {Data.map((articulo) => {
                        return (
                            <Route path={'/' + articulo.routeName}>
                                <Article contenido={articulo} />
                            </Route>
                        );
                    })}
                    <Route path='/'>
                        <MainPage />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
