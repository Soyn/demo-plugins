import {
  useReducer,
} from 'react';
var mockTreeState = {
  page: {
    tile: 'demo',
    documents: [
      {
        id: "5-0",
        type: "block",
        style: { bgColor: "#28CB5E", width: "100px", height: "100px" },
        children: [
          {
            id: "4-0",
            type: "block",
            style: { bgColor: "#3C2F65", width: "100px", height: "100px" },
            children: [
              {
                id: "3-0",
                type: "block",
                style: { bgColor: "#066F5B", width: "100px", height: "100px" },
                children: [
                  {
                    id: "2-0",
                    type: "circle",
                    style: { bgColor: "#C1D9D1", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "circle",
                        style: {
                          bgColor: "#B270CB",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#D465AD",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#DB80BC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#10584B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#DF651E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#632545",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#EF946E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "circle",
                        style: {
                          bgColor: "#72FD8A",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#29C0A5",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#4CE41A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#16134E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#F542DF",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#03E93A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#F47DAC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "block",
                        style: {
                          bgColor: "#67A04F",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#44D970",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#342C79",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#340C4C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#0E0346",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#621D3C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#334F0C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "circle",
                        style: {
                          bgColor: "#341F7E",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#1C1028",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#6F587A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#B85ADF",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#7D56ED",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#B2B7CC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#4A8B9B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "circle",
                        style: {
                          bgColor: "#713A3D",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#E1EB4E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#BD3D89",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#E15151",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#6D5828",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#740CEF",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#0AA38F",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "2-1",
                    type: "block",
                    style: { bgColor: "#9E60B0", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "circle",
                        style: {
                          bgColor: "#E719A8",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#931524",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#161218",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#400AB8",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#3CAC7E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#41ADE1",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#BF0CDB",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "block",
                        style: {
                          bgColor: "#AA967F",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#EFA95C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#627498",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#46880D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#3BD648",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#72732E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#6BCAD9",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "block",
                        style: {
                          bgColor: "#A0BF36",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#11323D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#46FA5B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#1FC724",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#718C70",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#D84953",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#327892",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "block",
                        style: {
                          bgColor: "#A4705D",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#0A0912",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#159744",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#64C9F3",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#8F9CAB",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#D791BD",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#E8B2A0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "circle",
                        style: {
                          bgColor: "#A2AB85",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#592BEB",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#637A6A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#045C0E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#B51816",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#94A7FA",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#7904BB",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "2-2",
                    type: "block",
                    style: { bgColor: "#C2A213", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "circle",
                        style: {
                          bgColor: "#6A72B4",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#938D4C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#B0D7FC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#8B0D32",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#E7B42B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#BF72F4",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#7E1B06",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "circle",
                        style: {
                          bgColor: "#BF80EA",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#0ECBC9",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#11EEEA",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#40D4B2",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#A4B383",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#6C7099",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#EC96FD",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "circle",
                        style: {
                          bgColor: "#28C0B8",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#FF847C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#3ADD3F",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#933E61",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#A4BBAC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#CE58C7",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#E66D2D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "circle",
                        style: {
                          bgColor: "#053995",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#E4E0CC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#91F911",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#90175D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#5EA723",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#E53DA1",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#3E18D0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "circle",
                        style: {
                          bgColor: "#9AD403",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#DBE026",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#03B1A6",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#46B598",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#089C57",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#426256",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#583D38",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "2-3",
                    type: "circle",
                    style: { bgColor: "#9D3ACB", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "block",
                        style: {
                          bgColor: "#C1402A",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#6C867B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#D5ED54",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#7637C8",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#DDFD6C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#89B263",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#A2A1C4",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "circle",
                        style: {
                          bgColor: "#6DC41E",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#5D64D3",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#BFC318",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#628F25",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#162233",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#BCE132",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#6358A4",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "block",
                        style: {
                          bgColor: "#F33464",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#33B461",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#3CFF26",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#E88FC8",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#3AE23D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#5FCE26",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#62F3CD",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "block",
                        style: {
                          bgColor: "#5F7AB8",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#7829CD",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#9BC503",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#DA6CBA",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#27A7DF",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#68FD15",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#593844",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "block",
                        style: {
                          bgColor: "#14C925",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#479B89",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#BA51AC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#F68084",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#A5DD6B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#64310D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#4FFE58",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                id: "3-1",
                type: "circle",
                style: { bgColor: "#199A60", width: "100px", height: "100px" },
                children: [
                  {
                    id: "2-0",
                    type: "block",
                    style: { bgColor: "#F21D65", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "block",
                        style: {
                          bgColor: "#089D6F",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#C2FEA3",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#8DEE24",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#39B741",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#A4D56B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#FF6685",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#ACE8F9",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "circle",
                        style: {
                          bgColor: "#123E5B",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#F03FAB",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#584FA6",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#0DEBCB",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#776AC8",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#0294E2",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#C3D89A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "circle",
                        style: {
                          bgColor: "#C2C9D8",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#6089F9",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#7CEEAD",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#A4F10D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#891AF2",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#9416AF",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#EDAA8A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "block",
                        style: {
                          bgColor: "#16D7FC",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#041096",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#5ACF08",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#0E3C94",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#48D1DB",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#C5A870",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#423F34",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "circle",
                        style: {
                          bgColor: "#566250",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#5CA8E1",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#ABF63C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#393714",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#6B86BC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#37229C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#1D24D8",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "2-1",
                    type: "block",
                    style: { bgColor: "#081F4E", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "block",
                        style: {
                          bgColor: "#C84041",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#6E0D04",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#18B82D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#A45A80",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#BEAFD4",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#54D136",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#37D511",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "block",
                        style: {
                          bgColor: "#343694",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#D0D6B8",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#8F7C64",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#DDBFCB",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#487890",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#573112",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#594529",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "block",
                        style: {
                          bgColor: "#7D0007",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#632483",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#28F3E4",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#DA1DDE",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#DF4D37",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#4CA180",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#F1C5E0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "circle",
                        style: {
                          bgColor: "#7B92E5",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#628A28",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#C2A241",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#0E116D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#6FF770",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#BBD3B4",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#A7179D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "circle",
                        style: {
                          bgColor: "#106D2D",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#C56537",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#39EC95",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#84B810",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#57854B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#8CF48F",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#227DD9",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "2-2",
                    type: "block",
                    style: { bgColor: "#5989D5", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "block",
                        style: {
                          bgColor: "#B82280",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#9E3566",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#D4F22B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#003209",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#793A7D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#A35A1D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#7A29A7",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "block",
                        style: {
                          bgColor: "#9A1AA2",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#F03A38",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#8EFD66",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#A035ED",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#913E50",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#B0A696",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#19950D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "block",
                        style: {
                          bgColor: "#F80DC1",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#CA7E5F",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#0DC2A0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#58836A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#BA7875",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#7344DD",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#865D85",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "circle",
                        style: {
                          bgColor: "#2420E5",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#C9F386",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#38FFC4",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#07B956",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#6C49E5",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#DB364B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#BBEF5D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "block",
                        style: {
                          bgColor: "#D53926",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#514E94",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#D15B2C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#FEA7F0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#5B160A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#6A2E5E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#DD52AC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "2-3",
                    type: "block",
                    style: { bgColor: "#2F8E5F", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "circle",
                        style: {
                          bgColor: "#48A523",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#C460EE",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#5A4497",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#38DA00",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#A6BE34",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#B26491",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#C1780A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "circle",
                        style: {
                          bgColor: "#C77C74",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#ADA719",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#D51830",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#8076D3",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#E9530B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#BBECAB",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#167E64",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "block",
                        style: {
                          bgColor: "#7E4DBE",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#47B2FA",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#193480",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#D88652",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#1F1598",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#8429C8",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#907E2D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "block",
                        style: {
                          bgColor: "#C55993",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#859EFA",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#4D40B4",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#F1718F",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#3109CE",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#DB0023",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#DD670A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "block",
                        style: {
                          bgColor: "#F44420",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#679937",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#761CE7",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#386F49",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#5AC757",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#830F68",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#E082D4",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                id: "3-2",
                type: "block",
                style: { bgColor: "#437B72", width: "100px", height: "100px" },
                children: [
                  {
                    id: "2-0",
                    type: "block",
                    style: { bgColor: "#2EF77F", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "circle",
                        style: {
                          bgColor: "#6FBFB8",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#0221A7",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#88E4A4",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#A07AFF",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#3C622C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#73E750",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#12B594",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "circle",
                        style: {
                          bgColor: "#57E47A",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#F8BEB0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#1A4F21",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#6E4C04",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#B2FD05",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#F64AB0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#4C17BE",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "block",
                        style: {
                          bgColor: "#3852AF",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#6992EE",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#B16DE8",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#4814C8",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#008D85",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#1EABDF",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#C2B6A2",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "circle",
                        style: {
                          bgColor: "#55C628",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#E105FC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#B15ECC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#8C4848",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#10AE52",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#042E06",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#9EA79C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "block",
                        style: {
                          bgColor: "#4C03B1",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#C0A5B2",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#9F33A1",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#DF61D8",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#5FBC68",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#6076C3",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#75CD42",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "2-1",
                    type: "circle",
                    style: { bgColor: "#CBF56B", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "block",
                        style: {
                          bgColor: "#4739AF",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#38C0FB",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#486B64",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#A7D1C2",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#5DB0C7",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#977872",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#F808D5",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "circle",
                        style: {
                          bgColor: "#4BDF3B",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#DAE67A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#338563",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#CF3653",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#A00AC5",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#C048B4",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#AD1D0A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "circle",
                        style: {
                          bgColor: "#7CFB35",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#DCEB6D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#500918",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#25AFFA",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#B9A277",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#6ACC58",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#ED878B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "block",
                        style: {
                          bgColor: "#39E7EC",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#212341",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#CFC3B3",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#47BDDD",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#E60989",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#E2E72D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#5C09E8",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "circle",
                        style: {
                          bgColor: "#630ACE",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#A34847",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#374E40",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#BCD0D0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#37F2DF",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#5B466A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#442D45",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "2-2",
                    type: "circle",
                    style: { bgColor: "#B26217", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "circle",
                        style: {
                          bgColor: "#A8DF3C",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#60200B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#C65135",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#E65475",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#368867",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#CF55E2",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#C64DDC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "circle",
                        style: {
                          bgColor: "#F62E58",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#0C26A0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#063E10",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#7470B5",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#90EF34",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#7B7BC2",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#2FB731",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "block",
                        style: {
                          bgColor: "#07001B",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#3D6491",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#7B818B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#532984",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#81250F",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#6E2CCA",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#2DB883",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "circle",
                        style: {
                          bgColor: "#260F9F",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#657122",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#B16634",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#C5BBC0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#B8441B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#6E1484",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#4086B9",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "block",
                        style: {
                          bgColor: "#18B326",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#983CEE",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#45BB36",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#FC7322",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#75B826",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#399F0A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#2E7EFB",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "2-3",
                    type: "circle",
                    style: { bgColor: "#BA5482", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "block",
                        style: {
                          bgColor: "#53B9D6",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#9AA66A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#5E3D93",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#0DE689",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#276B75",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#D6477B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#80B6CF",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "block",
                        style: {
                          bgColor: "#D4EC5E",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#0367C2",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#DE9BDD",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#102A4D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#1ADF46",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#21BDD5",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#4AA3FE",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "block",
                        style: {
                          bgColor: "#A4A22D",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#BA9D12",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#E18434",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#B57A68",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#C049C5",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#18E7E0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#4B2855",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "circle",
                        style: {
                          bgColor: "#1CE113",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#D8D1FC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#7C1F80",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#76F271",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#5D6F3F",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#FB9C18",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#F380E5",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "block",
                        style: {
                          bgColor: "#7605F5",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#E7C195",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#82FB65",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#B00AA1",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#A9691E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#B75586",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#BBCE0F",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "4-1",
            type: "block",
            style: { bgColor: "#181219", width: "100px", height: "100px" },
            children: [
              {
                id: "3-0",
                type: "block",
                style: { bgColor: "#7D50D5", width: "100px", height: "100px" },
                children: [
                  {
                    id: "2-0",
                    type: "block",
                    style: { bgColor: "#DC35D5", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "block",
                        style: {
                          bgColor: "#62CE34",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#3350DF",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#C30A53",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#31D536",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#8C4AB2",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#32FEA4",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#4CBF09",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "block",
                        style: {
                          bgColor: "#1FF226",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#198A3F",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#726D26",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#716946",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#CB0F23",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#BF0D41",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#FD2029",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "circle",
                        style: {
                          bgColor: "#88D526",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#B122BE",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#907F51",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#B3A65E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#926663",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#1929B0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#71977D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "block",
                        style: {
                          bgColor: "#5989E5",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#04FF19",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#6C1062",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#FF600D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#2D00DB",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#7FC7C9",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#156549",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "circle",
                        style: {
                          bgColor: "#C439A2",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#BD08E0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#89FD14",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#021BA0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#C76D52",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#D3123E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#3EC5D5",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "2-1",
                    type: "circle",
                    style: { bgColor: "#E5EE31", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "circle",
                        style: {
                          bgColor: "#EBF297",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#067466",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#B0D5CB",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#3AF30A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#679FE6",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#CE9281",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#FE98BA",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "block",
                        style: {
                          bgColor: "#8EEC46",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#BCC11C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#09397D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#0794B9",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#D15AD8",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#ABB2FA",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#073D50",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "circle",
                        style: {
                          bgColor: "#C588EF",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#B01D62",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#D44E14",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#4158AA",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#F6D7EE",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#5FA7E5",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#422367",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "circle",
                        style: {
                          bgColor: "#AE97D5",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#1B1CE8",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#5F887D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#5DCFB5",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#53E68F",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#DCE84C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#32E518",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "circle",
                        style: {
                          bgColor: "#66159D",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#C96BAA",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#A49D65",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#C007C3",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#D1BC44",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#E02335",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#A86BD7",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "2-2",
                    type: "block",
                    style: { bgColor: "#47DE06", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "circle",
                        style: {
                          bgColor: "#789EBE",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#EFD9A0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#B61229",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#37107C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#329266",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#109C57",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#AA67C9",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "block",
                        style: {
                          bgColor: "#04092D",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#25B930",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#492C3C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#DB94B6",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#EFDF91",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#5786A0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#E4E464",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "circle",
                        style: {
                          bgColor: "#8436EE",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#C9B38C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#E5590E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#4EB7EC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#E1691B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#529766",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#E5F3EB",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "circle",
                        style: {
                          bgColor: "#1EEF1F",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#B922C6",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#F92140",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#FB0937",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#3A3AB7",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#2F1A1A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#1CB8AA",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "block",
                        style: {
                          bgColor: "#4F3D02",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#52589C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#254DE8",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#92A5CD",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#C810AE",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#A6C213",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#E1804E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "2-3",
                    type: "circle",
                    style: { bgColor: "#EEA0E5", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "circle",
                        style: {
                          bgColor: "#A1EEE6",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#4A24C0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#40618D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#5CB011",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#851F9F",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#F936D7",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#6E9BFF",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "block",
                        style: {
                          bgColor: "#A827B6",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#9E6677",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#440DBC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#75F010",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#DFB5A1",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#284B50",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#38B431",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "circle",
                        style: {
                          bgColor: "#17EE68",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#F137C0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#C44EE7",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#6F0AC3",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#543BFF",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#1366DC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#67400A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "circle",
                        style: {
                          bgColor: "#FB777F",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#5FDCF6",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#FC06D2",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#F6A05E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#53FC3A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#7DF7FC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#BD0A55",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "block",
                        style: {
                          bgColor: "#F04BF4",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#4BB25E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#C06C40",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#67048E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#E95966",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#2C192B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#8CBC05",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                id: "3-1",
                type: "circle",
                style: { bgColor: "#2285DE", width: "100px", height: "100px" },
                children: [
                  {
                    id: "2-0",
                    type: "block",
                    style: { bgColor: "#874350", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "circle",
                        style: {
                          bgColor: "#81F370",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#0F3392",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#25DF6A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#5D849A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#3E2B6D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#DC8AC8",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#BDA86B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "circle",
                        style: {
                          bgColor: "#305FA7",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#8A1608",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#142FAF",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#E770D6",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#4CEDA4",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#36531B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#A741BC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "block",
                        style: {
                          bgColor: "#D0A01F",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#9B1FE3",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#09029A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#81C0C0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#0AB661",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#A148C9",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#2D22CA",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "circle",
                        style: {
                          bgColor: "#837F28",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#BB8F42",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#F44C48",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#313A0F",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#D74896",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#C5970F",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#07B172",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "circle",
                        style: {
                          bgColor: "#BF616F",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#40BCE5",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#F77EA3",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#03F97E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#21E15E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#FBC0C6",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#DE5C52",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "2-1",
                    type: "block",
                    style: { bgColor: "#730DD1", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "circle",
                        style: {
                          bgColor: "#6E65A7",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#05A50E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#6D21CB",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#E53AF9",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#062F77",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#B93791",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#1CA3F6",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "circle",
                        style: {
                          bgColor: "#98082D",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#0FAC1F",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#D5B839",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#1F333B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#79FB38",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#CB6832",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#6FF431",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "block",
                        style: {
                          bgColor: "#075711",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#C589AB",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#36DE8A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#59F803",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#F5D0B6",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#B122DE",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#E20FE1",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "block",
                        style: {
                          bgColor: "#F96D5E",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#3C83CD",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#1958E7",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#E7B394",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#7685D4",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#DCF40F",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#4E8C01",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "block",
                        style: {
                          bgColor: "#CE4B73",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#22B85D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#5424FE",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#7CE568",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#06B2E5",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#26C90E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#689DBA",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "2-2",
                    type: "circle",
                    style: { bgColor: "#39982F", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "block",
                        style: {
                          bgColor: "#D9356E",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#6F1514",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#44CFE2",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#22C904",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#588075",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#127054",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#98DDAC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "circle",
                        style: {
                          bgColor: "#94B751",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#26B727",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#BCD5C4",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#697DDF",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#250932",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#BF8B5A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#82F6A7",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "block",
                        style: {
                          bgColor: "#68C234",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#49950E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#76B9D8",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#BC674C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#17497E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#B69023",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#2594AA",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "circle",
                        style: {
                          bgColor: "#0E9E8B",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#E5689C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#87AD82",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#1129A6",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#C29B60",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#67EA16",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#E2CB30",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "circle",
                        style: {
                          bgColor: "#45B612",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#8BE826",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#8B8AF7",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#4C7148",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#9E7FE5",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#062576",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#5F1B37",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "2-3",
                    type: "block",
                    style: { bgColor: "#118DDC", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "block",
                        style: {
                          bgColor: "#5870B0",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#53F64E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#2A9E30",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#EC53D8",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#EA60A2",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#BAA487",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#452101",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "block",
                        style: {
                          bgColor: "#8A47C9",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#E025E2",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#09B3B5",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#5DBC97",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#29A923",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#D28F8B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#989978",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "block",
                        style: {
                          bgColor: "#7C52EE",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#32A11A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#B0818C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#D66A75",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#AE7A0F",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#31E4F5",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#49FF91",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "circle",
                        style: {
                          bgColor: "#D3A76D",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#3C0A98",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#90CF1B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#DA4680",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#0C8591",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#4FEECB",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#DFDA93",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "block",
                        style: {
                          bgColor: "#88E039",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#0CD048",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#DD5410",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#65BA64",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#33683B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#01D595",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#7118BC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                id: "3-2",
                type: "block",
                style: { bgColor: "#5DFD68", width: "100px", height: "100px" },
                children: [
                  {
                    id: "2-0",
                    type: "circle",
                    style: { bgColor: "#D682D6", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "block",
                        style: {
                          bgColor: "#0FDAE1",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#6FED39",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#93C8BE",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#56891D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#9D9263",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#0CD624",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#253A87",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "circle",
                        style: {
                          bgColor: "#8C4240",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#D0CB6B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#0B34F0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#0BE690",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#E30AE6",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#790C3D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#243E88",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "block",
                        style: {
                          bgColor: "#A9D348",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#20441F",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#C870D8",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#9AC4C0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#FDDE8D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#493EF3",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#25AD3C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "block",
                        style: {
                          bgColor: "#BF56B5",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#269612",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#54053A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#5836F2",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#B58841",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#568BF0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#745A8B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "block",
                        style: {
                          bgColor: "#41D394",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#45B519",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#835E60",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#AC3796",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#ED8059",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#17F282",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#4FF068",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "2-1",
                    type: "circle",
                    style: { bgColor: "#87BD42", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "block",
                        style: {
                          bgColor: "#874E06",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#718701",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#9E78A2",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#0AEC2B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#BCB04A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#74AAE5",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#18D92D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "block",
                        style: {
                          bgColor: "#EC08C7",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#8D7900",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#3A85FA",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#E1B9C3",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#24651B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#1F9664",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#EFF192",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "block",
                        style: {
                          bgColor: "#1260C4",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#C2D212",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#888640",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#8096A2",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#042DA4",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#82CF0F",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#CE64EF",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "circle",
                        style: {
                          bgColor: "#DE4F6A",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#5078D8",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#05405C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#1ABE27",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#10533E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#276792",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#139052",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "block",
                        style: {
                          bgColor: "#B05D96",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#9E25F3",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#18253C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#F7926B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#3B85B5",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#BCF20E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#D2FDAC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "2-2",
                    type: "block",
                    style: { bgColor: "#BA6EA1", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "block",
                        style: {
                          bgColor: "#C19413",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#D8D0E9",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#636369",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#9E4DDD",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#914127",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#837E91",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#4D3FD6",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "block",
                        style: {
                          bgColor: "#D9C359",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#E99A42",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#C2D9F1",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#9F8D76",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#B7BE45",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#E941AB",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "circle",
                            style: {
                              bgColor: "#CAAEA2",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "block",
                        style: {
                          bgColor: "#1759B0",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#F78F16",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#5289B8",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#55EFB7",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#99336E",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#EE6208",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#D1D04C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "circle",
                        style: {
                          bgColor: "#1FF28C",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#90DB8D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#AB724D",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#D11C0F",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#F58ED2",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#F17618",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#A74466",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "circle",
                        style: {
                          bgColor: "#7EA947",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#FEE987",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#22FE7B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#4D303A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#5FFCFB",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#44A75A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#9CADCD",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "2-3",
                    type: "circle",
                    style: { bgColor: "#12DAE4", width: "100px", height: "100px" },
                    children: [
                      {
                        id: "1-0",
                        type: "circle",
                        style: {
                          bgColor: "#2CDB2D",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#CFC682",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#A082CC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#AD4F22",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#7C107C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#0630F1",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#999FAC",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-1",
                        type: "circle",
                        style: {
                          bgColor: "#CDA36F",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "block",
                            style: {
                              bgColor: "#06649F",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#8B4BBD",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#598378",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#65B81A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "block",
                            style: {
                              bgColor: "#2BB658",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#F9200B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-2",
                        type: "block",
                        style: {
                          bgColor: "#28D4B4",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#FFCF6B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#527E36",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "block",
                            style: {
                              bgColor: "#23973B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#06FDF4",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#689171",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#CD937B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-3",
                        type: "circle",
                        style: {
                          bgColor: "#C5467F",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#2EE4C6",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "block",
                            style: {
                              bgColor: "#432514",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#CAE233",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "block",
                            style: {
                              bgColor: "#5A75B7",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#3C8A90",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#135D5C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: "1-4",
                        type: "circle",
                        style: {
                          bgColor: "#FA5569",
                          width: "100px",
                          height: "100px",
                        },
                        children: [
                          {
                            id: "0-0",
                            type: "circle",
                            style: {
                              bgColor: "#8CB25A",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-1",
                            type: "circle",
                            style: {
                              bgColor: "#8622C0",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-2",
                            type: "circle",
                            style: {
                              bgColor: "#FF90CF",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-3",
                            type: "circle",
                            style: {
                              bgColor: "#C51F5B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-4",
                            type: "circle",
                            style: {
                              bgColor: "#ADB19C",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                          {
                            id: "0-5",
                            type: "block",
                            style: {
                              bgColor: "#8D107B",
                              width: "100px",
                              height: "100px",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

const initState = {
  page: {
    tile: 'demo',
    documents: [
      {
        id: "block-1",
        type: "block",
        style: {
          bgColor: "red",
          color: "yellow",
          opacity: "0.5",
          width: "200px",
          height: "100px"
        },
        children: [
          {
            id: "text-1",
            type: "text",
            style: {
              bgColor: "red",
              color: "yellow",
              opacity: "0.5",
              width: "200px",
              height: "100px"
            },
            text: "Text",
            children: [],
          }
        ]
      }
    ]
  },
};

const styleReducer = (style, action) => {
  switch (action.type) {
    case 'bgColor': {
      return {
        ...style,
        bgColor: payload,
      }
    }
    case 'color': {
      return {
        ...style,
        color: payload,
      }
    }
    case 'width': {
      return {
        ...style,
        width: payload,
      }
    }
    case 'height': {
      return {
        ...style,
        height: payload,
      }
    }
    case 'opacity': {
      return {
        ...style,
        opacity: payload,
      }
    }
    default:
      return doc;
  }
}

const pageReducer = (page, action) => {
  const { type, id, payload } = action;
  switch (type) {
    case 'title': {
      return {
        ...page,
        title: payload,
      }
    }
    case 'add': {
      return {
        ...page,
        documents: page.documents.slice().push(payload)
      }
    }
    case 'remove': {
      const idx = page.documents.findIndex(d => d.id === id);
      if (idx > -1) {
        return {
          ...page,
          documents: page.documents.splice(idx, 1),
        }
      }
      return page;
    }
    case 'setPage': {
      return {
        ...payload,
      }
    }
    default:
      return {
        ...page,
        documents: documents.map(d => docReducer(d, action)),
      };
  }
}
const docReducer = (d, action) => {
  const [id] = action;
  if (id === d.id) {
    return {
      ...d,
      style: styleReducer(d.style, action),
    }
  }
  return d;
}
export const useApp = () => {
  const [app, dispatch] = useReducer((state, action) => {
    return {
      page: pageReducer(state.page, action),
    }
  }, initState);
  return [
    app,
    dispatch,
  ]
}