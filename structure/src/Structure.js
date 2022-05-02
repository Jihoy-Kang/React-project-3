import React,{ useState } from 'react';
import { Button, Table  } from 'react-bootstrap';
import './Structure.scss';

function Structure(){
    let [test,test변경] = useState([1,2,3])
    return(
        <div>
            <div id="structureHead">
                <h1>Blind Structure</h1>
            </div>
            <div id="structureArea">
                <div id="structureList">
                    <div className="title">
                        Structure List
                    </div>
                    <div>
                        <div>{test}</div>
                        <div>1</div>
                        <div>11</div>
                    </div>
                </div>
                <div id="structureTable">
                    <div className="title">
                        New Structure
                    </div>
                    <Table responsive="md">
                        <thead>
                            <tr>
                                <th>Level</th>
                                <th>Smal</th>
                                <th>Big</th>
                                <th>Ante</th>
                                <th>Time</th>
                                <th>Break</th>

                            </tr>
                        </thead>
                        
                        <Blinds test={test}></Blinds>     
                        
                    </Table>
                    <Button onClick={()=>{
                        let copy = [...test]
                        copy.push(5)
                        test변경(copy)
                    }}>저장하기</Button>
                </div>
            </div>
        </div>
    )
}

export default Structure;

function Blinds(props){
    let table = []
    for(let i = 1; i <= 25;i++){
        let id ={
            sb : "sb"+i,
            bb : "bb"+i,
            ante : "at"+i,
            time : "time"+i,
            break : "break"+i,
        }
        table.push(<tr>
        <td>{i}</td>
        <td className='blind'><input type="number" id={id.sb} onChange={(e)=>{
            let copy = [...test]
            copy.push("하")
            /* copy[i].id.sb = e */
            props.test변경(copy)
            }}></input></td>
        <td className='blind'><input type="number" id={id.bb}></input></td>
        <td className='blind'><input type="number" id={id.ante}></input></td>
        <td className='time'><input type="number" id={id.time}></input></td>
        <td className='time'><input type="number" id={id.break}></input></td>
        </tr>)

    }
    return(
    <tbody>
        {table}
    </tbody>
        
    )
}

function save_structure(){
    console.log("저장")
}