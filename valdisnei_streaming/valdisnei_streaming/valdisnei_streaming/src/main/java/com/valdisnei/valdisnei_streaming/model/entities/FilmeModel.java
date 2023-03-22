package com.valdisnei.valdisnei_streaming.model.entities;

import jakarta.persistence.*;

import lombok.*;
import org.springframework.data.annotation.Id;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
/*@Builder*/

@Entity
@Table(name="Filme")
public class FilmeModel extends MidiaModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "nome")
    private String elenco;
    @Column(name = "tp_filme")
    private String tipo;
    @Column(name = "nm_diretor")
    private String diretor;
    @Column(name = "nm_produtor")
    private String produtor;
}