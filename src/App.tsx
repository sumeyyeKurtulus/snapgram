import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignInForm from "./_auth/forms/SignInForm";
import {
  AllUsers,
  CreatePost,
  EditPost,
  Explore,
  Home,
  PostDetails,
  Profile,
  SavedPosts,
  UpdateProfile,
} from "./_root/pages";
import SignUpForm from "./_auth/forms/SignUpForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "@/components/ui/toaster";

export const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />}></Route>
          <Route path="/sign-up" element={<SignUpForm />}></Route>
        </Route>

        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/saved" element={<SavedPosts />}></Route>
          <Route path="/all-users" element={<AllUsers />}></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
          <Route path="/update-post/:id" element={<EditPost />}></Route>
          <Route path="/posts/:id" element={<PostDetails />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
          <Route path="/update-profile/:id" element={<UpdateProfile />}></Route>
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
