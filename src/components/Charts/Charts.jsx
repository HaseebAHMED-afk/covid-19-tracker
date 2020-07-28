import React , {useState , useEffect} from 'react'
import { fetchDailyData } from '../../API' 
import styles from './Charts.module.css';
import {Line , Bar} from 'react-chartjs-2';

const Charts = ({data:{confirmed,deaths,recovered} ,country}) => {
    const [dailyData,setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async ()=>{
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, [])

    const lineChart = (
        dailyData.length
        ? (
            <Line 
                data={{
                    labels: dailyData.map(({date})=> date) ,
                    datasets: [{
                        data: dailyData.map(({confirmed})=> confirmed),
                        label: "Infected",
                        borderColor: "#3333ff",
                        fill: true
                    },{
                        data: dailyData.map(({deaths})=> deaths),
                        label: "Deaths",
                        borderColor: "red",
                        backgroundColor: 'rgb(248, 52, 52)',
                        fill: true
                    }]
                }}
             />
        ) : null
    )

    const barChart = (
        confirmed
        ? (
            <Bar 
                data={{
                    labels: ['Confirmed','Recovered','Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor:[
                           ' rgb(32, 2, 226)',
                            'rgb(180, 4, 4)',
                            'rgb(3, 224, 3)',
                        ],
                        data:[confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend:{display: false},
                    title: {display: true , text: `Current State in ${country}`}
                }}
            />
        ): null
    )

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Charts
