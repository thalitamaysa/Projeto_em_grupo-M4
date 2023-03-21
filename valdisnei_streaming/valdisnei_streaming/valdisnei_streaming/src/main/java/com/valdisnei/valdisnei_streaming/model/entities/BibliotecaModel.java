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
@Table(name = "Biblioteca")
public class BibliotecaModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name = "midia")
    private MidiaModel[] midia;

    @Column(name = "usuario")
    private UsuarioModel usuario;

    @Column(name = "playlists")
    private PlaylistModel[] playlists;

}
