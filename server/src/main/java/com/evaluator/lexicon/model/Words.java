package com.evaluator.lexicon.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonSetter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Words {
    @Id
    @GeneratedValue
    private Long id;
    private String word;
    private int value;
    private String url;

    public Words() {
    }

    @JsonCreator
    public Words(Long id, String word, int value, String url) {
        this.id = id;
        this.word = word;
        this.value = value;
        this.url = url;
    }

    @JsonGetter
    public Long getId() {
        return id;
    }

    @JsonSetter
    public void setId(Long id) {
        this.id = id;
    }

    @JsonGetter
    public String getWord() {
        return word;
    }

    @JsonSetter
    public void setWord(String word) {
        this.word = word;
    }

    @JsonGetter
    public int getValue() {
        return value;
    }

    @JsonSetter
    public void setValue(int value) {
        this.value = value;
    }

    @JsonGetter
    public String getUrl() {
        return url;
    }

    @JsonSetter
    public void setUrl(String url) {
        this.url = url;
    }
}
