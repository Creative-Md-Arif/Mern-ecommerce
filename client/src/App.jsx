import Banner from "./components/Banner";
import Container from "./components/Container";
import Header from "./components/Header";
import NewArrival from "./components/NewArrival";
import Sale from "./components/Sale";
import Title from "./components/Title";

function App() {
  return (
    <main>
      <Banner />
      <Container className="py-5 md:py-10">
        <Sale />
        <NewArrival />
        {/* Best sellers */}
        {/* contact of the year */}
        {/* special offer */}
      </Container>
    </main>
  );
}

export default App;
