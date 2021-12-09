package com.backend.crud.dto;

import com.sun.istack.NotNull;

public class Estadodto {
    @NotNull
    private String texto;

    public Estadodto(){
    }
    public Estadodto(String texto){
        this.texto=texto;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }
}
