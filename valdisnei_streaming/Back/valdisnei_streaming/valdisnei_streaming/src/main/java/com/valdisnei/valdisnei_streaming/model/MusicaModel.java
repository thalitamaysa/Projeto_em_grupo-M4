package com.valdisnei.valdisnei_streaming.model;

import jakarta.persistence.*;
import lombok.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="Musica")
public class MusicaModel extends MidiaModel{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    private ArtistaModel artista;
    private int nota;
}