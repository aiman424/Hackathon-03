import React from 'react'
import Header from "@/components/Header";
import Heroblock from '@/components/Heroblock';
import Features from '@/components/Features';
import Ceramics from '@/components/Ceramics';
import Product from '@/components/Product';
import Email from '@/components/Email';
import Plantpot from '@/components/Plantpot';
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Header/>
      <Heroblock/>
      <Features/>
      <Ceramics/>
      <Product/>
      <Email/>
      <Plantpot/>
      <Footer/>
    </div>
  )
}

export default Home
