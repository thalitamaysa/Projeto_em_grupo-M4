package com.valdisnei.valdisnei_streaming.domain.model;


import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name="Musico")
public class MusicoModel extends ArtistaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String atuacao;

    @Builder(builderMethodName = "musicoBuilder")

    public MusicoModel( String nome, String dataDeNascimento, String genero,  String atuacao) {
        super( nome, dataDeNascimento, genero);
        this.atuacao = atuacao;
    }
}
