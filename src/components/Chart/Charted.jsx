import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Chart, Line } from 'react-chartjs-2';
import s from './charted.module.css';

defaults.plugins.legend.display = false;
defaults.plugins.tooltip.cornerRadius = 0.4;

export const Charted = () => {
    return (
        <div className={s.charted}>
            <Line className={s.line}
            data={{
                labels: ['11 pm', '1 am', '2 am', '3 am', '4 am', '5 am', '6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm'],
                datasets: 
                [{
                    id: 1,
                    label: 'Hourly Forecast',
                    data: [13, 12, 11, 10, 10, 9, 10, 11, 12, 13, 14, 16, 18, 18, 19,21,24,25,26, 26],
                    borderColor: '#FFB36C',
                    backgroundColor: '#FFB36C',
                    
                  }],
            }} 
            config={{
            options: {
              animations: {
                tension: {
                  duration: 1000,
                  easing: 'linear',
                  from: 1,
                  to: 0,
                  loop: true
                }
              },
              scales: {
                MyScale: {
                    y: {
                        // ... інші опції
                        ticks: {
                            reverse: true // Перемістити мітки вгору
                        }
                    }
                },
                x: {
                    ticks: {
                        // padding: 10 // За бажанням збільшіть відстань між мітками та віссю
                    }
                }
            },
            plugins: {
                // Додайте цей плагін для заокруглених кутів
                'curve-line': {
                    active: true,
                    tension: 0.4 // Налаштуйте заокругленість (0.4 - рекомендоване значення)
                }
            }
            }}}
          
        />
        </div>
      );
}
 



