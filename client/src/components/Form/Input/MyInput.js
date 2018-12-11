import React, { Component } from "react"


class MyInput extends Component {
    render() {
        const { DisplayName, type, name, value, id, changeData, errors, placeholder,additionalData
             } = this.props.info;

        return (
            <div className="container-fluid p-0">
                <label className="label" htmlFor={id}>{DisplayName} <span className="additionalData">{additionalData}</span></label>
                <input
                    type={type}
                    className={`form-control Rectangle-59 ${errors.errorsObj[name] && errors.errorsObj[name].message.length && "errorElem"}`}
                    name={name}
                    onChange={(ev) => changeData(ev)}
                    value={value}
                    id={id}
                    placeholder={placeholder}
                />
                {
                    errors.errorsObj[name] && <p className="error"  >{errors.errorsObj[name].message}</p>
                }


            </div>
        )
    }
}

class MySelect extends Component {
    render() {
        const { id, name, options, DisplayName, changeData, errors } = this.props.info;
        console.log("My-Options",options);
        
        return (
            <div className="container-fluid p-0">
                <label className="label" htmlFor={id}>{DisplayName}</label>
                <select className={`form-control Rectangle-59 ${
                    errors.errorsObj[name] && errors.errorsObj[name].message.length && "errorElem"
                    }`} name={name} onChange={(ev) => changeData(ev)} id={id}>

                    <option className="myOptions" value="Select">Select</option>
                    {options.map((item, index) => {
                        return <option className="myOptions" key={index} value={item.value}>{item.DisplayName}</option>
                    })}

                </select>

                {
                    errors.errorsObj[id] && errors.errorsObj[id].message && < p className="error"  >{errors.errorsObj[id].message}</p>
                }

            </div>
        )
    }
}

class MyRadio extends Component {
    render() {
        const { type, name, options, DisplayName, changeData, errors } = this.props.info;
        return (
            <div className="container-fluid p-0">
                <h5 className="label radio-label" >{DisplayName}</h5>
                {
                    options.map((item, index) => {
                        return (
                            <div key={index} className="radio-group">
                                <label className="radioLabel" htmlFor={item.id}>{item.DisplayName}</label>
                                <input
                                    type={type}
                                    className="Ellipse-13"
                                    name={name}
                                    ref={item.id}
                                    onChange={(ev) => changeData(ev)} value={item.value}
                                    id={item.id}
                                    placeholder={item.placeholder} />
                                <span onClick={() => this.refs[item.id].click()}></span>
                            </div>
                        )
                    })
                }
                {
                    errors.errorsObj[name] && <p className="error" >{errors.errorsObj[name].message}</p>
                }


            </div>
        )
    }
}

export { MyInput, MySelect, MyRadio }