import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit,NgModule } from '@angular/core';
import { Data } from '@angular/router';
import { EstadoService } from 'src/app/service/estado.service';
import {Estado} from '../../models/estado';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
  
})
export class ListaComponent implements OnInit {
  texto="siglas utilizadas"
  estados: Estado[]=[];
  estadosFiltrados: Estado[]=[];
  estadosFiltrados2: Estado[]=[];
  estadosFiltrados3: Estado[]=[];
  estadosFiltrados4: Estado[]=[];
  estadosFiltrados5: Estado[]=[];
  estadosFiltrados6: Estado[]=[];
  estadosFiltrados7: Estado[]=[];
  estadosFiltrados8: Estado[]=[];
  estadosFiltrados9: Estado[]=[];
  estadosFiltrados10: Estado[]=[];
  estadosFiltrados11: Estado[]=[];
  estadosFiltrados12: Estado[]=[];
  estadosFiltrados13: Estado[]=[];
  estadosFiltrados14: Estado[]=[];
  estadosFiltrados15: Estado[]=[];
  searchText='AM';
  dateValue:any;
  fil:any;
  array: any;
  data:any;
  loading=true;
  bool=false;
  contadorErroresAM=1;
  contadorErroresBA=0;
  contadorErroresCE=0;
  contadorErroresGO=0;
  contadorErroresMG=0;
  contadorErroresMS=0;
  contadorErroresMT=0;
  contadorErroresPE=0;
  contadorErroresPR=0;
  contadorErroresRS=0;
  contadorErroresSVRS=0;
  contadorErroresSP=0;
  contadorErroresSVAN=1;
  contadorErroresSVCAN=1;
  contadorErroresSVCRS=2;
  url="../../../assets/";
  constructor(private estadoService: EstadoService) { this.data = {
    labels: ['AM','BA','CE','GO','MG','MS','MT', 'PE', 'PR', 'RS', 'SP', 'SVAN', 'SVRS', 'SVC-AN', 'SVC-RS'],
    datasets: [
        {
            data: [this.contadorErroresAM, this.contadorErroresBA, this.contadorErroresCE,this.contadorErroresGO,this.contadorErroresMG,
              this.contadorErroresMS,this.contadorErroresMT,this.contadorErroresPE,this.contadorErroresPR,this.contadorErroresRS,
              this.contadorErroresSVCRS,this.contadorErroresSP,this.contadorErroresSVAN,this.contadorErroresSVCAN,
              this.contadorErroresSVCRS ],
            backgroundColor: [
                "#ff6961",
                "#77dd77",
                "#fdfd96",
                "#84b6f4",
                "#fdcae1",
                "#7052ff",
                "#d06aff",
                "#ff81ff",
                "#ff7360",
                "#ffff51",
                "#ab4bde",
                "#1e91ed",
                "#15ab92",
                "#f3aacb",
                "#9ddbc9",
            ],
            hoverBackgroundColor: [
              "#fa5f49",
              "#f9a59a",
              "#f9d99a",
              "#95b8f6",
              "#fa5f49",
              "#f9a59a",
              "#f9d99a",
              "#95b8f6",
              "#fa5f49",
              "#f9a59a",
              "#f9d99a",
              "#95b8f6",
              "#fa5f49",
              "#f9a59a",
              "#f9d99a",
            ]
        }
    ]
};}
  titles: string[]=[
    'Autorizador',
    'Autorização4',
    'Retorno Autorização4	',
    'Inutilização4',
    'Consulta Protocolo4',
    'Status Serviço4',
    'Tempo Médio',
    'Consulta Cadastro4',
    'Recepção Evento4'	
  ];

