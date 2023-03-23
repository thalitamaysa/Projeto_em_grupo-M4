package com.valdisnei.valdisnei_streaming.domain.model;

import jakarta.persistence.*;
import lombok.*;


@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name="Conta")
public class ContaModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private UsuarioModel usuario;

    @Builder(builderMethodName = "contaModel")

    public ContaModel(UsuarioModel usuario) {
        this.usuario = usuario;
    }
}
