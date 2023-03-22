package com.valdisnei.valdisnei_streaming.model;

import jakarta.persistence.*;
import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "Biblioteca")
public class BibliotecaModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany
    private MidiaModel[] midia;

    @OneToOne
    private UsuarioModel usuario;

    @OneToMany
    private PlaylistModel[] playlists;

}