  ngOnInit(): void {
    this.cargarEstados();
    var that = this;
    setTimeout(function contarErroresC1(){
      that.fil=that.estados.filter((estado)=>estado);
      if (that.fil[0].columna1.substr(10,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna2.substr(10,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna3.substr(10,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna4.substr(10,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna5.substr(10,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna6.substr(10,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna7.substr(10,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna8.substr(10,24)=="bola_vermelho_G.png"
      ){
        that.contadorErroresAM+=1;
      }
    }, 10000);
    setTimeout(function contarErroresC1(){
      that.fil=that.estados.filter((estado)=>estado);
      if (that.fil[0].columna1.substr(47,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna2.substr(47,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna3.substr(47,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna4.substr(47,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna5.substr(47,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna7.substr(61,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna8.substr(47,24)=="bola_vermelho_G.png"
      ){
        that.contadorErroresBA+=1;
      }
    }, 10000);
    setTimeout(function contarErroresC1(){
      that.fil=that.estados.filter((estado)=>estado);
      if (that.fil[0].columna1.substr(84,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna2.substr(84,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna3.substr(84,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna4.substr(84,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna5.substr(84,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna7.substr(98,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna8.substr(84,24)=="bola_vermelho_G.png"
      ){
        that.contadorErroresCE+=1;
      }
    }, 10000);
    setTimeout(function contarErroresC1(){
      that.fil=that.estados.filter((estado)=>estado);
      if (that.fil[0].columna1.substr(121,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna2.substr(121,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna3.substr(121,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna4.substr(121,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna5.substr(121,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna7.substr(135,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna8.substr(121,24)=="bola_vermelho_G.png"
      ){
        that.contadorErroresGO+=1;
      }
    }, 10000);
    setTimeout(function contarErroresC1(){
      that.fil=that.estados.filter((estado)=>estado);
      if (that.fil[0].columna1.substr(158,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna2.substr(158,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna3.substr(158,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna4.substr(158,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna5.substr(158,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna7.substr(172,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna8.substr(158,24)=="bola_vermelho_G.png"
      ){
        that.contadorErroresMG+=1;
      }
    }, 10000);
    setTimeout(function contarErroresC1(){
      that.fil=that.estados.filter((estado)=>estado);
      if (that.fil[0].columna1.substr(195,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna2.substr(195,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna3.substr(195,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna4.substr(195,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna5.substr(195,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna7.substr(209,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna8.substr(195,24)=="bola_vermelho_G.png"
      ){
        that.contadorErroresMT+=1;
      }
    }, 10000);
    setTimeout(function contarErroresC1(){
      that.fil=that.estados.filter((estado)=>estado);
      if (that.fil[0].columna1.substr(232,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna2.substr(232,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna3.substr(232,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna4.substr(232,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna5.substr(232,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna7.substr(246,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna8.substr(232,24)=="bola_vermelho_G.png"
      ){
        that.contadorErroresPE+=1;
      }
    }, 10000);
    setTimeout(function contarErroresC1(){
      that.fil=that.estados.filter((estado)=>estado);
      if (that.fil[0].columna1.substr(269,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna2.substr(269,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna3.substr(269,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna4.substr(269,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna5.substr(269,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna7.substr(283,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna8.substr(269,24)=="bola_vermelho_G.png"
      ){
        that.contadorErroresPR+=1;
      }
    }, 10000);
    setTimeout(function contarErroresC1(){
      that.fil=that.estados.filter((estado)=>estado);
      if (that.fil[0].columna1.substr(306,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna2.substr(306,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna3.substr(306,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna4.substr(306,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna5.substr(306,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna7.substr(320,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna8.substr(306,24)=="bola_vermelho_G.png"
      ){
        that.contadorErroresRS+=1;
      }
    }, 10000);
    setTimeout(function contarErroresC1(){
      that.fil=that.estados.filter((estado)=>estado);
      if (that.fil[0].columna1.substr(343,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna2.substr(343,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna3.substr(343,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna4.substr(343,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna5.substr(343,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna7.substr(357,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna8.substr(343,24)=="bola_vermelho_G.png"
      ){
        that.contadorErroresSP+=1;
      }
    }, 10000);
    setTimeout(function contarErroresC1(){
      that.fil=that.estados.filter((estado)=>estado);
      if (that.fil[0].columna1.substr(380,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna2.substr(380,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna3.substr(380,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna4.substr(380,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna5.substr(380,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna7.substr(408,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna8.substr(380,24)=="bola_vermelho_G.png"
      ){
        that.contadorErroresSVAN+=1;
      }
    }, 10000);
    setTimeout(function contarErroresC1(){
      that.fil=that.estados.filter((estado)=>estado);
      if (that.fil[0].columna1.substr(417,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna2.substr(417,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna3.substr(417,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna4.substr(417,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna5.substr(417,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna8.substr(417,24)=="bola_vermelho_G.png"
      ){
        that.contadorErroresSVRS+=1;
      }
    }, 10000);
    setTimeout(function contarErroresC1(){
      that.fil=that.estados.filter((estado)=>estado);
      if (that.fil[0].columna1.substr(454,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna2.substr(454,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna3.substr(454,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna4.substr(454,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna5.substr(454,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna7.substr(320,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna8.substr(454,24)=="bola_vermelho_G.png"
      ){
        that.contadorErroresSVCAN+=1;
      }
    }, 10000);
    setTimeout(function contarErroresC1(){
      that.fil=that.estados.filter((estado)=>estado);
      if (that.fil[0].columna1.substr(491,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna2.substr(491,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna3.substr(491,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna4.substr(491,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna5.substr(491,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna7.substr(10,24)=="bola_vermelho_G.png"
        ||that.fil[0].columna8.substr(491,24)=="bola_vermelho_G.png"
      ){
        that.contadorErroresSVCRS+=1;
      }
    }, 10000);
  }

  cargarEstados(): void{
    this.estadoService.lista().subscribe(
      data=>{
        this.estados=data;
        if (!this.data) {
          console.log("Error")
        }else{
          console.log("Cargado");
          this.loading=false;
          this.bool=true;
        }
      }
    );
  }
  searchEstado(){
    
    this.estadosFiltrados = this.estados.filter((estado)=>
    estado.texto.substr(0,2).toLowerCase().includes(this.searchText.toLowerCase())
    );

    this.estadosFiltrados2 = this.estados.filter((estado)=>
    estado.texto.substr(3,3).toLowerCase().includes(this.searchText.toLowerCase())
    );

    this.estadosFiltrados3 = this.estados.filter((estado)=>
    estado.texto.substr(5,4).toLowerCase().includes(this.searchText.toLowerCase())
    );

    this.estadosFiltrados4 = this.estados.filter((estado)=>
    estado.texto.substr(9,2).toLowerCase().includes(this.searchText.toLowerCase())
    );

    this.estadosFiltrados5 = this.estados.filter((estado)=>
    estado.texto.substr(12,2).toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.estadosFiltrados6 = this.estados.filter((estado)=>
    estado.texto.substr(15,2).toLowerCase().includes(this.searchText.toLowerCase())
    );

    this.estadosFiltrados7 = this.estados.filter((estado)=>
    estado.texto.substr(18,3).toLowerCase().includes(this.searchText.toLowerCase())
    );

    this.estadosFiltrados8 = this.estados.filter((estado)=>
    estado.texto.substr(21,2).toLowerCase().includes(this.searchText.toLowerCase())
    );

    this.estadosFiltrados9 = this.estados.filter((estado)=>
    estado.texto.substr(24,2).toLowerCase().includes(this.searchText.toLowerCase())
    );

    this.estadosFiltrados10 = this.estados.filter((estado)=>
    estado.texto.substr(27,2).toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.estadosFiltrados11 = this.estados.filter((estado)=>
    estado.texto.substr(30,2).toLowerCase().includes(this.searchText.toLowerCase())
    );

    this.estadosFiltrados12 = this.estados.filter((estado)=>
    estado.texto.substr(33,4).toLowerCase().includes(this.searchText.toLowerCase())
    );

    this.estadosFiltrados13 = this.estados.filter((estado)=>
    estado.texto.substr(38,4).toLowerCase().includes(this.searchText.toLowerCase())
    );

    this.estadosFiltrados14 = this.estados.filter((estado)=>
    estado.texto.substr(43,6).toLowerCase().includes(this.searchText.toLowerCase())
    );

    this.estadosFiltrados15 = this.estados.filter((estado)=>
    estado.texto.substr(50,200).toLowerCase().includes(this.searchText.toLowerCase())
    );

  }
  
}

