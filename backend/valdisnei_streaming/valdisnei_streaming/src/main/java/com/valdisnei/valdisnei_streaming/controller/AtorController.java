package com.valdisnei.valdisnei_streaming.controller;


import com.valdisnei.valdisnei_streaming.domain.model.Ator;
import com.valdisnei.valdisnei_streaming.repositories.AtorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/atores")

public class AtorController {

    @Autowired
    private AtorRepository atorRepository;

    @GetMapping
    public ResponseEntity<List<Ator>> getAllAtores() {
        var response = atorRepository.findAll();
        if (response.isEmpty())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        else
            return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ator> getAtorById(@PathVariable Long id){
        Optional<Ator> ator = atorRepository.findById(id);

        if(ator.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(ator.get());
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping
    public ResponseEntity<Ator> criarAtor(@RequestBody Ator atorModel){
        Ator newAtor = atorRepository.save(atorModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(newAtor);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ator> atualizarAtor(@PathVariable Long id, @RequestBody Ator atorModel){
        Optional<Ator> existeAtor = atorRepository.findById(id);

        if(existeAtor.isPresent()){
            Ator atorAtualizado = existeAtor.get();
            atorAtualizado.setNome(atorModel.getNome());
            atorAtualizado.setPremiacoes(atorModel.getPremiacoes());
            atorAtualizado.setGenero(atorModel.getGenero());
            atorAtualizado.setDataDeNascimento(atorModel.getDataDeNascimento());
            atorAtualizado.setFormacao(atorModel.getFormacao());
            return ResponseEntity.status(HttpStatus.OK).body(atorAtualizado);
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarAtor(@PathVariable Long id){
        Optional<Ator> ator = atorRepository.findById(id);

        if(ator.isPresent()){
            atorRepository.deleteById(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
