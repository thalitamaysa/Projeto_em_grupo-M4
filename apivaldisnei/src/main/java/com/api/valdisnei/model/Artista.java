package com.api.valdisnei.model;

import jakarta.persistence.*;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor

@MappedSuperclass
public class Artista {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String dataDeNascimento;

    private String premiacoes;

    private String genero;

    @Builder(builderMethodName = "artistaBuilder")
    public Artista(String nome, String dataDeNascimento, String premiacoes, String genero) {
        this.nome = nome;
        this.dataDeNascimento = dataDeNascimento;
        this.premiacoes = premiacoes;
        this.genero = genero;
    }
}
