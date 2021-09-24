import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import routes from './router'
import "./App.css"
import Header from '@/components/header'
function App() {
  
  return (
    <Provider store={store}>
    <BrowserRouter >
      <div className="appbox">
        <Header />
        {renderRoutes(routes)}

      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
