// import React from 'react'
// import { View  , Text} from 'react-native'

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './component/Login';
// import Home from './component/Home';
// import Registration from './component/Registration';
// import Data from './component/Profiles';

// function Appweb() {
//   return (
//         <Router>
//           <Routes>
//             <Route path="/" element={<Login navigation={undefined} />} />
//             <Route path="/Home" element={<Home navigation={{
//                   navigate: function (screen: string): void {
//                       throw new Error('Function not implemented.');
//                   }
//               }} />} />
//             <Route path="/Registration" element={<Registration navigation={undefined} route={{
//                   params: {
//                       name: undefined,
//                       email: undefined,
//                       password: undefined,
//                       id: undefined
//                   }
//               }} />} />
//             <Route path="/Data" element={<Data navigation={undefined} />} />
//           </Routes>
//         </Router>
      
//   )
// }

// export default Appweb;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
// import Registration from './pages/Registration';
// import Data from './pages/Data';
// import FileUpload from './pages/FileUpload';
// import FileDownload from './pages/FileDownload';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Home/>} />
        {/* <Route path="/data" element={<Data />} />
        <Route path="/file-upload" element={<FileUpload />} />
        <Route path="/file-download" element={<FileDownload />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
