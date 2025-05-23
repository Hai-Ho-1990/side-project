import ProductsComponent from '../components/products/ProductsComponent';
import Footer from '../components/Footer';
import ProductHeader from '../components/products/ProductHeader';
import NewsletterComponent from '../components/products/NewsletterComponent';
import RecensionComponent from '../components/products/RecensionComponent';

export default function Products({ cartCount }: { cartCount: number }) {
    return (
        <>
            <ProductHeader cartCount={cartCount} />
            <ProductsComponent />
            <RecensionComponent />
            <NewsletterComponent />
            <Footer />
        </>
    );
}
