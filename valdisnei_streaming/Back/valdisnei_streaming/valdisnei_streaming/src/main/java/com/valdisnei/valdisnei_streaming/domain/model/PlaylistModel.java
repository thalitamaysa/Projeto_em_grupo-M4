package com.valdisnei.valdisnei_streaming.domain.model;

import jakarta.persistence.*;
import lombok.*;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

@Entity
@Table(name="Playlist")
public class PlaylistModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany
    private FilmeModel[] filme;

    @OneToMany
    private MusicaModel[] musicaModel;

    private int ordem;

    private int midiaAtual;


}