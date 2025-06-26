export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f5f0eb] to-[#e3d5ca] p-8 text-[#3e3e3e]">
      <header className="flex items-center justify-between mb-12">
        <h1 className="text-4xl font-extrabold text-[#8e6e53]">Velvet Lounge</h1>
        <nav className="space-x-6 text-lg">
          <a href="#menu" className="hover:underline">Menu</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="text-center mb-20">
        <h2 className="text-5xl font-bold mb-4 text-[#6b4c3b]">Signature Cocktails & Night Vibes</h2>
        <p className="text-xl max-w-2xl mx-auto">
          Discover your new favorite drink at Velvet Lounge – where classic elegance meets modern mixology.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#a47148] text-white rounded-2xl text-lg shadow-lg hover:bg-[#91603f] transition">
          View Menu
        </button>
      </section>

      <section id="menu" className="mb-24">
        <h3 className="text-3xl font-semibold text-center mb-8 text-[#5a4033]">Featured Cocktails</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#fffdf9] rounded-2xl shadow-md p-6">
            <h4 className="text-xl font-bold mb-2 text-[#8e6e53]">Velvet Kiss</h4>
            <p>Vodka, raspberry purée, elderflower, and a splash of lime.</p>
          </div>
          <div className="bg-[#fffdf9] rounded-2xl shadow-md p-6">
            <h4 className="text-xl font-bold mb-2 text-[#8e6e53]">Neon Sunset</h4>
            <p>Tequila, blood orange, grenadine, and a twist of lime.</p>
          </div>
          <div className="bg-[#fffdf9] rounded-2xl shadow-md p-6">
            <h4 className="text-xl font-bold mb-2 text-[#8e6e53]">Smoky Manhattan</h4>
            <p>Bourbon, sweet vermouth, bitters, and a hint of smoke.</p>
          </div>
        </div>
      </section>

      <section id="about" className="mb-24 text-center max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4 text-[#5a4033]">About Velvet Lounge</h3>
        <p>
          Nestled in the heart of the city, Velvet Lounge offers a sophisticated yet relaxed atmosphere for cocktail lovers.
          With handcrafted drinks and live DJ sets, it’s the perfect escape after sundown.
        </p>
      </section>

      <section id="contact" className="text-center">
        <h3 className="text-3xl font-semibold mb-4 text-[#5a4033]">Get in Touch</h3>
        <p className="mb-2">📍 123 Bourbon Street, Mixville</p>
        <p className="mb-2">📞 (123) 456-7890</p>
        <p>📧 hello@velvetlounge.com</p>
      </section>

      <footer className="mt-20 text-center text-sm text-[#7a6e63]">
        &copy; {new Date().getFullYear()} Velvet Lounge. All rights reserved.
      </footer>
    </main>
  );
}
