package com.valdisnei.valdisnei_streaming.domain.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

@Entity
@Table(name = "Biblioteca")
public class BibliotecaModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany
    private FilmeModel[] filme;

    @OneToMany
    private MusicaModel[] musicaModel;

    @OneToOne
    private UsuarioModel usuario;

    @OneToMany
    private PlaylistModel[] playlists;

}
