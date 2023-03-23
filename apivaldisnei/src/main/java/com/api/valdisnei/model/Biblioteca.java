package com.api.valdisnei.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

@Entity
@Table(name = "Biblioteca")
public class Biblioteca {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany
    private List<Filme> filme;

    @OneToMany
    private List<Musica> musica;

    @OneToOne
    private Usuario usuario;

    @OneToMany
    private List<Playlist> playlists;

}
