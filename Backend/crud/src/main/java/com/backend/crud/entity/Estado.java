package com.backend.crud.entity;

import javax.persistence.*;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import java.io.IOException;
import java.lang.reflect.Array;
import java.util.GregorianCalendar;
import java.util.Timer;
import java.util.TimerTask;
import java.util.Calendar;
@Entity
@Table(name="estado")
public class Estado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "texto",length=512 )
    private String texto;
    @Column(name = "columna1")
    private String columna1;
    @Column(name = "columna2")
    private String columna2;
    @Column(name = "columna3")
    private String columna3;
    @Column(name = "columna4")
    private String columna4;
    @Column(name = "columna5")
    private String columna5;
    @Column(name = "columna6")
    private String columna6;
    @Column(name = "columna7")
    private String columna7;
    @Column(name = "columna8")
    private String columna8;
    @Column(name = "fecha")
    private String fecha;

    public Estado(){

    }

    public String getFecha() {
        Calendar fecha2 = new GregorianCalendar();
        int año = fecha2.get(Calendar.YEAR);
        int mes = fecha2.get(Calendar.MONTH);
        int dia = fecha2.get(Calendar.DAY_OF_MONTH);
        fecha = dia + "/" + (mes+1) + "/" + año;
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public <ListagemDados> String getColumna1() throws IOException {

        final String url="http://www.nfe.fazenda.gov.br/portal/disponibilidade.aspx";
        final Document document = Jsoup.connect(url).get();

        columna1= String.valueOf(document.select("table.tabelaListagemDados tr td:nth-of-type(2)").html());

        return columna1;

    }

    public void setColumna1(String columna1) {
        this.columna1 = columna1;
    }

    public String getColumna2() throws IOException {
        final String url="http://www.nfe.fazenda.gov.br/portal/disponibilidade.aspx";
        final Document document = Jsoup.connect(url).get();
        columna2= String.valueOf(document.select("table.tabelaListagemDados tr td:nth-of-type(3)").html());

        return columna2;
    }

    public void setColumna2(String columna2) {
        this.columna2 = columna2;
    }

    public String getColumna3() throws IOException {
        final String url="http://www.nfe.fazenda.gov.br/portal/disponibilidade.aspx";

        final Document document = Jsoup.connect(url).get();
        columna3= String.valueOf(document.select("table.tabelaListagemDados tr td:nth-of-type(4)").html());

        return columna3;
    }

    public void setColumna3(String columna3) {
        this.columna3 = columna3;
    }

    public String getColumna4() throws IOException {
        final String url="http://www.nfe.fazenda.gov.br/portal/disponibilidade.aspx";

        final Document document = Jsoup.connect(url).get();
        columna4= String.valueOf(document.select("table.tabelaListagemDados tr td:nth-of-type(5)").html());

        return columna4;
    }

    public void setColumna4(String columna4) {
        this.columna4 = columna4;
    }

    public String getColumna5() throws IOException {
        final String url="http://www.nfe.fazenda.gov.br/portal/disponibilidade.aspx";

        final Document document = Jsoup.connect(url).get();
        columna5= String.valueOf(document.select("table.tabelaListagemDados tr td:nth-of-type(6)").html());

        return columna5;
    }

    public void setColumna5(String columna5) {
        this.columna5 = columna5;
    }

    public String getColumna6() throws IOException {
        final String url="http://www.nfe.fazenda.gov.br/portal/disponibilidade.aspx";

        final Document document = Jsoup.connect(url).get();
        columna6= String.valueOf(document.select("table.tabelaListagemDados tr td:nth-of-type(7)").text());

        return columna6;
    }

    public void setColumna6(String columna6) {
        this.columna6 = columna6;
    }

    public String getColumna7() throws IOException {
        final String url="http://www.nfe.fazenda.gov.br/portal/disponibilidade.aspx";

        final Document document = Jsoup.connect(url).get();
        columna7= String.valueOf(document.select("table.tabelaListagemDados tr td:nth-of-type(8)").html());

        return columna7;
    }

    public void setColumna7(String columna7) {
        this.columna7 = columna7;
    }

    public String getColumna8() throws IOException {
        final String url="http://www.nfe.fazenda.gov.br/portal/disponibilidade.aspx";

        final Document document = Jsoup.connect(url).get();
        columna8= String.valueOf(document.select("table.tabelaListagemDados tr td:nth-of-type(9)").html());

        return columna8;
    }

    public void setColumna8(String columna8) {
        this.columna8 = columna8;
    }

    public String getTexto() throws IOException {
        final String url="http://www.nfe.fazenda.gov.br/portal/disponibilidade.aspx";

        final Document document = Jsoup.connect(url).get();
        texto= String.valueOf(document.select("table.tabelaListagemDados tr td:nth-of-type(1)").text());

        return texto;
    }
    public void setTexto(String texto) {

        this.texto = texto;
    }



    public void main(String[] args){
        Timer timer = new Timer();

        TimerTask tarea = new TimerTask() {
            @Override
            public void run() {
                try {
                    getTexto();
                    setTexto(texto);
                    getColumna1();
                    setColumna1(columna1);
                    getColumna1();
                    setColumna2(columna2);
                    getColumna3();
                    setColumna3(columna3);
                    getColumna4();
                    setColumna4(columna4);
                    getColumna5();
                    setColumna5(columna5);
                    getColumna6();
                    setColumna6(columna6);
                    getColumna7();
                    setColumna7(columna7);
                    getColumna8();
                    setColumna8(columna8);
                } catch (IOException e) {
                    e.printStackTrace();
                }

            }
        };
        timer.schedule(tarea, 0, 30000);
    }
}
