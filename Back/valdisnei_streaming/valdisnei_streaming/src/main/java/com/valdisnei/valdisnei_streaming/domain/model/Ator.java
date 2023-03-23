package com.valdisnei.valdisnei_streaming.domain.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name = "Ator")
public class Ator extends Artista {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String formacao;

    @Builder(builderMethodName = "atorBuilder")
    public Ator(String nome, String dataDeNascimento, String premiacoes, String genero, String formacao) {
        super(nome, dataDeNascimento, premiacoes, genero);
        this.formacao = formacao;
    }
}
