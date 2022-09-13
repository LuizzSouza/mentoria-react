import './App.css';

import { Logo } from './components/Logo/Logo.component';
import { FormComponent } from "./components/Form/Form.component"
import { RegisterCard } from './components/RegisterCard/RegisterCard.component';
import { Footer } from './components/footer/Footer.component';

function App() {
  return (
    <div className="App">
      <div className="Git-form">
        <div className='logo'>
          <Logo />
        </div>
        <p className='text-sign'>Sign in to GitHub</p>
        <div className='box'>
          <FormComponent />
          <RegisterCard />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
