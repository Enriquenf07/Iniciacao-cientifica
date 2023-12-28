import {
    useQuery,
    useMutation,
    useQueryClient,
  } from '@tanstack/react-query'  
import {useEffect, useState} from "react"

import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SliderChart from './SliderChart';
import Switch from '@mui/material/Switch';
import { TextField, Typography } from '@mui/material';
import useStore from '../../../../store/UseStore';

export default function Chart({data}) {
    // Access the client

    const [line, setLine] = useState(0)
    const [zoom, setZoom] = useState(10)
    const [zoomH, setZoomH] = useState(600)
    const [sliderIsActive, setSlider] = useState(false)
    const [domain, setDomain] = useState(1000)

    function handleDomain(e){
        setDomain(Number(e.target.value))
        console.log(e.target.value)
    }

    if(line == 0){   
        return (
        <div>
            <div className=' flex px-8 mt-6 justify-between'>
                <h1 className='text-2xl pb-8'>População</h1>
                <div className='flex gap-10 w-[70vw] items-center bg-zinc-100 justify-center rounded-xl'>
                    <Switch onChange={()=>setSlider((prev) => !prev)}/>
                    <div>
                        <Typography align=''>Largura</Typography>
                    <SliderChart value={zoom} setValue={setZoom} bool={sliderIsActive} initialValue={1800} maxValue={4000}></SliderChart>
                    </div>
                    <div>
                    <Typography align=''>Altura</Typography>
                    <SliderChart value={zoomH} setValue={setZoomH} bool={sliderIsActive} initialValue={600} maxValue={4000}></SliderChart>
                    </div>
                    <TextField id="standard-basic" label="Dominio maximo" variant="standard" onChange={handleDomain} />
                    <Button variant='text' className='h-10 ' onClick={() => setLine(0)}>Resetar gráfico</Button>
                </div>
                
            </div>
            <div className="w-screen flex flex-col gap-10 mt-0 mb-8">
                    <div>
                            <LineChart
                            width={zoom} height={zoomH}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <YAxis type="number" domain={[0, dataMax => (domain)]}/>
                            <Tooltip />
                            <Legend />
                            <Line onMouseDown={()=>setLine(1)} type="monotone" dataKey="a" name='A' stroke="#8884d8" activeDot={{r:4}} />
                            <Line onClick={() => setLine(2)} type="monotone" dataKey="b" name='B' stroke="#82ca9d" activeDot={{ r: 4 }}/>
                            <Line onClick={() => setLine(3)} type="monotone" dataKey="c" name='C'stroke="#ff0000" activeDot={{ r: 4 }}/>
                            <Line onClick={() => setLine(4)} type="monotone" dataKey="d" name='D' stroke="#ffff00" activeDot={{ r: 4 }}/>
                            <Line onClick={() => setLine(5)} type="monotone" dataKey="e" name='E' stroke="#040273" activeDot={{ r: 4 }}/>
                            </LineChart>
                        
                    </div >
                </div>
                <div className=' flex px-8 mt-6'>
                <h1 className='text-2xl pb-8'>Indice de shannon</h1>
                </div>
                <div className="w-screen flex flex-col gap-10 mt-0">
                    <div>
                            <LineChart
                            width={zoom}
                            height={zoomH}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            {/* <XAxis dataKey="t" /> */}
                            <YAxis type="number" domain={[0, 2]}/>
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="si" name='Indice de Shannon' stroke="#8884d8" activeDot={{ r: 4 }} />
                            <Line type="monotone" dataKey="sp" name='Indice de Simpson' stroke="#ffff00" activeDot={{ r: 4 }} />
                            </LineChart>
                    </div >
                </div>
        </div>
        )
    }

    if(line == 1){   
        return (
        <div>
            <div className=' flex px-8 mt-6 justify-between'>
                <h1 className='text-2xl pb-8'>População</h1>
                <Button variant='text' className='h-10' onClick={() => setLine(0)}>Resetar gráfico</Button>
            </div>
            <div className="w-screen flex flex-col gap-10 mt-0 mb-8">
                    <div>
                        <ResponsiveContainer width="100%" aspect={3}>
                            <LineChart
                            width={500}
                            height={500}
                            data={data}
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
                            <Line onClick={() => setLine(1)} type="monotone" dataKey="a" stroke="#8884d8" activeDot={{ r: 4 }} />
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
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            {/* <XAxis dataKey="t" /> */}
                            <YAxis type="number" domain={[0, 2]}/>
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="si" name='Indice de Shannon' stroke="#8884d8" activeDot={{ r: 4 }} />
                            <Line type="monotone" dataKey="sp" name='Indice de Simpson' stroke="#ffff00" activeDot={{ r: 4 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div >
                </div>
        </div>
        )
    }

    if(line == 2){   
        return (
        <div>
            <div className=' flex px-8 mt-6 justify-between'>
                <h1 className='text-2xl pb-8'>População</h1>
                <Button variant='text' className='h-10' onClick={() => setLine(0)}>Resetar gráfico</Button>
            </div>
            <div className="w-screen flex flex-col gap-10 mt-0 mb-8">
                    <div>
                        <ResponsiveContainer width="100%" aspect={3}>
                            <LineChart
                            width={500}
                            height={500}
                            data={data}
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
                            <Line onClick={() => setLine(2)} type="monotone" dataKey="b" stroke="#82ca9d" activeDot={{ r: 4 }}/>
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
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            {/* <XAxis dataKey="t" /> */}
                            <YAxis type="number" domain={[0, 2]}/>
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="si" name='Indice de Shannon' stroke="#8884d8" activeDot={{ r: 4 }} />
                            <Line type="monotone" dataKey="sp" name='Indice de Simpson' stroke="#ffff00" activeDot={{ r: 4 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div >
                </div>
        </div>
        )
    }

    if(line == 3){   
        return (
        <div>
            <div className=' flex px-8 mt-6 justify-between'>
                <h1 className='text-2xl pb-8'>População</h1>
                <Button variant='text' className='h-10' onClick={() => setLine(0)}>Resetar gráfico</Button>
            </div>
            <div className="w-screen flex flex-col gap-10 mt-0 mb-8">
                    <div>
                        <ResponsiveContainer width="100%" aspect={3}>
                            <LineChart
                            width={500}
                            height={500}
                            data={data}
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
                            <Line onClick={() => setLine(3)} type="monotone" dataKey="c" stroke="#ff0000" activeDot={{ r: 4 }}/>
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
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            {/* <XAxis dataKey="t" /> */}
                            <YAxis type="number" domain={[0, 2]}/>
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="si" name='Indice de Shannon' stroke="#8884d8" activeDot={{ r: 4 }} />
                            <Line type="monotone" dataKey="sp" name='Indice de Simpson' stroke="#ffff00" activeDot={{ r: 4 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div >
                </div>
        </div>
        )
    }

    if(line == 4){   
        return (
        <div>
            <div className=' flex px-8 mt-6 justify-between'>
                <h1 className='text-2xl pb-8'>População</h1>
                <Button variant='text' className='h-10' onClick={() => setLine(0)}>Resetar gráfico</Button>
            </div>
            <div className="w-screen flex flex-col gap-10 mt-0 mb-8">
                    <div>
                        <ResponsiveContainer width="100%" aspect={3}>
                            <LineChart
                            width={500}
                            height={500}
                            data={data}
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
                            <Line onClick={() => setLine(4)} type="monotone" dataKey="d" stroke="#ffff00" activeDot={{ r: 4 }}/>
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
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            {/* <XAxis dataKey="t" /> */}
                            <YAxis type="number" domain={[0, 2]}/>
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="si" name='Indice de Shannon' stroke="#8884d8" activeDot={{ r: 4 }} />
                            <Line type="monotone" dataKey="sp" name='Indice de Simpson' stroke="#ffff00" activeDot={{ r: 4 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div >
                </div>
        </div>
        )
    }

    if(line == 5){   
        return (
        <div>
            <div className=' flex px-8 mt-6 justify-between'>
                <h1 className='text-2xl pb-8'>População</h1>
                <Button variant='text' className='h-10' onClick={() => setLine(0)}>Resetar gráfico</Button>
            </div>
            <div className="w-screen flex flex-col gap-10 mt-0 mb-8">
                    <div>
                        <ResponsiveContainer width="100%" aspect={3}>
                            <LineChart
                            width={500}
                            height={500}
                            data={data}
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
                            <Line onClick={() => setLine(5)} type="monotone" dataKey="e" stroke="#040273" activeDot={{ r: 4 }}/>
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
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            {/* <XAxis dataKey="t" /> */}
                            <YAxis type="number" domain={[0, 2]}/>
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="si" name='Indice de Shannon' stroke="#8884d8" activeDot={{ r: 4 }} />
                            <Line type="monotone" dataKey="sp" name='Indice de Simpson' stroke="#ffff00" activeDot={{ r: 4 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div >
                </div>
        </div>
        )
    }
  }
  