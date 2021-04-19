import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// routes (Code Splitting and Pre-fetching)
const About = lazy(() => import(/* webpackPrefetch:true */ './routes/About'));
const Home = lazy(() => import('./routes/Home'));
const Checkout = lazy(() => import('./routes/Checkout'));
const PageNotFound = lazy(() => import('./routes/PageNotFound'));

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/checkout" component={Checkout} />
                    <Route component={PageNotFound} />
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
