import React from "react";
import { Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import {
  makeVisFlexible, LabelSeries,
  LineSeriesCanvas, XYPlot, XAxis, YAxis,
  HorizontalGridLines, LineSeries, AreaSeries,
  VerticalGridLines, MarkSeries, DiscreteColorLegend
} from 'react-vis';
import modelo1 from "../Functions/modelo1";
import validar from "../Functions/Validar";

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.model = props.model;
  }
  state = {
    useCanvas: false
  };

  plotearGrafico = () => {
    if (this.resultado) {
      const FlexibleGraph = makeVisFlexible(XYPlot);
      const { useCanvas } = this.state;
      const Line = useCanvas ? LineSeriesCanvas : LineSeries;
      let unidad;
      if (this.model.unidadTiempo === "Meses") {
        unidad = 30;
      } else {
        unidad = 360;
      }
      const T = this.model.tiempoTotal * unidad;
      const To = this.resultado.To * unidad;
      const items = [];
      const incremento = To;
      let topey = this.resultado.qo;
      let iniciox = 0;
      let finx = To;
      let finy = 0;
      while (finx <= T) {
        items.push(<Line
          className="primera reposicion"
          color="#12939A"
          data={[{ x: iniciox, y: topey }, { x: finx, y: finy }]}
        />);
        items.push(<AreaSeries
          className="area-series-example"
          opacity={0.25}
          color="orange"
          data={[{ x: iniciox, y: topey }, { x: finx, y: finy }]}
        />);
        items.push(<Line
          className="se repone"
          color="#7bc96f"
          data={[{ x: finx, y: 0 }, { x: finx, y: topey }]}
        />);
        iniciox = finx;
        finx = finx + incremento;
      }
      if (finx !== T) {
        const delta = T - (finx - incremento);
        finx = T;
        finy = (-this.resultado.qo / To) * delta + this.resultado.qo;
        items.push(<Line
          className="primera reposicion"
          color="#12939A"
          data={[{ x: iniciox, y: topey }, { x: finx, y: finy }]}
        />);
        items.push(<AreaSeries
          className="area-series-example"
          opacity={0.25}
          color="orange"
          data={[{ x: iniciox, y: topey }, { x: finx, y: finy }]}
        />);
      }
      items.push(<Line
        className="Tiempo total"
        color="Red"
        data={[{ x: T, y: 0 }, { x: T, y: topey }]}
      />);
      return (
        <Card outline color="secondary" className="w-100 mt-3 mx-auto">
          <CardHeader>
            <CardTitle className="text-left">
              <h4>Cantidad de stock en función del tiempo</h4>
            </CardTitle>
          </CardHeader>
          <FlexibleGraph
            height={500}
            margin={{ bottom: 80, left: 50, right: 10, top: 75 }}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <Line
              className="To"
              color="blue"
              style={{
                strokeLinejoin: 'round',
                strokeWidth: 4
              }}
              strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
              data={[{ x: 0, y: 0 }, { x: To, y: 0 }]}
            />
            <MarkSeries
              className="mark-series-example"
              strokeWidth={2}
              sizeRange={[5, 15]}
              data={[{ x: 0, y: this.resultado.qo, size: 5 }, { x: To, y: 0, size: 5 }]} />
            <LabelSeries animation allowOffsetToBeReversed data={[{ x: 0, y: this.resultado.qo, label: 'qo=' + this.resultado.qo, size: 10 },
            { x: To, y: 0, label: 'To=' + To, size: 10 }]} />
            <XAxis title="tiempo" />
            <YAxis />
            {items}
            <DiscreteColorLegend style={{ position: 'absolute', left: '50px', top: '10px' }}
              orientation="horizontal"
              items={[{ title: 'reposiciones', color: '#7bc96f' },
              { title: 'Tiempo total', color: 'Red' },
              { title: 'Stock', color: '#12939A' },
              { title: 'To', color: 'blue', strokeStyle: "dashed" }]} />
          </FlexibleGraph>
        </Card>
      );
    }
  }

  mostrarResultados = () => {

    this.resultado = null;

    var { demanda, tiempoTotal, costoAlm, costoPrep, costoProd } = this.model;

    const variables = { demanda, tiempoTotal, costoAlm, costoPrep, costoProd };

    let valido = validar(variables);

    if (valido !== true) return valido;

    var { demanda, tiempoTotal, costoAlm, costoPrep, costoProd } = variables;

    this.resultado = modelo1(demanda, costoPrep, costoAlm, tiempoTotal, costoProd);

    const { qo, n, CTPre, CTProd, CTAlm, CTE, To, CTEo } = this.resultado;

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
          <p>CTPre = {CTPre}</p>
          <p>CTProd = {CTProd}</p>
          <p>CTAlm = {CTAlm}</p>
          <p>CTE = {CTE}</p>
          <p>To = {To}</p>
          <p>CTEo = {CTEo}</p>
        </CardBody>
      </Card>

    )
  }

  render() {

    return (
      <>
        {this.mostrarResultados()}
        {this.plotearGrafico()}
      </>
    );
  }
}

export default Presentation;
