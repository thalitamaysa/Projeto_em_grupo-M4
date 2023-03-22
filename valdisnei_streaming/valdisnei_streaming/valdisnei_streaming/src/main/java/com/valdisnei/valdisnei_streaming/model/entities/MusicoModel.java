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
@Table(name="Musico")
public class MusicoModel extends ArtistaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name="nm_formacao")
    private String atuacao;
}
