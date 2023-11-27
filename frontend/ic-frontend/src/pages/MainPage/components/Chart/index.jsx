import {
    useQuery,
    useMutation,
    useQueryClient,
  } from '@tanstack/react-query'  
import {useState} from "react"

import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SliderChart from './SliderChart';

export default function Chart({data}) {
    // Access the client
    

    return (
      <div>
        <div className=' flex px-8 mt-6'>
              <h1 className='text-2xl pb-8'>População</h1>
        </div>
        <div className="w-screen flex flex-col gap-10 mt-0 mb-8">
                <div>
                    <ResponsiveContainer width="100%" aspect={3}>
                        <LineChart
                        width={500}
                        height={500}
                        data={data.lista}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <YAxis type="number" domain={[0, 'auto']}/>
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="a" stroke="#8884d8" activeDot={{ r: 4 }} />
                        <Line type="monotone" dataKey="b" stroke="#82ca9d" activeDot={{ r: 4 }}/>
                        <Line type="monotone" dataKey="c" stroke="#ff0000" activeDot={{ r: 4 }}/>
                        <Line type="monotone" dataKey="d" stroke="#ffff00" activeDot={{ r: 4 }}/>
                        <Line type="monotone" dataKey="e" stroke="#040273" activeDot={{ r: 4 }}/>
                        </LineChart>
                    </ResponsiveContainer>
                    
                </div >
            </div>
            <div className=' flex px-8 mt-6'>
              <h1 className='text-2xl pb-8'>Indice de shannon</h1>
            </div>
            <div className="w-screen flex flex-col gap-10 mt-0">
                <div>
                    <ResponsiveContainer width="100%" aspect={3}>
                        <LineChart
                        width={500}
                        height={500}
                        data={data.lista}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        {/* <XAxis dataKey="t" /> */}
                        <YAxis type="number" domain={[0, 3]}/>
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="si" name='Indice de Shannon' stroke="#8884d8" activeDot={{ r: 4 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div >
            </div>
      </div>
    )
  }
  