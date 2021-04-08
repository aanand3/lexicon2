package com.evaluator.lexicon.controller;

import com.evaluator.lexicon.dao.WordsRepository;
import com.evaluator.lexicon.model.Words;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class WordsController {
    private final WordsRepository repository;

    public WordsController(WordsRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/lexicon")
    public Iterable<Words> getWords(){
        return repository.findAll();
    }

    @GetMapping("/lexicon/{id}")
    public Optional<Words> getWordsById(@PathVariable Long id){
        return repository.findById(id);
    }

    @PostMapping("/lexicon")
    public Words createWords(@RequestBody Words newWord){
        return repository.save(newWord);
    }

    @DeleteMapping("/lexicon/{id}")
    public void deleteWords(@PathVariable Long id){
        repository.deleteById(id);
    }
}
