// src/pages/Home.tsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Counter from "../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setName } from "../store";
import User from "../components/User";

const Home: React.FC = () => {
  const name = useSelector((state: RootState) => {
    return state.user.name;
  });
  return (
    <div className="font-sans">
      <Header title="My Awesome Website" />
      <main className="container mx-auto my-8">
        <Counter />
        {/* Add more content here */}
      </main>
      <Footer />
      <User />
      <div>{name}</div>
    </div>
  );
};

export default Home;
