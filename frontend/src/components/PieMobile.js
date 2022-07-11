import React, { useLayoutEffect } from "react";

import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";

//chart type
import * as am5percent from "@amcharts/amcharts5/percent";
import * as am5xy from "@amcharts/amcharts5/xy";
import { Box } from "@chakra-ui/react";

function PieMobile(props) {
    //const chart = useRef(null);
    const chartID = props.chartID;
    console.log({ chartID });

    useLayoutEffect(() => {
        //var root = am5.Root.new("chartdiv2");
        var root = am5.Root.new(chartID);
        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([am5themes_Animated.new(root)], [am5themes_Responsive.new(root)]);

        let data = [{
            name: "Monica",
            steps: 45688,
            pictureSettings: {
                src: "https://www.amcharts.com/wp-content/uploads/2019/04/monica.jpg"
            }
        }, {
            name: "Joey",
            steps: 35781,
            pictureSettings: {
                src: "https://www.amcharts.com/wp-content/uploads/2019/04/joey.jpg"
            }
        }, {
            name: "Ross",
            steps: 25464,
            pictureSettings: {
                src: "https://www.amcharts.com/wp-content/uploads/2019/04/ross.jpg"
            }
        }, {
            name: "Phoebe",
            steps: 18788,
            pictureSettings: {
                src: "https://www.amcharts.com/wp-content/uploads/2019/04/phoebe.jpg"
            }
        }, {
            name: "Rachel",
            steps: 15465,
            pictureSettings: {
                src: "https://www.amcharts.com/wp-content/uploads/2019/04/rachel.jpg"
            }
        }, {
            name: "Chandler",
            steps: 11561,
            pictureSettings: {
                src: "https://www.amcharts.com/wp-content/uploads/2019/04/chandler.jpg"
            }
        }];

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panX: false,
                zIndex: 0,
                panY: false,
                wheelX: "none",
                wheelY: "none",
                paddingBottom: 50,
                paddingTop: 40
            })
        );
        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        chart.seriesContainer.zIndex = -1;
        let xRenderer = am5xy.AxisRendererX.new(root, {});
        xRenderer.grid.template.set("visible", false);

        let xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                paddingTop: 20,
                categoryField: "name",
                renderer: xRenderer,
                autoGridCount: false,
                gridCount: 6,
                titleRotation: 90
            })
        );


        let yRenderer = am5xy.AxisRendererY.new(root, {});
        yRenderer.grid.template.set("strokeDasharray", [3]);

        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                min: 0,
                renderer: yRenderer
            })
        );

        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        let series = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: "Income",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "steps",
                categoryXField: "name",
                sequencedInterpolation: true,
                calculateAggregates: true,
                maskBullets: false,
                tooltip: am5.Tooltip.new(root, {
                    dy: -30,
                    pointerOrientation: "vertical",
                    labelText: "{valueY}"
                })
            })
        );

        series.columns.template.setAll({
            strokeOpacity: 0,
            cornerRadiusBR: 10,
            cornerRadiusTR: 10,
            cornerRadiusBL: 10,
            cornerRadiusTL: 10,
            maxWidth: 50,
            fillOpacity: 0.8
        });


        // heatrule
        series.set("heatRules", [
            {
                dataField: "valueY",
                min: am5.color(0xF9F9C5),
                max: am5.color(0x90C8AC),
                zIndex: 0,
                target: series.columns.template,
                key: "fill"
            },
        ]);

        series.data.setAll(data);
        xAxis.data.setAll(data);

        let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineX.set("visible", false);
        cursor.lineY.set("visible", false);

        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series.appear();
        chart.zIndex = 0
        series.zIndex = 0
        chart.appear(1000, 100);
    }, [chartID]);

    return <Box id={chartID} style={{ height: '80%', width: '100%' }} display={['block', 'block', 'block', 'none']} zIndex={0}></Box>;
}
export default PieMobile;
