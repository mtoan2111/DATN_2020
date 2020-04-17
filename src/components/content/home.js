import React from 'react'
import DonutChart from '../common/donutchart'
import BarChart from '../common/barchart'
import Statistical from '../../core/statistical'

export default class Home extends React.Component {
    donutLabel1 = ["Tủ trống", "Tủ đang sử dụng", "Tủ bị vô hiệu hoá"];
    donutLabel2 = ["Tủ hoạt động bình thường", "Tủ có lỗi kỹ thuật", "Không rõ"]
    chartLabel3 = ["Xâm phạm trái phép", "Thiết bị mất kết nối"]
    chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(231,233,237)'
    };

    titles = {
        chart1: 'Thống kê tình trạng sử dụng tủ',
        chart2: 'Thống kê tình trạng sức khoẻ tủ',
        chart3: 'Thống kê cảnh báo',
    }

    backgroundColors = {
        backgroundColor1: ['#2980b9', "#e30613", "#aaa"],
        backgroundColor2: ['#16a085', '#e67e22', '#bababa'],
        backgroundColor3: [this.chartColors.red, this.chartColors.blue]
    }

    chart1 = [];
    chart2 = [];
    chart3 = [];
    constructor(props) {
        super(props);
        this.state = {
            intevalId: 0,
            isUpdateChart: false
        };
        this.chart1Ref = React.createRef();
        this.chart2Ref = React.createRef();
        this.chart3Ref = React.createRef();
    }

    componentDidMount() {
        this.updateChart(true);
        let id = setInterval(() => {
            this.updateChart(false);
        }, (15000));
        this.setState({
            intevalId: id
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.intevalId);
    }

    updateChart = (isFirstCall) => {
        Statistical.getStatisticalDataRequest()
        .then((data) => {
            this.chart1 = data.items1;
            this.chart2 = data.items2;
            this.chart3 = data.items3;
            if (isFirstCall) {
                this.setState({
                    isUpdateChart: !this.state.isUpdateChart
                })
            }
            else {
                if (typeof (this.chart1Ref) !== 'undefined') {
                    this.chart1Ref.current.onUpdateChart(this.chart1);
                }
                if (typeof (this.chart2Ref) !== 'undefined') {
                    this.chart2Ref.current.onUpdateChart(this.chart2);
                }
                if (typeof (this.chart3Ref) !== 'undefined') {
                    this.chart3Ref.current.onUpdateChart(this.chart3);
                }
            }
        })
    }

    render() {
        return (
            <div style={styles.homeContainer}>
                <div style={styles.topLeftChart}>
                    <DonutChart data={this.chart1}
                        labels={this.donutLabel1}
                        backgroundColor={this.backgroundColors.backgroundColor1}
                        title={this.titles.chart1}
                        ref={this.chart1Ref} />
                </div>
                <div style={styles.topRightChart}>
                    <DonutChart data={this.chart2}
                        labels={this.donutLabel2}
                        backgroundColor={this.backgroundColors.backgroundColor2}
                        title={this.titles.chart2}
                        ref={this.chart2Ref} />
                </div>
                <div style={styles.bottomChart}>
                    <BarChart data={this.chart3}
                        labels={this.chartLabel3}
                        backgroundColor={this.backgroundColors.backgroundColor3}
                        title={this.titles.chart3}
                        ref={this.chart3Ref} />
                </div>
            </div>
        )
    }
}

const styles = {
    homeContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },

    topLeftChart: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '50%',
    },

    topRightChart: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '50%',
    },
    bottomChart: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '50%',
    }
}