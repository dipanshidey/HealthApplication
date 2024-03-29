import circle from './circle.png'
import wrong from './wrong.png'
import tick from './tick.png'

import "./Tablestruc.css"

export function Tablestruc() {
    return (
        <>
            <div class="upper"><table class="table">
                
                <tbody>
                    <tr class="drow">
                        <td  id="col">
                            <div class="input-group abtn">
                                <input type="text" class="form-control d" aria-label="Text input with dropdown button"/>
                                    <button class="btn btn-primary dropdown-toggle e" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                            </div>

                            
                        </td>
                        <td  class="f"><input type="text" class="text" ></input></td>
                        <td class="up"><button class="dbtn"></button></td>
                        <td class="down"><button class="dbtn"></button></td>
                        <td class="myimg"><img class="h" src={wrong}height="13px"></img></td>
                    </tr>

                    <tr class="drow">
                        <td class="y"><span class="w"> The patient is allergic to the component....</span></td>
                    </tr>


                    <tr class="drow">
                        <td id="col">
                            <div class="input-group abtn">
                                <input type="text" class="form-control d" aria-label="Text input with dropdown button" />
                                <button class="btn btn-primary dropdown-toggle e" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </div>


                        </td>
                        <td class="f"><input type="text" class="text" ></input></td>
                        <td class="up"><button class="dbtn"></button></td>
                        <td class="down"><button class="dbtn"></button></td>
                        <td class="myimg"><img class="h" src={tick} height="13px"></img></td>
                    </tr>

                    <tr class="drow">
                        <td class="y"><span class="w2"> All good  ! According to the patients............</span></td>
                    </tr>

                    <tr class="drow">
                        <td id="col">
                            <div class="input-group abtn">
                                <input type="text" class="form-control d" aria-label="Text input with dropdown button" />
                                <button class="btn btn-primary dropdown-toggle e" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </div>


                        </td>
                        <td class="f"><input type="text" class="text" ></input></td>
                        <td class="up"><button class="dbtn"></button></td>
                        <td class="down"><button class="dbtn"></button></td>
                        <td class="myimg"><img class="h" src={tick} height="13px"></img></td>
                    </tr>

                    <tr class="drow">
                        <td class="y"><span class="w2">  All good  ! According to the patients............</span></td>
                    </tr>






                    
                </tbody>
            </table>

















            </div>
            <div class="lower"> <img  class="img" src={circle} align="right" height="37px" width="37px" ></img></div>
        </>

    )
}























