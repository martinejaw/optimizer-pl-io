import React from "react";
import { Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import {
  makeVisFlexible, LabelSeries,
  LineSeriesCanvas, XYPlot, XAxis, YAxis,
  HorizontalGridLines, LineSeries, AreaSeries,
  VerticalGridLines, MarkSeries, DiscreteColorLegend
} from 'react-vis';
import modeloSconAgotamiento from "../Functions/ModeloSimpleConAgotamiento";
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
      //ver lo de tiempo
      let unidad;
      if (this.model.unidadTiempo === "Meses") {
        unidad = 30;
      } else {
        unidad = 360;
      }
      const T = this.model.tiempoTotal * unidad;
      const To = this.resultado.To * unidad;
      const T1 = this.resultado.T1 * unidad;
      const T2 = this.resultado.T2 * unidad;
      const items = [];
      const incremento = To;
      let middlex = T1;
      let topey = this.resultado.so;
      let iniciox = 0;
      let finx = To;
      const bottomy = this.resultado.so - this.resultado.qo;
      let finy = bottomy;
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
          data={[{ x: iniciox, y: 0 },{ x: iniciox, y: topey }, { x: middlex, y: 0 }, { x: iniciox, y: 0 }]}
        />);
        items.push(<AreaSeries
          className="area-series-example"
          opacity={0.25}
          color="red"
          data={[{ x: middlex, y: 0 },{ x: finx, y: finy }, { x: finx, y: 0 }, { x: middlex, y: 0 }]}
        />);
        items.push(<Line
          className="se repone"
          color="#7bc96f"
          data={[{ x: finx, y: finy }, { x: finx, y: topey }]}
        />);
        iniciox = finx;
        finx = finx + incremento;
        middlex = middlex + incremento;
      }
      if (finx !== T) {
        const delta = T - (finx - incremento);
        finx = T;
        finy = (-this.resultado.so / T1) * delta + this.resultado.so;
        if (delta > T1){
          items.push(<Line
          className="primera reposicion"
          color="#12939A"
          data={[{ x: iniciox, y: topey }, { x: finx, y: finy }]}
          />);
          items.push(<AreaSeries
            className="area-series-example"
            opacity={0.25}
            color="orange"
            data={[{ x: iniciox, y: 0 },{ x: iniciox, y: topey }, { x: middlex, y: 0 }, { x: iniciox, y: 0 }]}
          />);
          items.push(<AreaSeries
            className="area-series-example"
            opacity={0.25}
            color="red"
            data={[{ x: middlex, y: 0 },{ x: finx, y: finy }, { x: finx, y: 0 }, { x: middlex, y: 0 }]}
          />);
        } else {
          middlex = T;
          items.push(<Line
          className="primera reposicion"
          color="#12939A"
          data={[{ x: iniciox, y: topey }, { x: finx, y: finy }]}
          />);
          items.push(<AreaSeries
            className="area-series-example"
            opacity={0.25}
            color="orange"
            data={[{ x: iniciox, y: 0 },{ x: iniciox, y: topey }, { x: middlex, y: finy }, { x: middlex, y: 0 },{ x: iniciox, y: 0 }]}
          />);
        }
        
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
              className="qo"
              color="red"
              style={{
                strokeLinejoin: 'round',
                strokeWidth: 4
              }}
              strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
              data={[{ x: 0, y: bottomy }, { x: 0, y: this.resultado.so }]}
            />
            <Line
              className="To"
              color="blue"
              style={{
                strokeLinejoin: 'round',
                strokeWidth: 4
              }}
              strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
              data={[{ x: 0, y: bottomy }, { x: To, y: bottomy }]}
            />
            <Line
              className="T1"
              color="yellow"
              style={{
                strokeLinejoin: 'round',
                strokeWidth: 4
              }}
              strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
              data={[{ x: 0, y: 0 }, { x: T1, y: 0 }]}
            />
            <Line
              className="T2"
              color="green"
              style={{
                strokeLinejoin: 'round',
                strokeWidth: 4
              }}
              strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
              data={[{ x: T1, y: 0 }, { x: T1 + T2, y: 0 }]}
            />
            <MarkSeries
              className="mark-series-example"
              strokeWidth={2}
              sizeRange={[5, 15]}
              data={[{ x: 0, y: this.resultado.so, size: 5 }, { x: To, y: bottomy, size: 5 }, { x: T1, y: 0, size: 5 }, { x: T1 + T2, y: 0, size: 5 }]} />
            <LabelSeries animation allowOffsetToBeReversed
              data={[{ x: 0, y: this.resultado.so, label: 'so=' + this.resultado.so, size: 10 },
              { x: To, y: bottomy, label: 'To=' + To, size: 10 },
              { x: T1, y: 0, label: 'T1=' + T1, size: 10 },
              { x: T1 + T2, y: -15, label: 'T2=' + T2, size: 10 }]}
              labelAnchorX="start" />
            <XAxis title="tiempo" />
            <YAxis />
            {items}
            <DiscreteColorLegend style={{ position: 'absolute', left: '50px', top: '10px' }}
              orientation="horizontal"
              items={[{ title: 'reposiciones', color: '#7bc96f' },
              { title: 'Tiempo total', color: 'Red' },
              { title: 'Stock', color: '#12939A' },
              { title: 'To', color: 'blue', strokeStyle: "dashed" },
              { title: 'T1', color: 'yellow', strokeStyle: "dashed" },
              { title: 'T2', color: 'green', strokeStyle: "dashed" },
              { title: 'qo', color: 'red', strokeStyle: "dashed" }]} />
          </FlexibleGraph>
        </Card>
      );
    }
  }

  mostrarResultados = () => {

    this.resultado = null;

    var { demanda, tiempoTotal, costoAlm, costoPrep, costoProd, costoAgotamiento } = this.model;

    const variables = { demanda, tiempoTotal, costoAlm, costoPrep, costoProd, costoAgotamiento }

    let valido = validar(variables);

    if (valido !== true) return valido;

    var { demanda, tiempoTotal, costoAlm, costoPrep, costoProd, costoAgotamiento } = variables;

    this.resultado = modeloSconAgotamiento(demanda, costoPrep, costoProd, tiempoTotal, costoAlm, costoAgotamiento);

    const { qo, n, ctprep, ctprod, ctalm, ca, cte, so, To, T1, T2, cteo } = this.resultado

    return <Card outline color="secondary" className="w-100 mt-3 mx-auto">
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
        <p>ca = {ca}</p>
        <p>cte = {cte}</p>
        <p>so = {so}</p>
        <p>To = {To}</p>
        <p>cteo = {cteo}</p>
      </CardBody>
    </Card>
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
