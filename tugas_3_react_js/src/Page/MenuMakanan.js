import React, {Component} from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component{
  constructor(props){
    super(props);
    this.state={
      nilai:0
    }
    this.rubahPesanan=this.rubahPesanan.bind(this);
    this.pesanan=this.pesanan.bind(this);
  }
  rubahPesanan(){
    this.setState((state, props) =>{
      return(
        {nilai: this.state.nilai+1}
      );
    });
  }

  pesanan(e){
    console.log(e.target.value);
  }

  render(){
    return(
      <div>
        <h3> Daftar Makanan Yang Kami Sediakan :</h3>
        <table>
          <tbody>
            <tr>
            <td>
            <ListMakanan GambarMakan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
            <center>
              <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
            </center>
            </td>
            <td>
            <ListMakanan GambarMakan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
            <center>
              <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
            </center>
            </td>
            <td>
            <ListMakanan GambarMakan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
            <center>
              <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
            </center>
            </td>
            <td>
            <ListMakanan GambarMakan="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
            <center>
              <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
            </center>
            </td>
            <td>
            <ListMakanan  GambarMakan="https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg"/>
            <center>
              <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
            </center>
            </td>
            </tr>
          </tbody>
        </table>
        <br/><br/>
        <input type="text" onChange={this.pesanan} />
        <h3 value="Masukan Pesanan Anda">Pesanan Anda : {this.state.nilai}</h3>
      </div>
    );
}

}
export default MenuMakanan;
