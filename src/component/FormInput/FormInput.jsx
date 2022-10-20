import React from "react";
import './FormInput.scss';

export function FormInput(props) {

    // DETRUKTURYZACJA
    // wszystko czego NIE potrzebujemy najpierw sobie opisujemy czyli: label, onChange, id
    // a potem rozsypujemy resztę którą będziemy całościowo chcieli wykorzystać w inputcie poniżej do renderu
    const {label, onChange, id, ...otherInputProps} = props

    return (
        <div className="formInput">
            <label>{label}</label>
            <input key={id}
                // key={props.id}
                // name={props.name}
                // type={props.type}
                // placeholder={props.placeholder}
                {...otherInputProps}

                onChange={onChange}
            />
        </div>
    )
}