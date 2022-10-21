import React, {useEffect} from "react";
import {useRef} from "react";
import {useState} from "react";
import './Mail.scss';
import {FormInput} from "../../component/FormInput/FormInput.jsx";
// import supabase from "../../config/supabaseClient.js";
import supabase from "../../config/supabaseClient";

export function Mail() {

    //zmiana generowana przez uzytkownika
    const [values, setValues] = useState({
        firstName: "",
        email: "",
        message: "",
        // checkboxSubsribe: 'false',
    });
    console.log(values)
    const ref = useRef(null);

    const [formError, setFormError] = useState(null);


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
        // {
        //     id: 3,
        //     name: "checkboxSubsribe",
        //     type: "checkbox",
        //     label: "Chcę dostawać gupie maile... ",
        // },
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


    let finalValues = [];


    console.log(supabase)
    const [fetchError, setFetchError] = useState(null)
    const [myClients, setMyClients] = useState(null)

    //USE EFFECT HOOK FIRES A FUNCTION WHEN COMPONENET FIRST RENDER
    useEffect(() => {
        const fetchClientData = async () => {
            const {data, error} = await supabase
                .from('Mailing Table')
                .select()

            if (error) {
                setFetchError('Could not fetch Mailing Table')

                // reset myClients to null
                setMyClients(null)

                console.log("... my error ...")
                console.log(error)
            }
            if (data) {
                //data ktore pobralismy
                setMyClients(data)
                setFetchError(null)
            }
        }

        fetchClientData()

    }, [])
    //empty array makes it fire once


    const handleSubmit = async (eventThatTriggered) => {
        eventThatTriggered.preventDefault();

        if (!values.firstName) {
            setFormError("Name is missing dude.")
            return
        }
        // console.log("Values put...")
        // console.log(values.firstName, values.email, values.message)


        const {data, error} = await supabase
            .from('Mailing Table')
            .insert({firstNameS: values.firstName, emailS: values.email, messageS: values.message})


        if (error) {
            console.log("error in PASSING")
            console.log(error)
            setFormError("IN PASSING ERROR")
        }
        if (data) {
            console.log(data)
            setFormError(null)
        }
    }

    return (
        <div className="sectionMail__container">
            <section className="sectionMail__one">
                <h1>Mail</h1>


                {fetchError && (<p>{fetchError}</p>)}
                {myClients && (
                    <div className="myClients">
                        {myClients.map((client) => (
                                <p key={client.id}>{client.messageS}</p>
                            )
                        )}
                    </div>
                )}

                <p>ique. Atque autlorem1000 fuga unde? Cum, dicta dolorum id maiores placeat quas repellendus
                    repudiandae
                    saepe suscipit temporibus unde voluptatibus!</p>


                {/*MAPOWANIE PO TABLICY INPUTS co tworzy nam tyle komponentów ile znajduje się w tablicy
                unikatowy klucz key rowny id
                */}
                <form className="sectionMail__form" onSubmit={handleSubmit}>
                    <label>Wiadomość poniżej</label>
                    <textarea ref={ref} id="message" placeholder="Co tam ?"
                              onChange={(event) => setValues({message: ref.current.value})}/>

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
                                // np dla email w obiekcie o id 2 bedzie to pusty string w values nadany email
                                value={values[input.name]}


                                // przekazuje funckje onChange to komponentu FormInput
                                onChange={onChange}

                                // ref.current.value
                            />
                        )
                    )}
                    {/*onClick={eventClick => finalValues = values}*/}
                    <button type="submit">Submit</button>
                    {formError && <p className={"error"}>{formError}</p>}
                    <h1>{values.firstName}</h1>
                    <h1>{values.message}</h1>
                    <h1>{values.email}</h1>
                </form>
            </section>
        </div>
    )
}