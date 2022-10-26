import React, {useEffect} from "react";
import {useRef} from "react";
import {useState} from "react";
import './Mail.scss';
import {FormInput} from "../../component/FormInput/FormInput.jsx";
import supabase from "../../config/supabaseClient";
import CustomizedSnackbars from "../../component/Snackbar/Snackbar";
import Button from '@mui/joy/Button';
import {useNavigate} from "react-router-dom";

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
    const [fetchError, setFetchError] = useState(null)
    const [myClients, setMyClients] = useState(null)
    const [submitValue, setSubmitValue] = useState(false)


    // TBALICA WLASCIWOSCI INPUTÓW
    const inputs = [
        {
            id: 1,
            name: "firstName",
            type: "text",
            placeholder: "Twoje Imię Tutaj Podaj",
            label: "Podaj swoje imię:"
        },
        {
            id: 2,
            name: "email",
            type: "text",
            placeholder: "e-mail tutaj",
            label: "Podaj e-mail:"
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


    const navigate = useNavigate();

    // let counter = 0
    // console.log("conter before useEffect" + counter)
    //
    //
    //     useEffect(() => {
    //         // const myTimer =
    //             setTimeout(() => {
    //             console.log("naviagte submit?")
    //             console.log("conter in setTimeout submit" + counter)
    //             navigate('/blog')
    //
    //         }, 2000)
    //         // return()=>{
    //         //     clearTimeout(myTimer)
    //         // }
    //         console.log("before return")
    //         return navigate('/mail')
    //     }, [submitValue])


    const handleSubmit = async (eventThatTriggered) => {
        eventThatTriggered.preventDefault();

        // counter++
        // console.log("conter in handle submit" + counter)
        // setSubmitValue(!submitValue)


        // if (!values.firstName) {
        //     setFormError("Name is missing dude.")
        //     return
        // }
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

                <p>210DziewiwecOsiemPiecCztery Trzy dwaasdasdLorem ipsum dolor sit amet, consectetur adipisicing elit. A cumque magnam
                    molestiae
                    perferendis
                    sunt.
                    Cumque debitis doloremque dolorum enim facere fugit harum laborum maxime, mollitia nam,
                    necessitatibus, optio quaerat sequi soluta vitae? Accusamus architecto, blanditiis deleniti deserunt
                    dolore eveniet excepturi fugit laudantium maiores, minus modi perferendis placeat quasi quod, quos
                    similique unde! A ab, accusamus aut beatae debitis distinctio eaque est excepturi exercitationem
                    facilis id illo ipsa laboriosam magni minima modi molestias placeat possimus praesentium quasi, quod
                    quos repellat rerum sequi sit sunt tempore temporibus velit voluptatibus voluptatum! Accusantium
                    aspernatur consequatur cumque earum magnam nostrum officia pariatur possimus quibusdam vitae.</p>

                {/* WYSWIETLENIE WIADOMOSCI POBRANYCH Z BAZY po FETCH (chyba)*/}
                {/*{myClients && (*/}
                {/*    <div className="myClients">*/}
                {/*        {myClients.map((client) => (*/}
                {/*                <p key={client.id}>{client.messageS}</p>*/}
                {/*            )*/}
                {/*        )}*/}
                {/*    </div>*/}
                {/*)}*/}

                <p>Chcesz dowiadywać się kiedy i gdzie gram?</p>
                <p>...albo może jakaś współpraca? </p>
                <p>...albo masz jakąś inną sprawę?</p>
                <p>Zapraszam do konatku.</p>


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
                                // np dla email w obiekcie o id 2 bedzie to pusty string w values nadany email
                                value={values[input.name]}


                                // przekazuje funckje onChange do komponentu FormInput
                                onChange={onChange}

                                // ref.current.value
                            />
                        )
                    )}

                    <label className="sectionMail__textarea-label">Wiadomość poniżej zapraszam...</label>
                    <textarea ref={ref} id="message" placeholder="Jakieś kliku kliku..."
                              onChange={(event) => setValues({...values, message: ref.current.value})}/>

                    <button className="sectionMail__button" type="submit" onClick={()=> navigate("/thanksForSending")}>SZUBMIT</button>
                    {/*<CustomizedSnackbars/>*/}
                    {/*<CustomizedSnackbars <Button></Button>/>*/}
                    {/*<CustomizedSnackbars type="submit"/>*/}
                    {/*                    <Button type="submit"><CustomizedSnackbars/></Button>*/}
                    {/*<button  className="sectionMail__button" type="submit"><CustomizedSnackbars className="newShit"/></button>*/}
                    {fetchError && (<p>{fetchError}</p>)}
                    {formError && <p className={"error"}>{formError}</p>}

                    {/*WYSWIETLANIE WARTOSCI BEZPOSREDNIO WPISYWYANYCH*/}
                    {/*<h1>{values.firstName}</h1>*/}
                    {/*<h1>{values.message}</h1>*/}
                    {/*<h1>{values.email}</h1>*/}
                </form>
            </section>
        </div>
    )
}