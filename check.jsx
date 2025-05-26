import React from "react";
import PropTypes from "prop-types";
import { Component } from "react";
import "./check.css"
class Check extends Component{
    render()
    {
        return(

            <>
                <h3>React JS Prop validation Check</h3>

                <table>
                    <tr className="att">
                      
                        <td>Types</td>
                        <td>Value</td>
                        <td>Valid</td>
                       
                    </tr>
                    <tr>
                        <td>Array</td>
                        <td>{this.props.arr} </td>
                        <td>{Array.isArray(this.props.arr)? "true" : "false"}</td>
                    </tr>

                    <tr>
                        <td>Boolean</td>
                        <td>{this.props.val ? "true" : "false"}</td>
                        <td>{typeof(this.props.val) == "boolean" ? "true":"false" }</td>
                    </tr>
                    <tr>
                        <td>function</td>
                        <td>{this.props.fun}</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>String</td>
                        <td>{this.props.text}</td>
                        <td>{typeof(this.props.text) === "string" ? "true" : "false"}</td>
                    </tr>
                    <tr>
                        <td>Number</td>
                        <td>{this.props.num}</td>
                        <td>{typeof(this.props.num) == "number" ? "true" : "false"}</td>
                    </tr>
                </table>
            </>
        )
    }

}
Check.propTypes={

    arr:PropTypes.array.isRequired,
    val:PropTypes.bool.isRequired,
    fun:PropTypes, 
    text:PropTypes.string.isRequired,
    num:PropTypes.number
}

Check.defaultProps={

    arr:[10 , 20 , 30],
    val:true,
    fun:100,
    text:"Hello People",
    num:"983025"
}

export default Check;