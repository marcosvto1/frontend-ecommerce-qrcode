import Header from '@/components/Header/index';
import Product from '@/components/Product';
import { client } from '@/lib/prismic';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';
import React from 'react';

interface ProductProps {
  product: Document
}

export default function Products({product}: ProductProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>
  }

  return (
    <>
    <Header />
    <div>
      <Product 
        product={product}
        availability={product.data.availability}
        title={PrismicDOM.RichText.asText(product.data.name)}
        description={PrismicDOM.RichText.asText(product.data.description)}
        image={product.data.thumbnail.url}
        price={product.data.price}
        slug={product.uid}
        stock={product.data.available_stock}
      />
    </div>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps<ProductProps> = async (context) => {
//   const { slug } = context.params;
//   const product = await client().getByUID('product', String(slug), {});
//   console.log(product);

//   return {
//     props: {
//       product,
//     }
//   }
// }


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

// static site generation => pega todos os dados e renderiza a pagina de uma vez com os dados
export const getStaticProps: GetStaticProps<ProductProps> = async (context) => {
  const { slug } = context.params;

  const product = await client().getByUID('product', String(slug), {});
  return {
    props: {
      product,
    },
    revalidate: 30,
  }
}


