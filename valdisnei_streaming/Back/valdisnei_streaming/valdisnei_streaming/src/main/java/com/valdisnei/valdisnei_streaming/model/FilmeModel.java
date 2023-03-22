package com.valdisnei.valdisnei_streaming.model;

import jakarta.persistence.*;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="Filme")
public class FilmeModel extends MidiaModel{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany
    private AtorModel[] elenco;

    private String tipo;

    private String diretor;

    private String produtor;

}