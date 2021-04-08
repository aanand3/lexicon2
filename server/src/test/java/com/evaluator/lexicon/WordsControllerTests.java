package com.evaluator.lexicon;

import com.evaluator.lexicon.dao.WordsRepository;
import com.evaluator.lexicon.model.Words;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import javax.transaction.Transactional;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@SpringBootTest
@AutoConfigureMockMvc
public class WordsControllerTests {

    @Autowired
    MockMvc mvc;

    @Autowired
    WordsRepository repository;

    @Test
    @Transactional
    @Rollback
    public void getListOfWordsTest() throws Exception{
        Words newWord = new Words();
        newWord.setWord("BigWord1");
        newWord.setUrl("http://someURL.com");
        newWord.setValue(5);
        Long newWordId = repository.save(newWord).getId();

        MockHttpServletRequestBuilder getListOfWords = get("/lexicon")
                .contentType(MediaType.APPLICATION_JSON);

        this.mvc.perform(getListOfWords)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].word", is("BigWord1")));
    }

    @Test
    @Transactional
    @Rollback
    public void getWordsByIdTest() throws Exception {
        Words newWord = new Words();
        newWord.setWord("BigWord2");
        newWord.setUrl("http://someURL.com");
        newWord.setValue(5);
        Long newWordId = repository.save(newWord).getId();

        MockHttpServletRequestBuilder getWordById = get("/lexicon/"+newWordId)
                .contentType(MediaType.APPLICATION_JSON);

        this.mvc.perform(getWordById)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.word",is("BigWord2")));
    }

    @Test
    @Transactional
    @Rollback
    public void createWordsTest() throws Exception {
        MockHttpServletRequestBuilder createWord = post("/lexicon")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"word\":\"BigWord3\",\"value\":\"15\",\"url\":\"http://someURL.com\"}");

        this.mvc.perform(createWord)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.word", is("BigWord3")));
    }

    @Test
    @Transactional
    @Rollback
    public void deleteWordsTest() throws Exception {
        Words newWord = new Words();
        newWord.setWord("BigWord4");
        newWord.setUrl("http://someURL.com");
        newWord.setValue(5);
        Long newWordId = repository.save(newWord).getId();

        MockHttpServletRequestBuilder getWordById = get("/lexicon/"+newWordId)
                .contentType(MediaType.APPLICATION_JSON);

        this.mvc.perform(getWordById)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.word",is("BigWord4")));

        MockHttpServletRequestBuilder deleteWord = delete("/lexicon/"+newWordId)
                .contentType(MediaType.APPLICATION_JSON);

        this.mvc.perform(deleteWord)
                .andExpect(status().isOk());

        MockHttpServletRequestBuilder checkWord = get("/lexicon/"+newWordId)
                .contentType(MediaType.APPLICATION_JSON);

        this.mvc.perform(checkWord)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").doesNotExist());
    }

}
