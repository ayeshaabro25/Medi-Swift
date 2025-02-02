import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => (
  <>
    <Head>
      <title>Contact Us</title>
      <meta name="description" content="Get in touch with MediSwift" />
    </Head>
    <Header />
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <form className="mt-8 max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold">Name</label>
          <input type="text" id="name" className="w-full mt-2 p-2 border rounded-lg" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
          <input type="email" id="email" className="w-full mt-2 p-2 border rounded-lg" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold">Message</label>
          <textarea id="message" className="w-full mt-2 p-2 border rounded-lg" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Send</button>
      </form>
    </main>
    <Footer />
  </>
);

export default ContactPage;
