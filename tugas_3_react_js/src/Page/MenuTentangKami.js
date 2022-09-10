import React,{Component} from "react";

class MenuTentangKami extends Component{
  constructor(props){
    super(props);
    this.state={
      tentang: "Warung Nusantara Adalah Restoran Yang Bernuansa Makanan NUsantara Kami Ada Untuk Membuat Anda Menikmati Makanan Khas Dari Nusantara"
    };
  }
  render(){
    return(
      <div>
      <center>
        <p>Tentang Kami</p>
        <p>{this.state.tentang}</p>
      </center>
      </div>
    );
  }
}
export default MenuTentangKami;
