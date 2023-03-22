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
@Table(name="Midia")
public class MidiaModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name = "titulo")
    private String titulo;
    @Column(name = "ano")
    private int ano;
    @Column(name = "Genero")
    private String genero;
}
