package com.valdisnei.valdisnei_streaming.domain.model;


import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name="Musico")
public class Musico extends Artista {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String atuacao;

    @Builder(builderMethodName = "musicoBuilder")

    public Musico(String nome, String dataDeNascimento, String premiacoes, String genero, String atuacao) {
        super(nome, dataDeNascimento, premiacoes, genero);
        this.atuacao = atuacao;
    }
}
