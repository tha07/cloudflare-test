import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Moonlight Cocktail Bar</title>
        <meta name="description" content="A chic one-page cocktail bar website built with Next.js and Tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans text-gray-800">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/cocktail-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-center px-4" style={{backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Moonlight Cocktail Bar</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Where every drink tells a story. Join us for an unforgettable night of crafted cocktails and good vibes.
            </p>
            <a
              href="#menu"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition"
            >
              Explore Menu
            </a>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-semibold mb-8">Signature Cocktails</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Starlight Sour', desc: 'Gin, lemon, elderflower, egg white', price: '$12' },
                { name: 'Midnight Mule', desc: 'Vodka, ginger beer, lime', price: '$11' },
                { name: 'Neon Nights', desc: 'Tequila, grapefruit, jalapeño', price: '$13' },
              ].map((drink) => (
                <div key={drink.name} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
                  <h3 className="text-2xl font-bold mb-2">{drink.name}</h3>
                  <p className="text-gray-600 mb-4">{drink.desc}</p>
                  <span className="text-indigo-600 font-semibold">{drink.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-6 md:flex md:items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/bar-interior.jpg"
                alt="Bar Interior"
                width={600}
                height={400}
                className="rounded-2xl object-cover"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-4xl font-semibold mb-4">About Us</h2>
              <p className="text-gray-700 leading-relaxed">
                Nestled in the heart of the city, Moonlight Cocktail Bar combines the essence of classic elegance with modern flair. Our expert mixologists craft each cocktail with premium spirits, fresh ingredients, and a dash of creativity. Whether you're here for a romantic evening or a night out with friends, our ambiance and drinks will transport you to a world of taste and style.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-semibold mb-8">Visit Us</h2>
            <p className="text-gray-700 mb-6">123 Moonlight Ave, Night City</p>
            <p className="text-gray-700 mb-6">Open Daily: 6pm - 2am</p>
            <a
              href="mailto:info@moonlightbar.com"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition"
            >
              Book a Table
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-black text-center text-gray-400">
          &copy; {new Date().getFullYear()} Moonlight Cocktail Bar. All rights reserved.
        </footer>
      </main>
    </>
  );
}
