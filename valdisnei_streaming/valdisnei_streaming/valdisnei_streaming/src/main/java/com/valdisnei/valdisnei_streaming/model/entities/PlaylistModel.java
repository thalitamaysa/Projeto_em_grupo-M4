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
@Table(name="Playlist")
public class PlaylistModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name="midias")
    private MidiaModel[] midias;
    @Column(name="ordem")
    private Integer[] ordem;
    @Column(name="midia_atual")
    private MidiaModel midiaAtual;
}