package com.valdisnei.valdisnei_streaming.controller;

import com.valdisnei.valdisnei_streaming.domain.model.Midia;
import com.valdisnei.valdisnei_streaming.repositories.MidiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/midias")
public class MidiaController {

    @Autowired
    private MidiaRepository midiaRepository;

    @GetMapping
    public ResponseEntity<List<Midia>> listMidia(){
        List<Midia> midias = midiaRepository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(midias);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Midia> getMidiaById(@PathVariable Long id) {
        Optional<Midia> midia = midiaRepository.findById(id);

        if(midia.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(midia.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping
    public ResponseEntity<Midia> criarMidia(@RequestBody Midia midia) {
        Midia newMidia = midiaRepository.save(midia);
        return ResponseEntity.status(HttpStatus.CREATED).body(newMidia);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Midia> atualizarMidia(@PathVariable Long id, @RequestBody Midia midia) {
        Optional<Midia> existeMidia = midiaRepository.findById(id);

        if (existeMidia.isPresent()){
            Midia midiaAtualizada = existeMidia.get();
            midiaAtualizada.setAno(midia.getAno());
            midiaAtualizada.setTitulo(midia.getTitulo());
            midiaAtualizada.setAno(midia.getAno());
            midiaAtualizada.setGenero(midia.getGenero());
            return ResponseEntity.status(HttpStatus.OK).body(midiaAtualizada);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Midia> deletarMidia(@PathVariable Long id) {
        Optional<Midia> midia = midiaRepository.findById(id);

        if(midia.isPresent()) {
            midiaRepository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
