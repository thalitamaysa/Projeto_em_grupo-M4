package com.api.valdisnei.model;

import jakarta.persistence.*;
import lombok.*;


@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name="Conta")
public class Conta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private Usuario usuario;

    @Builder(builderMethodName = "contaBuilder")
    public Conta(Usuario usuario) {
        this.usuario = usuario;
    }
}
