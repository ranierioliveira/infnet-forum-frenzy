import { assert } from "chai";
import Pontos from "../src/models/Pontos.js";

describe("Classe Pontos", () => {
  it("Deve retornar 3 pontos para tópico postado", () => {
    const pontos = new Pontos();

    pontos.calcularPontos("post");
    const pontosSomados = pontos.ponto;

    assert.equal(pontosSomados, 3);
  });

  it("Deve retornar 1 ponto para cada comentário", () => {
    const pontos = new Pontos();

    pontos.calcularPontos("comentario");
    const pontosSomados = pontos.ponto;

    assert.equal(pontosSomados, 1);
  });

  it("Deve retornar 1 ponto para cada curtida", () => {
    const pontos = new Pontos();

    pontos.calcularPontos("curtida");
    const pontosSomados = pontos.ponto;

    assert.equal(pontosSomados, 1);
  });

});