package com.valdisnei.valdisnei_streaming.controller;

import com.valdisnei.valdisnei_streaming.domain.model.Artista;
import com.valdisnei.valdisnei_streaming.repositories.ArtistaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/artistas")
public class ArtistaController {

    @Autowired
    private ArtistaRepository artistaRepository;

    @GetMapping
    public ResponseEntity<List<Artista>> getAllArtistas() {
        var response = artistaRepository.findAll();
        if (response.isEmpty())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Artista> getArtistaById(@PathVariable Long id) {
        Optional<Artista> artista = artistaRepository.findById(id);
        if (artista.isPresent())
            return ResponseEntity.status(HttpStatus.OK).body(artista.get());
        else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PostMapping
    public ResponseEntity<Artista> criarArtista(@RequestBody Artista artista) {
        Artista newArtista = artistaRepository.save(artista);
        return ResponseEntity.status(HttpStatus.CREATED).body(newArtista);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Artista> atualizarArtista(@PathVariable Long id, @RequestBody Artista artista) {
        Optional<Artista> existeArtista = artistaRepository.findById(id);

        if (existeArtista.isPresent()) {
            Artista artistaAtualizado = existeArtista.get();
            artistaAtualizado.setNome(artista.getNome());
            artistaAtualizado.setPremiacoes(artista.getPremiacoes());
            artistaAtualizado.setGenero(artista.getGenero());
            artistaAtualizado.setDataDeNascimento(artista.getDataDeNascimento());
            return ResponseEntity.status(HttpStatus.OK).body(artistaAtualizado);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/{id}")

    public ResponseEntity<Void> deletarArtista(@PathVariable Long id) {
        Optional<Artista> existeArtista = artistaRepository.findById(id);
        if (existeArtista.isPresent()) {
            artistaRepository.deleteById(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}