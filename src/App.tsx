import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignInForm from "./_auth/forms/SignInForm";
import { Home } from "./_root/pages";
import SignUpForm from "./_auth/forms/SignUpForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

export const App = () => {
  return (
    <main className="flex h-screen">
      <Router>
        {/* Wrap your Routes component with BrowserRouter */}
        <Routes>
          {/* Public Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInForm />}></Route>
            <Route path="/sign-up" element={<SignUpForm />}></Route>
          </Route>

          {/* Private Routes */}
          <Route element={<RootLayout />}>
            <Route index element={<Home />}></Route>
          </Route>
        </Routes>
      </Router>
    </main>
  );
};

export default App;
