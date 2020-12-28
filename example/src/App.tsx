import React from 'react'

import { ExampleComponent } from 'react-temp-chart'
import 'react-temp-chart/dist/index.css'

const App = () => {
  return <ExampleComponent data={{
    curDate: '2017-06-28',
    breathingList: ['60', '70', '65', '66', '56', '60', '70', '60', '70', '65', '66', '56', '60', '70', '60', '70', '65', '66', '56', '60', '70', '60', '70', '65', '66', '56', '60', '70', '60', '70', '65', '66', '56', '60', '70', '60', '70', '65', '66', '56', '60', '70'], //手术天数
    dayMap: [
      {
        title: '大便次数(次)',
        data: ['11', '22']
      },
      {
        title: '体重（g）',
        data: ['', '', '22']
      },
    ],
    pointData: {
      "tt": [
        {
          "dataTime": "2017-06-29 02:00:00",
          "value": "9",
          "date": "2017-06-29",
          "hour": 2,
          "mbValue": "",
          "phValue": "",
          "type": "",
          "xlValue": ""

        },
        {
          "dataTime": "2017-06-29 06:00:00",
          "value": "8",
          "date": "2017-06-29",
          "hour": 2,
          "mbValue": "",
          "phValue": "",
          "type": "",
          "xlValue": ""
        },
        {
          "dataTime": "2017-06-29 10:00:00",
          "value": "7",
          "date": "2017-06-29",
          "hour": 2,
          "mbValue": "",
          "phValue": "",
          "type": "",
          "xlValue": ""
        }
      ],
      "xl": [{
        "dataTime": "2017-06-29 02:00:00",
        "value": "65",
        "date": "2017-06-29",
        "hour": 2,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "xlValue": ""
      }, {
        "dataTime": "2017-06-29 06:00:00",
        "date": "2017-06-29",
        "hour": 6,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "75",
        "xlValue": ""
      },
      {
        "dataTime": "2017-06-29 10:00:00",
        "date": "2017-06-29",
        "hour": 10,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "80",
        "xlValue": ""
      },
      {
        "dataTime": "2017-06-29 14:00:00",
        "date": "2017-06-29",
        "hour": 14,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "85",
        "xlValue": ""
      }, {
        "dataTime": "2017-06-29 18:00:00",
        "date": "2017-06-29",
        "hour": 18,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "90",
        "xlValue": ""
      },
      {
        "dataTime": "2017-06-29 22:00:00",
        "date": "2017-06-29",
        "hour": 22,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "95",
        "xlValue": ""
      },
      {
        "dataTime": "2017-06-29 22:00:00",
        "date": "2017-07-01",
        "hour": 2,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "95",
        "xlValue": ""
      },
      ],
      "mb": [{
        "dataTime": "2017-06-29 02:00:00",
        "date": "2017-06-29",
        "hour": 2,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "60",
        "xlValue": ""
      }, {
        "dataTime": "2017-06-29 06:00:00",
        "date": "2017-06-29",
        "hour": 6,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "55",
        "xlValue": ""
      },
      {
        "dataTime": "2017-06-29 10:00:00",
        "date": "2017-06-29",
        "hour": 10,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "80",
        "xlValue": ""
      }, {
        "dataTime": "2017-06-29 14:00:00",
        "date": "2017-06-29",
        "hour": 14,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "50",
        "xlValue": ""
      }, {
        "dataTime": "2017-06-29 18:00:00",
        "date": "2017-06-29",
        "hour": 18,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "50",
        "xlValue": ""
      }, {
        "dataTime": "2017-06-29 22:00:00",
        "date": "2017-06-29",
        "hour": 22,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "45",
        "xlValue": ""
      },
      {
        "dataTime": "2017-06-29 22:00:00",
        "date": "2017-07-01",
        "hour": 6,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "88",
        "xlValue": ""
      },
      ],

      "wd": [{
        "dataTime": "2017-06-29 02:00:00",
        "date": "2017-06-29",
        "hour": 2,
        "mbValue": "",
        "phValue": "36.5",
        "type": "gw",
        "value": "37.2",
        "xlValue": ""
      },
      {
        "dataTime": "2017-06-29 06:00:00",
        "date": "2017-06-29",
        "hour": 6,
        "mbValue": "",
        "phValue": "",
        "type": "yw",
        "value": "37",
        "xlValue": ""
      },
      {
        "dataTime": "2017-06-29 10:00:00",
        "date": "2017-06-29",
        "hour": 10,
        "mbValue": "",
        "phValue": "",
        "type": "yw",
        "value": "37",
        "xlValue": ""
      },
      {
        "dataTime": "2017-06-29 14:00:00",
        "date": "2017-06-29",
        "hour": 14,
        "mbValue": "",
        "phValue": "",
        "type": "gw",
        "value": "37.5",
        "xlValue": ""
      }, {
        "dataTime": "2017-06-29 18:00:00",
        "date": "2017-06-29",
        "hour": 18,
        "mbValue": "",
        "phValue": "",
        "type": "kw",
        "value": "37.4",
        "xlValue": ""
      }, {
        "dataTime": "2017-06-29 22:00:00",
        "date": "2017-06-29",
        "hour": 22,
        "mbValue": "",
        "phValue": "",
        "type": "kw",
        "value": "36.8",
        "xlValue": ""
      }],
      "eventDatas": [{
        "dataTime": "2017-06-29 14:00:00",
        "date": "2017-06-30",
        "hour": 2,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "呼吸心跳停止",
        "xlValue": ""
      },
      {
        "dataTime": "2017-06-29 14:00:00",
        "date": "2017-06-30",
        "hour": 6,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "请假",
        "xlValue": ""
      },
      {
        "dataTime": "2017-06-29 18:00:00",
        "date": "2017-06-30",
        "hour": 6,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "出院",
        "xlValue": ""
      },
      {
        "dataTime": "2017-06-30 02:00:00",
        "date": "2017-06-30",
        "hour": 2,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "不升",
        "xlValue": ""
      }, {
        "dataTime": "2017-06-29 02:00:00",
        "date": "2017-06-29",
        "hour": 2,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "出院",
        "xlValue": ""
      }, {
        "dataTime": "2017-06-29 14:00:00",
        "date": "2017-06-29",
        "hour": 14,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "开呼吸机",
        "xlValue": ""
      }, {
        "dataTime": "2017-06-29 22:00:00",
        "date": "2017-06-29",
        "hour": 22,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "关呼吸机",
        "xlValue": ""
      }],
      "hzfx": [{
        "dataTime": "2017-06-29 14:00:00",
        "date": "2017-06-29",
        "hour": 14,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "66",
        "xlValue": ""
      }, {
        "dataTime": "2017-06-29 18:00:00",
        "date": "2017-06-29",
        "hour": 18,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "66",
        "xlValue": ""
      }],
      "respiratorDatas": [{
        "dataTime": "2017-06-29 14:00:00",
        "date": "2017-06-29",
        "hour": 14,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "66",
        "xlValue": ""
      }, {
        "dataTime": "2017-06-29 18:00:00",
        "date": "2017-06-29",
        "hour": 18,
        "mbValue": "",
        "phValue": "",
        "type": "",
        "value": "66",
        "xlValue": ""
      }]
    }

  }} />
}

export default App
