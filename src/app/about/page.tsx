import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => (
  <>
    <Head>
      <title>About Us</title>
      <meta name="description" content="Learn more about MediSwift" />
    </Head>
    <Header />
    <main className="container mx-auto py-12 px-6 flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 pr-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Your trusted partner in health</h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          MediSwift revolutionizes the way Karachi accesses healthcare. As a dedicated q-commerce platform, we specialize in the rapid delivery of medicines, vitamins, and wellness products. With our reliable and user-friendly service, you can count on us to provide quick access to essential healthcare items, ensuring you and your loved ones stay healthy and happy. Experience the convenience of MediSwift and make your health a priority today!
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">Get in touch</button>
      </div>
      <div className="lg:w-1/2 mt-6 lg:mt-0">
        <img src="/images/about-page.jpg" alt="MediSwift Image" className="w-full rounded-lg shadow-lg" />
      </div>
    </main>
    <Footer />
  </>
);

export default AboutPage;
