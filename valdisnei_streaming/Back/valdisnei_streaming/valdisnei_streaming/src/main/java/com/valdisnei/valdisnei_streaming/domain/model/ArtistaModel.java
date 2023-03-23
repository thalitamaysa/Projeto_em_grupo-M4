package com.valdisnei.valdisnei_streaming.domain.model;

import jakarta.persistence.*;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor

@MappedSuperclass
public class ArtistaModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String dataDeNascimento;

    private String genero;

    @Builder(builderMethodName = "artistaBuilder")
    public ArtistaModel( String nome, String dataDeNascimento, String genero) {
        this.nome = nome;
        this.dataDeNascimento = dataDeNascimento;
        this.genero = genero;
    }
}
