package com.valdisnei.valdisnei_streaming.domain.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor

@MappedSuperclass
public class MidiaModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;

    private int ano;

    private String genero;

    @Builder(builderMethodName = "midiaBuilder")

    public MidiaModel(String titulo, int ano, String genero) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
    }
}