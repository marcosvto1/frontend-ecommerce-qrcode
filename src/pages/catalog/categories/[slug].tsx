import { client } from '@/lib/prismic';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PrismicDOM from 'prismic-dom';
import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/types/documents';
import React from 'react';

interface CategoryProps{
  category: Document,
  products: Document[],
}

export default function Category({ category, products }: CategoryProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <h1>{PrismicDOM.RichText.asText(category.data.title)}</h1>
      <ul>
        {products.map(product => {
          return (
            <li key={product.id}>
            <Link href={`/catalog/products/${product.slugs[0]}`}>
              <a>
                {PrismicDOM.RichText.asText(product.data.name)}
              </a>
            </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {

  const categories = await client().query([
    Prismic.Predicates.at('document.type', 'category')
  ])

  const paths = categories.results.map(category => {
    return {
      params: { slug: category.slugs[0] }
    }
  })

  return {
    paths,
    fallback: true,
  }
}

//static site generation => pega todos os dados e renderiza a pagina de uma vez com os dados
export const getStaticProps: GetStaticProps<CategoryProps> = async (context) => {
  const { slug } = context.params;

  const category = await client().getByUID('category', String(slug), {});

  const products = await client().query([
    Prismic.Predicates.at('document.type', 'product'),
    Prismic.Predicates.at('my.product.category_id', category.id)
  ])

  return {
    props: {
      category,
      products: products.results,
    },
    revalidate: 60,
  }
}


