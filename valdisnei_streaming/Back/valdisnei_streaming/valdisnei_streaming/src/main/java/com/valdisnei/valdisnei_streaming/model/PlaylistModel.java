package com.valdisnei.valdisnei_streaming.model;

import jakarta.persistence.*;
import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="Playlist")
public class PlaylistModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany
    private MidiaModel[] midias;

    private Integer[] ordem;
    @OneToOne
    private MidiaModel midiaAtual;
}