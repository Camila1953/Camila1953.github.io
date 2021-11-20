import './App.css';
import Cards from './Components/Cards';
import Colums from './Components/Colums';
import Titles from './Components/Titles';

export default function App() {
  return (
    <div className="App">
      {/* FIRST TITLE */}
      <div className="container-title1">
        <div className="title1">
        <Titles 
        parte1="Latest "
        parte2=" Offers"/>
        </div>
      </div>
      {/* CARDS */}
      <div className="container-card">
        <div className="Card1">
          <img className="img-card1" alt=""/>
          <Cards
          titlecard ="Pepperoni Pizza"
          price1="$19.99"
          price2="$24.99"
          text="Quick Shoop"/>
        </div>
        <div className="Card2">
          <img className="img-card2" alt=""/>
          <Cards
          titlecard ="Baked Pancakes"
          price1="$35.99"
          price2="$44.99"
          text="Quick Shoop"/>
        </div>
        <div className="Card3">
          <img className="img-card3" alt=""/>
          <Cards
          titlecard ="Avocado"
          price1="$17.99"
          price2="$20.99"
          text="Quick Shoop"/>
        </div>
        <div className="Card4">
          <img className="img-card4" alt=""/>
          <Cards
          titlecard ="Bunch of Orange"
          price1="$24.99"
          price2="$29.99"
          text="Quick Shoop"/>
        </div>
      </div>
      {/* SECOND TITLE */}
      <div className="container-title2">
        <div className="title2">
        <Titles 
        parte1="Why Choose "
        parte2=" the Premium Bakery Quality"/>
        </div>
      </div>
      {/* COLUMS */}
      <div className="container-colums">
        <div className="content">
          <i class="fas fa-binoculars"/>
          <Colums
          titlecolum="Discover new flavours & people"
          description="Discover new tastes, flavours, snacks and 
          recipes to make wonderful meals. Also find out where your 
          food comes from and who makes it."/>
        </div>
        <div className="content">
          <i class="fas fa-boxes"/>
          <Colums
          titlecolum="Buy wholesale"
          description="We offer bulk formats, variety cases, and discovery 
          boxes so you can save money on delicious foods by buying at 
          wholesale prices."/>
        </div>
        <div className="content">
          <i class="far fa-handshake"/>
          <Colums
          titlecolum="Support your community"
          description="By buying in bulk from local and Canadian 
          producers you are helping grow our local food ecosystem,creating 
          jobs, and supporting families and entrepreneurs in your community."/>
        </div>
        <div className="content">
          <i class="far fa-thumbs-up"/>
          <Colums
          titlecolum="Enjoy the best quality"
          description="We only offer great tasting, all natural foods 
          that are better for you, and organic if possible."/>
        </div>
        <div className="content">
          <i class="far fa-heart"/>
          <Colums
          titlecolum="Enjoy Club Level Service"
          description="As a member of our club, we will make sure you are delighted with our service or we will make it right!"/>
        </div>
      </div>
    </div>
  );
}