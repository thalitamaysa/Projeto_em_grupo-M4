package com.valdisnei.valdisnei_streaming.controller;

import com.valdisnei.valdisnei_streaming.domain.model.Filme;
import com.valdisnei.valdisnei_streaming.repositories.FilmeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/filmes")
public class FilmeController {

    @Autowired
    private FilmeRepository filmeRepository;

    @GetMapping
    public ResponseEntity<List<Filme>> getAllFilmes() {
        var response = filmeRepository.findAll();
        if (response.isEmpty())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Filme> getFilmeById(@PathVariable Long id) {
        Optional<Filme> filme = filmeRepository.findById(id);
        if (filme.isPresent())
            return ResponseEntity.status(HttpStatus.OK).body(filme.get());
        else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PostMapping
    public ResponseEntity<Filme> criarFilme(@RequestBody Filme filme) {
        Filme newFilme = filmeRepository.save(filme);
        return ResponseEntity.status(HttpStatus.CREATED).body(newFilme);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Filme> atualizarFilme(@PathVariable Long id, @RequestBody Filme filme) {
        Optional<Filme> existeFilme = filmeRepository.findById(id);

        if (existeFilme.isPresent()) {
            Filme filmeAtualizado = existeFilme.get();
            filmeAtualizado.setTitulo(filme.getTitulo());
            filmeAtualizado.setGenero(filme.getGenero());
            filmeAtualizado.setDuracao(filme.getDuracao());
            filmeAtualizado.setAno(filme.getAno());
            filmeAtualizado.setTipo(filme.getTipo());
            filmeAtualizado.setElenco(filme.getElenco());
            filmeAtualizado.setDiretor(filme.getDiretor());
            filmeAtualizado.setProdutor(filme.getProdutor());
            return ResponseEntity.status(HttpStatus.OK).body(filmeAtualizado);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarFilme(@PathVariable Long id) {
        Optional<Filme> filme = filmeRepository.findById(id);
        if (filme.isPresent()) {
            filmeRepository.deleteById(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
