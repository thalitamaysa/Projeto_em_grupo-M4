package com.valdisnei.valdisnei_streaming.domain.model;

import jakarta.persistence.*;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name="Filme")
public class Filme extends Midia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double duracao;

    private String tipo;
    @OneToMany
    private List<Ator> elenco;

    private String diretor;

    private String produtor;

    @Builder(builderMethodName = "filmeBuilder")

    public Filme(String titulo, int ano, String genero, List<Ator> elenco, double duracao, String tipo, String diretor, String produtor) {
        super( titulo, ano, genero);
        this.elenco = elenco;
        this.duracao = duracao;
        this.tipo = tipo;
        this.diretor = diretor;
        this.produtor = produtor;
    }

}