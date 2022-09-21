import '../App.css';

import { Footer } from '../components/footer/Footer.component';
import { FormComponent } from '../components/Form/Form.component';
import { Logo } from '../components/Logo/Logo.component';
import { RegisterCard } from '../components/RegisterCard/RegisterCard.component';

export const Login = () => {
  return (
    <div>
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