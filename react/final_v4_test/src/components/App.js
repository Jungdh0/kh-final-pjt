import React from 'react';
import AppRouter from './Router';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <AppRouter></AppRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
