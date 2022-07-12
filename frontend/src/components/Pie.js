import React, { useLayoutEffect } from "react";

import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";

//chart type
import * as am5percent from "@amcharts/amcharts5/percent";
import * as am5xy from "@amcharts/amcharts5/xy";
import { Box } from "@chakra-ui/react";

function Pie(props) {
    //const chart = useRef(null);
    const chartID = props.chartID;
    console.log({ chartID });

    useLayoutEffect(() => {
        //var root = am5.Root.new("chartdiv2");
        var root = am5.Root.new(chartID);

        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([am5themes_Animated.new(root), am5themes_Responsive.new(root)]);

        let data = [{
            name: "Engineering",
            steps: 45688,
            pictureSettings: {
                src: "https://picsum.photos/400/400"
            }
        }, {
            name: "Science",
            steps: 35781,
            pictureSettings: {
                src: "https://picsum.photos/400/400"
            }
        }, {
            name: "Liberal Arts",
            steps: 25464,
            pictureSettings: {
                src: "https://picsum.photos/400/400"
            }
        }, {
            name: "IT",
            steps: 18788,
            pictureSettings: {
                src: "https://picsum.photos/400/400"
            }
        }, {
            name: "Architecture",
            steps: 15465,
            pictureSettings: {
                src: "https://picsum.photos/400/400"
            }
        }]
        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panX: false,
                panY: false,
                wheelX: "none",
                wheelY: "none",
                paddingBottom: 50,
                paddingTop: 40
            })
        );

        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/

        let xRenderer = am5xy.AxisRendererX.new(root, {});
        xRenderer.grid.template.set("visible", true);

        let xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                paddingTop: 40,
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

        let currentlyHovered;

        series.columns.template.events.on("pointerover", function (e) {
            handleHover(e.target.dataItem);
        });

        series.columns.template.events.on("pointerout", function (e) {
            handleOut();
        });

        function handleHover(dataItem) {
            if (dataItem && currentlyHovered != dataItem) {
                handleOut();
                currentlyHovered = dataItem;
                let bullet = dataItem.bullets[0];
                bullet.animate({
                    key: "locationY",
                    to: 1,
                    duration: 600,
                    easing: am5.ease.out(am5.ease.cubic)
                });
            }
        }

        function handleOut() {
            if (currentlyHovered) {
                let bullet = currentlyHovered.bullets[0];
                bullet.animate({
                    key: "locationY",
                    to: 0,
                    duration: 600,
                    easing: am5.ease.out(am5.ease.cubic)
                });
            }
        }

        let circleTemplate = am5.Template.new({});

        series.bullets.push(function (root, series, dataItem) {
            let bulletContainer = am5.Container.new(root, {});
            let circle = bulletContainer.children.push(
                am5.Circle.new(
                    root,
                    {
                        radius: 34
                    },
                    circleTemplate
                )
            );

            let maskCircle = bulletContainer.children.push(
                am5.Circle.new(root, { radius: 27 })
            );

            // only containers can be masked, so we add image to another container
            let imageContainer = bulletContainer.children.push(
                am5.Container.new(root, {
                    mask: maskCircle
                })
            );

            let image = imageContainer.children.push(
                am5.Picture.new(root, {
                    templateField: "pictureSettings",
                    centerX: am5.p50,
                    centerY: am5.p50,
                    width: 60,
                    height: 60
                })
            );

            return am5.Bullet.new(root, {
                locationY: 0,
                sprite: bulletContainer
            });
        });

        // heatrule
        series.set("heatRules", [
            {
                dataField: "valueY",
                min: am5.color(0xF9F9C5),
                max: am5.color(0x90C8AC),
                target: series.columns.template,
                key: "fill"
            },
            {
                dataField: "valueY",
                min: am5.color(0xF9F9C5),
                max: am5.color(0x90C8AC),
                target: circleTemplate,
                key: "fill"
            }
        ]);

        series.data.setAll(data);
        xAxis.data.setAll(data);

        let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineX.set("visible", false);
        cursor.lineY.set("visible", false);

        cursor.events.on("cursormoved", function () {
            let dataItem = series.get("tooltip").dataItem;
            if (dataItem) {
                handleHover(dataItem);
            } else {
                handleOut();
            }
        });

        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series.appear();
        chart.appear(1000, 100);
    }, [chartID]);

    return <Box id={chartID} style={{ height: '80%', width: '100%' }} display={['none', 'none', 'none', 'block']}></Box>;
}
export default Pie;
