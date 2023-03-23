package com.valdisnei.valdisnei_streaming.controller;

import com.valdisnei.valdisnei_streaming.domain.model.Biblioteca;
import com.valdisnei.valdisnei_streaming.repositories.BibliotecaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/bibliotecas")
public class BibliotecaController {

    @Autowired
    private BibliotecaRepository bibliotecaRepository;

    @GetMapping
    public ResponseEntity<List<Biblioteca>> listBiblioteca(){
        List<Biblioteca> bibliotecas = bibliotecaRepository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(bibliotecas);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Biblioteca> buscarBibliotecaPorId(@PathVariable Long id){
        Optional<Biblioteca> existeBiblioteca = bibliotecaRepository.findById(id);

        if(existeBiblioteca.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(existeBiblioteca.get());
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping
    public ResponseEntity<Biblioteca> criarBiblioteca(@RequestBody Biblioteca biblioteca){
        Biblioteca newBiblioteca = bibliotecaRepository.save(biblioteca);
        return ResponseEntity.status(HttpStatus.CREATED).body(newBiblioteca);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Biblioteca> atualizarBiblioteca(@PathVariable Long id, @RequestBody Biblioteca bibliotecaAtt) {
        Optional<Biblioteca> existeBiblioteca = bibliotecaRepository.findById(id);

        if(existeBiblioteca.isPresent()) {
            Biblioteca bibliotecaAtualizada = existeBiblioteca.get();
            bibliotecaAtualizada.setUsuario(bibliotecaAtt.getUsuario());
            bibliotecaAtualizada.setMusica(bibliotecaAtt.getMusica());
            bibliotecaAtualizada.setFilme(bibliotecaAtt.getFilme());
            bibliotecaAtualizada.setPlaylists(bibliotecaAtt.getPlaylists());
            return ResponseEntity.status(HttpStatus.OK).body(bibliotecaAtualizada);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Biblioteca> deletarBiblioteca(@PathVariable Long id) {
        Optional<Biblioteca> existeBiblioteca = bibliotecaRepository.findById(id);

        if (existeBiblioteca.isPresent()) {
            bibliotecaRepository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
