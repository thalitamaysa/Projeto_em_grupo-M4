package com.valdisnei.valdisnei_streaming.domain.model;

import jakarta.persistence.*;

import lombok.*;

@Getter
@Setter
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

    @Builder(builderMethodName = "filmeBuilder")

    public FilmeModel( String titulo, int ano, String genero, AtorModel[] elenco, String tipo, String diretor, String produtor) {
        super( titulo, ano, genero);
        this.elenco = elenco;
        this.tipo = tipo;
        this.diretor = diretor;
        this.produtor = produtor;
    }


}