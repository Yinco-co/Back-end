   //const express = require('express');
  // const msgerInput= require('./FrontEndYinco/js/GestioneChat')
  function filter(question, term) {
    const lowerCaseQuestion = question.toLowerCase();
    const lowerCaseTerm = term.toLowerCase();
  
    // Usa una regex per separare le parole nel messaggio in base agli spazi o ai segni di punteggiatura
    const words = lowerCaseQuestion.match(/[\w']+/g);
  
    return words.filter((word) => word === lowerCaseTerm);
  }
  const question = msgerInput;
  const term = 'ciao';
  
  const filteredWords = filter(question, term);
  console.log(filteredWords); 
  