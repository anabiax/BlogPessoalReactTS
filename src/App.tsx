import './App.css'
import Navbar from './components/estaticos/Navbar/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Footer from './components/estaticos/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario'
import ListaTema from './components/temas/listatema/ListaTema'
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem'
import CadastroPost from './components/postagens/cadastroPost/CadastroPost'
import CadastroTema from './components/temas/cadastroTema/CadastroTema'
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem'
import DeletarTema from './components/temas/deletarTema/DeletarTema'
import { Provider } from 'react-redux'
import store from './store/tokens/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



import Principal from './components/Principal/Principal'


function App() {
  return (
      <Provider store={store}>
        <ToastContainer />
          <BrowserRouter>
            <Navbar />
              <div style={{ minHeight: '80vh'}}>
                <Routes>
                  <Route path="/" element={ <Login /> } />
                  <Route path="/login" element={ <Login /> } />
                  <Route path="/home" element={ <Home /> } />
                  <Route path="/cadastrousuario" element={ <CadastroUsuario /> } />
                  <Route path="/temas" element={< ListaTema />} />
                  <Route path="/posts" element={< ListaPostagem />}/>

                  <Route path='/formularioPostagem' element={ <CadastroPost /> } />
                  <Route path='/formularioPostagem/:id' element={ <CadastroPost /> } />
                  <Route path='/formularioTema/' element={ <CadastroTema /> } />
                  <Route path='/formularioTema/:id' element={ <CadastroTema /> } />
                  <Route path='/deletarPostagem/:id' element={ <DeletarPostagem /> } />
                  <Route path='/deletarTema/:id' element={ <DeletarTema /> } />

                </Routes>
              </div>
            <Footer />
          </BrowserRouter>
      </Provider>
    )
}

export default App
