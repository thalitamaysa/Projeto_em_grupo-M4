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
@Table(name="Artista")
public class ArtistaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name="nm_artista")
    private String nome;
    @Column(name="dt_nascimento")
    private String dataDeNascimento;
    @Column(name="nm_genero")
    private String genero;
}
