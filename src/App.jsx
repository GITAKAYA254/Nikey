import {
  Hero,
  Nav,
  CustomerReviews,
  Footer,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x padding-y">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className=" bg-pale-blue padding sm:py-32 py-16 w-full">
      <CustomerReviews />
    </section>
    <section className="padding-x">
      <Subscribe />
    </section>
    <section className=" bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);
export default App;
