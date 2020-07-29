import React from "react";
import { Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import modelo2 from "../Functions/modelo2";
import validar from "../Functions/Validar";

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.model = props.model;
    this.resultado = null;
  }

  mostrarResultados = () => {
    var { demanda, tiempoTotal, costoAlm, costoPrep, costoProd, stockProt } = this.model;

    const variables = { demanda, tiempoTotal, costoAlm, costoPrep, costoProd, stockProt }

    let valido = validar( variables );

    if (valido !== true) return valido;

    var {demanda, tiempoTotal, costoAlm, costoPrep, costoProd, stockProt} = variables;

    const { qo, n, ctprep, ctprod, ctalm, casp, cmsp, cte, To, cteo } = modelo2(demanda, costoPrep, costoProd, costoAlm, tiempoTotal, stockProt);

    return (
      <Card outline color="secondary" className="w-100 mt-3 mx-auto">
        <CardHeader>
          <CardTitle className="text-left">
            <h4>Resultados</h4>
          </CardTitle>
        </CardHeader>
        <CardBody className="mx-auto">
          <p>qo = {qo}</p>
          <p>n = {n}</p>
          <p>ctprep = {ctprep}</p>
          <p>ctprod = {ctprod}</p>
          <p>ctalm = {ctalm}</p>
          <p>casp = {casp}</p>
          <p>cmsp = {cmsp}</p>
          <p>cte = {cte}</p>
          <p>To = {To}</p>
          <p>cteo = {cteo}</p>
        </CardBody>
      </Card>)
  }

  render() {
    return (
      <>
        {this.mostrarResultados()}
      </>
    );
  }
}

export default Presentation;