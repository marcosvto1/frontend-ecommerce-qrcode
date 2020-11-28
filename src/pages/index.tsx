
import SEO from '@/components/SEO';
import { client } from '@/lib/prismic';
import { Title } from '@/styles/pages/Catalog/Products/Product';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import PrismicDOM from 'prismic-dom';
import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/types/documents';


interface HomeProps{
  recommendedProducts: Document[],
}


//server-side rendering => aparece nos motores de busca
export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const recommendedProducts = await client().query([
    Prismic.Predicates.at('document.type', 'product'),
  ]);

  return {
    props: {
      recommendedProducts: recommendedProducts.results,
    }
  }
}

export default function Home({ recommendedProducts }: HomeProps) {
  //client side feching => não aparece nos motores de busca
  
  // const [recommendedProducts, setRecommendedProducts] = useState<IProduct[]>([]);
  // useEffect(() => {
  //   fetch('http://localhost:3333/recommended').then(response => {
  //     response.json().then(data => setRecommendedProducts(data))
  //   })
  // }, [])

  return (
    <div>
      <SEO title="Produtos" />
      <Title>Products</Title>
      <ul>
        {recommendedProducts.map(recommendedProduct => {
          return (
            <li key={recommendedProduct.id}>
            <Link href={`/catalog/products/${recommendedProduct.slugs[0]}`}>
              <a>
                {PrismicDOM.RichText.asText(recommendedProduct.data.name)}
                {/* {console.log(recommendedProduct)} */}
              </a>
            </Link>
            </li>
          );
        })}
      </ul>
    </div>
  )
}
