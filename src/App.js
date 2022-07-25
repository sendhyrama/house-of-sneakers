// import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="parentbox">
      <FotoProduk/>
      <ProdukInfo name="Converse CT 70's High" category="CASUAL"/>
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="foto">
      <img src="sepatu.png" alt="foto-sepatu"></img>
    </div>

  );
}

function ProdukInfo(props) {
  const {name, category} = props;
  return (
      <div className="deskripsi">
        <p className="cate">{category}</p>
        <h1 className="title">{name}</h1>
        <p className="harga">IDR 799.000,00</p>
        <p className="info">
        The Chuck Taylor All Star is the most iconic sneaker in the world, recognized for its unmistakable silhouette and cultural authenticity. And like all like the best paradigms, they only get better with time. Find here the classic colors that have donned it's low top canvas upper for generations, all resting on top of a quality vulcanized rubber sole. It is the sneaker you choose to do whatever you want in.
        </p>
      </div>
  );
}

export default App;
