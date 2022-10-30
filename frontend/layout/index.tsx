import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { layOutProps } from '@/types/layout'
import React from 'react'

const index = ({children}:layOutProps) => {
  return (
    <>
      <div className="container mx-auto font-sans">
        <Header />
        <main>

        {children}
        </main>
      <Footer/>
      </div>
    </>
  );
}

export default index
