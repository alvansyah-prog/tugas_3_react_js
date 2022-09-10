import React,{Component} from "react";
import Footer from "./Page/Footer"
import MenuMakanan from "./Page/MenuMakanan";
import Header from "./Page/Header";
import MenuTentangKami from "./Page/MenuTentangKami";
import MenuKontak from "./Page/MenuKontak";

class App extends Component{
  render(){

    return(
      <div>
      <Header/>
      <MenuMakanan/>
      <MenuTentangKami/>
      <MenuKontak/>
      <Footer/>
      </div>
    );
  }

}


export default App;
