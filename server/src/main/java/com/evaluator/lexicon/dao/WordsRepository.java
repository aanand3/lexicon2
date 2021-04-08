package com.evaluator.lexicon.dao;

import com.evaluator.lexicon.model.Words;
import org.springframework.data.repository.CrudRepository;

public interface WordsRepository extends CrudRepository<Words,Long> {
}
