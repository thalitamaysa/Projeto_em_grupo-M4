package com.valdisnei.valdisnei_streaming.model.entities;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
/*@Builder*/

@Entity
@Table(name="Musica")
public class MusicaModel extends MidiaModel{

    @Column(name="nm_artista")
    private String artista;
    @Column(name="nt_musica")
    private int nota;
}