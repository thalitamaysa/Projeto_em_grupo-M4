package com.api.valdisnei.model;

import jakarta.persistence.*;
import lombok.*;


@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name="Musica")
public class Musica extends Midia {

    private double duracao;
    private int nota;

    @OneToOne
    private Musico musico;

    @Builder(builderMethodName = "musicaBuilder")
    public Musica(String titulo, int ano, String genero, double duracao, int nota, Musico musico) {
        super(titulo, ano, genero);
        this.duracao = duracao;
        this.nota = nota;
        this.musico = musico;
    }



}