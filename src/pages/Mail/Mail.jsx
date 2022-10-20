import React from "react";
import {useState} from "react";
import './Mail.scss';
import {FormInput} from "../../component/FormInput/FormInput.jsx";

export function Mail() {

    //zmiana generowana przez uzytkownika
    const [values, setValues] = useState({
        firstName: "",
        email: "",
        message: "",
    });
    console.log(values)


    // TBALICA WLASCIWOSCI INPUTÓW
    const inputs = [
        {
            id: 1,
            name: "firstName",
            type: "text",
            placeholder: "Podaj Pierwsze Imię",
            label: "Twoje Imię"
        },
        {
            id: 2,
            name: "email",
            type: "text",
            placeholder: "Podaj E-mailllos",
            label: "E-mail Label"
        },
        {
            id: 3,
            name: "message",
            type: "checkbox",
            placeholder: "Napisz do mnie wiadomość",
            label: "AAATutaj przylutuj swój tekst swoje myśli pytania i hasła do konta bankowego",
        },
    ]

    //zmiana wartosci values
    const onChange = (event) => {
        // rozsypuje poprzednie poprzednie values
        // [event.target.name] sa to imiona name w values np: firstName, email i message
        // event.target.value a to jest to co wpisuje nam uzytkownik
        setValues({...values, [event.target.name]: event.target.value})
        console.log("event.target.value -> " + event.target.value);
    }
    console.log("POZA event.target.value -> " + event.target.value);

    const handleSubmit = (eventThatTriggered) => {
        eventThatTriggered.preventDefault();
    }

    return (
        <div className="sectionMail__container">
            <section className="sectionMail__one">
                <h1>Mail</h1>
                <textarea>Texxxxxtowow</textarea>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aliquid ea facere, ipsa nesciunt
                    quis sequi sit vel voluptates. Amet aperiam est et expedita harum itaque maxime minus nihil quo
                    similique. Atque aut fuga unde? Cum, dicta dolorum id maiores placeat quas repellendus repudiandae
                    saepe suscipit temporibus unde voluptatibus!</p>


                {/*MAPOWANIE PO TABLICY INPUTS co tworzy nam tyle komponentów ile znajduje się w tablicy
                unikatowy klucz key rowny id
                */}
                <form className="sectionMail__form" onSubmit={handleSubmit}>
                    {inputs.map((input) => (
                            <FormInput
                                key={input.id}

                                // name={input.name}
                                // type={input.type}
                                // placeholder={input.placeholder}
                                // label={input.label}

                                //zamiast tego co na gorze rozpisuje wszystko
                                {...input}

                                //{/*bierze obiekt values i szuka input imienia*/}
                                // np dla email w obiekcie o id 2 bedzie to pusty strinh w values nadany email
                                value={values[input.name]}

                                // przekazuje funckje onChange to komponentu FormInput
                                onChange={onChange}
                            />
                        )
                    )}

                    <button>Submit</button>
                </form>
            </section>
        </div>
    )
}