import React, {Component} from "react";

class ListMakanan extends Component {

  constructor(props){
    super(props);
    this.state={
      datalist: this.props.GambarMakan
    };
  }

  render(){
    return(
      <div>
      <img src={this.state.datalist} alt="Produk Makanan"  width="150"/>
      </div>
    );
  }
}
export default ListMakanan;
