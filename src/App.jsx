
import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Menu from './components/Menu/Menu.jsx';
import FormularioLogin from './components/FormularioLogin/FormularioLogin.jsx';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro.jsx';


function App() {

  // O estado 'tela' controla qual formulário será exibido.
  // O valor inicial é 'login'.
  
  const [tela, setTela] = useState('login');

  
  return (
    
    <main>
      <Header /> 
      <Menu onMenuClick={setTela} />
      {/* Renderização Condicional:
        - Se o estado 'tela' for 'login', mostra o FormularioLogin.
        - Se não, mostra o FormularioCadastro.
      */}
      {tela === 'login' ? <FormularioLogin /> : <FormularioCadastro />}
      
    </main>
  );
}

export default App;