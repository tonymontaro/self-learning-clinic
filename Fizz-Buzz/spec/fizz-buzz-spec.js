'use strict'
var fizzBuzz = require('../fizz-buzz');

describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `Buzz` for number divisible by 55", function() {
    expect(fizzBuzz(55)).toBe('Buzz');
  });

  it("should return `Buzz` for number divisible by 550", function() {
    expect(fizzBuzz(550)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 150", function() {
    expect(fizzBuzz(150)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(fizzBuzz(63)).toBe('Fizz');
  });

  it("should return `Fizz` for 6", function() {
    expect(fizzBuzz(6)).toBe('Fizz');
  });

  it("should return `Fizz` for 969", function() {
    expect(fizzBuzz(969)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(101)).toBe(101);
  });

  it("should return 13 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(13)).toBe(13);
  });

});