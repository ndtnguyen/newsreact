import React from 'react';
import { withStyles } from 'material-ui/styles';
import './home.css';
import Label from '../components/Label/label';

const styles = {
  root: {
    background: "#516235",
    height: "100%"
  },
  home : {
    paddingTop: "20px"
  },

}
const list = [
  { price: 41, kr: 1495, isBest: true },
  { price: 12, kr:439, isBest: false },
  { price: 22, kr: 799, isBest: false },
  { price: 82, kr: 2585, isBest: false },
  { price: 123, kr: 3720, isBest: false }
]
class Home extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.home}>  
        <div className="row">
          {/* <img class="responsive-img" src='/assets/body-text.png' alt="body text"/> */}
          <p>
            I Sveriges största nyhetsmagasin läser du varje vecka berättelserna, fördjupningarna, analyserna och nyheterna om det viktigaste just nu inom kultur, vetenskap, politik, ekonomi och livsstil. 
          </p>
          <p>
            FOKUS uppdrag är att varje vecka gå bortom den snabba nyhetsrapporteringen, ge nya perspektiv och ge den fulla och välillustrerade bakgrunden till de viktiga samhällsfenomenen. 
          </p>  
          <p>
            Beställer du 41 nr, 82 nr eller 123 nr får du tillgång till Fokus digitalt helt gratis via vår app.
          </p>
          <p>
          Just nu får du som julbonus Stefan Lindbergs genresprängande roman Nätterna på Mon Chéri när du tecknar en helårsprenumeration för endast 1495 kr.        
          </p>  
        </div>
        <div className="box-content">
          <div className="row">
          {list.map((x,index) => (
            <div key={index} className="col-lg-4 col-md-4 price-col">             
              <div className="card card-item">
                <div className="card-body card-content">
                  {x.isBest ? <Label value="Best value" fontStype="uppercase"/> : null }
                  <p className="priceBox"><span className="price">{x.price}</span><span className="currency-type">st</span></p>
                  {index === 0 ? <span className="normal-text">+ boken Nätterna på <span className="text-danger">Mon Chéri</span></span> : <span>&nbsp;</span>}
                  <hr className="dashed-line" />
                  <div className="uom">{x.kr} kr</div>
                  <div><button className="price-box-button">Beställ</button></div>
                </div>
              </div>
            </div>
          ))}       
          </div>
          
        </div> 
      </div>
    );
  }
}

export default withStyles(styles)(Home);
