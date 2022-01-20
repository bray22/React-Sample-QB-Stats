"use strict";
(self["webpackChunkcodetest"] = self["webpackChunkcodetest"] || []).push([[353],{

/***/ 598:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x1": function() { return /* binding */ Line; }
/* harmony export */ });
/* unused harmony exports Bar, Bubble, Chart, Doughnut, Pie, PolarArea, Radar, Scatter, getDatasetAtEvent, getElementAtEvent, getElementsAtEvent */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(181);



const defaultDatasetIdKey = 'label';
function reforwardRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
}
function setOptions(chart, nextOptions) {
    chart.options = {
        ...nextOptions
    };
}
function setLabels(currentData, nextLabels) {
    currentData.labels = nextLabels;
}
function setDatasets(currentData, nextDatasets, datasetIdKey = defaultDatasetIdKey) {
    const addedDatasets = [];
    currentData.datasets = nextDatasets.map((nextDataset)=>{
        // given the new set, find it's current match
        const currentDataset = currentData.datasets.find((dataset)=>dataset[datasetIdKey] === nextDataset[datasetIdKey]
        );
        // There is no original to update, so simply add new one
        if (!currentDataset || !nextDataset.data || addedDatasets.includes(currentDataset)) {
            return {
                ...nextDataset
            };
        }
        addedDatasets.push(currentDataset);
        Object.assign(currentDataset, nextDataset);
        return currentDataset;
    });
}
function cloneData(data, datasetIdKey = defaultDatasetIdKey) {
    const nextData = {
        labels: [],
        datasets: []
    };
    setLabels(nextData, data.labels);
    setDatasets(nextData, data.datasets, datasetIdKey);
    return nextData;
}
/**
 * Get dataset from mouse click event
 * @param chart - Chart.js instance
 * @param event - Mouse click event
 * @returns Dataset
 */ function getDatasetAtEvent(chart, event) {
    return chart.getElementsAtEventForMode(event.nativeEvent, 'dataset', {
        intersect: true
    }, false);
}
/**
 * Get single dataset element from mouse click event
 * @param chart - Chart.js instance
 * @param event - Mouse click event
 * @returns Dataset
 */ function getElementAtEvent(chart, event) {
    return chart.getElementsAtEventForMode(event.nativeEvent, 'nearest', {
        intersect: true
    }, false);
}
/**
 * Get all dataset elements from mouse click event
 * @param chart - Chart.js instance
 * @param event - Mouse click event
 * @returns Dataset
 */ function getElementsAtEvent(chart, event) {
    return chart.getElementsAtEventForMode(event.nativeEvent, 'index', {
        intersect: true
    }, false);
}

function ChartComponent({ height =150 , width =300 , redraw =false , datasetIdKey , type , data , options , plugins =[] , fallbackContent , ...props }, ref) {
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const renderChart = ()=>{
        if (!canvasRef.current) return;
        chartRef.current = new chart_js__WEBPACK_IMPORTED_MODULE_1__/* .Chart */ .kL(canvasRef.current, {
            type,
            data: cloneData(data, datasetIdKey),
            options,
            plugins
        });
        reforwardRef(ref, chartRef.current);
    };
    const destroyChart = ()=>{
        reforwardRef(ref, null);
        if (chartRef.current) {
            chartRef.current.destroy();
            chartRef.current = null;
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!redraw && chartRef.current && options) {
            setOptions(chartRef.current, options);
        }
    }, [
        redraw,
        options
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!redraw && chartRef.current) {
            setLabels(chartRef.current.config.data, data.labels);
        }
    }, [
        redraw,
        data.labels
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!redraw && chartRef.current && data.datasets) {
            setDatasets(chartRef.current.config.data, data.datasets, datasetIdKey);
        }
    }, [
        redraw,
        data.datasets
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!chartRef.current) return;
        if (redraw) {
            destroyChart();
            setTimeout(renderChart);
        } else {
            chartRef.current.update();
        }
    }, [
        redraw,
        options,
        data.labels,
        data.datasets
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        renderChart();
        return ()=>destroyChart()
        ;
    }, []);
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas", Object.assign({
        ref: canvasRef,
        role: "img",
        height: height,
        width: width
    }, props), fallbackContent));
}
const Chart = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(ChartComponent);

function createTypedChart(type, registerables) {
    chart_js__WEBPACK_IMPORTED_MODULE_1__/* .Chart.register */ .kL.register(registerables);
    return(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref)=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Chart, Object.assign({
        }, props, {
            ref: ref,
            type: type
        }))
    ));
}
const Line = /* #__PURE__ */ createTypedChart('line', chart_js__WEBPACK_IMPORTED_MODULE_1__/* .LineController */ .ST);
const Bar = /* #__PURE__ */ (/* unused pure expression or super */ null && (createTypedChart('bar', BarController)));
const Radar = /* #__PURE__ */ (/* unused pure expression or super */ null && (createTypedChart('radar', RadarController)));
const Doughnut = /* #__PURE__ */ (/* unused pure expression or super */ null && (createTypedChart('doughnut', DoughnutController)));
const PolarArea = /* #__PURE__ */ (/* unused pure expression or super */ null && (createTypedChart('polarArea', PolarAreaController)));
const Bubble = /* #__PURE__ */ (/* unused pure expression or super */ null && (createTypedChart('bubble', BubbleController)));
const Pie = /* #__PURE__ */ (/* unused pure expression or super */ null && (createTypedChart('pie', PieController)));
const Scatter = /* #__PURE__ */ (/* unused pure expression or super */ null && (createTypedChart('scatter', ScatterController)));


//# sourceMappingURL=index.modern.js.map


/***/ })

}]);
//# sourceMappingURL=vendors.react-chartjs-2.fb60ca9d.js.map