import {
  Header,
  Main,
  Footer
} from '../../../../components';

import { Login } from '../login/login.container'

function LoginLayout() {
  return (
    <div className="login">
      <Header>
        <Main>
          <Login />
        </Main>
      </Header>
      <Footer />
    </div>
  )
};

export {
  LoginLayout
}
