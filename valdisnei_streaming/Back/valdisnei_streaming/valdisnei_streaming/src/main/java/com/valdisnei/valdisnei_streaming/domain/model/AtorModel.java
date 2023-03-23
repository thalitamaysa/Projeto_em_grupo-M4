package com.valdisnei.valdisnei_streaming.domain.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name = "Ator")
public class AtorModel extends ArtistaModel{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String formacao;

    @Builder(builderMethodName = "atorBuilder")
    public AtorModel( String nome, String dataDeNascimento, String genero) {
        super(nome, dataDeNascimento, genero);
    }
}
