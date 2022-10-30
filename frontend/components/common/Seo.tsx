import React from 'react'
import { NextSeo } from 'next-seo'
import { seoProps } from '@/types/seo'
const Seo = ({title , description , image , tags}:seoProps):JSX.Element => {
  return (
    <>
      <NextSeo title={title} description={description} />
    </>
  );
}

export default Seo
