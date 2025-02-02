import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CartPage = () => (
  <>
    <Head>
      <title>Shopping Cart</title>
      <meta name="description" content="View items in your shopping cart" />
    </Head>
    <Header />
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Shopping Cart</h1>
      <p className="text-center text-gray-600">Your cart is empty.</p>
    </main>
    <Footer />
  </>
);

export default CartPage;
