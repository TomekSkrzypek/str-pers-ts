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

    let finalValues = [];

    return (
        <div className="sectionMail__container">
            <section className="sectionMail__one">
                <h1>Mail</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci at atque consequatur cupiditate ea exercitationem hic, illum laboriosam magni optio possimus rem sapiente temporibus totam! Alias amet animi corporis dicta eius in nam nulla possimus quidem, rem repellendus, temporibus. Amet dolores, dolorum illum iusto necessitatibus officia suscipit totam ut voluptas voluptatum? Ea eaque eligendi modi nihil voluptatem? Amet commodi expedita ipsum minus natus quas quod repudiandae sint. Error impedit iusto sed! Accusamus amet at atque autem beatae consectetur consequatur dolorem eum facere laboriosam laudantium libero necessitatibus neque nisi, non praesentium qui, quos repellendus reprehenderit sequi velit voluptas voluptates voluptatum! Ab ad aliquid consequatur cumque cupiditate deserunt dignissimos dolore doloribus ea est laborum maiores molestias natus neque obcaecati omnis optio placeat quidem recusandae, repudiandae saepe sint tempora voluptates. Adipisci animi consequatur culpa distinctio dolorum esse ipsa, maxime minima molestiae mollitia, possimus provident quo rerum, sint temporibus totam voluptates. Aliquam blanditiis ducimus ipsa ipsam quaerat quasi ut? Aliquam assumenda atque, doloremque et fugiat laudantium quibusdam quidem recusandae sapiente temporibus? Amet assumenda at dolor harum iusto labore magni minus, nobis pariatur praesentium, quas quisquam quo reiciendis repellat, reprehenderit sit voluptas voluptatum. Aliquid animi assumenda commodi, dignissimos dolores esse facilis fugit laboriosam maiores necessitatibus similique tenetur velit voluptatem? Ab aliquid amet animi eaque eum eveniet explicabo itaque qui rerum, soluta! Atque cumque cupiditate est fugiat hic, id nam omnis possimus provident quas sapiente tempora vel velit? Adipisci minima odit ullam voluptas voluptatum. Blanditiis delectus deserunt doloremque doloribus eligendi expedita explicabo, iste non qui quibusdam quisquam quod rem voluptas! Aliquid asperiores aspernatur culpa doloribus eaque error ex excepturi hic illo itaque iure labore magni minima molestias, nobis omnis pariatur perspiciatis quae quas repellat repellendus sapiente sequi voluptates voluptatibus voluptatum? Fugiat, illo illum impedit modi odio quo ratione. Architecto aspernatur atque blanditiis doloremque dolorum error esse libero maxime nam nemo, nostrum obcaecati, odit provident, quam quisquam sequi similique sint veniam veritatis voluptates! Ad at cum cupiditate dicta excepturi explicabo id, inventore maxime modi nam nihil odit praesentium quaerat quasi quia repellat repudiandae saepe, veniam! Aliquam aut beatae blanditiis cupiditate deserunt dolor doloribus ea earum, est facilis illum ipsa ipsam iusto labore laborum minus molestias mollitia nam non nostrum pariatur qui recusandae repellendus reprehenderit, sit vel voluptate voluptatibus. Accusantium assumenda aut autem debitis dignissimos dolores ducimus est eum ex in incidunt minima omnis ratione recusandae reiciendis rerum totam, veniam! Animi atque consequatur consequuntur cum cupiditate debitis deleniti dicta eligendi esse et eum expedita ipsam modi mollitia natus necessitatibus odit omnis, porro quae quidem quod sapiente sint sit vel veniam veritatis voluptatibus voluptatum? Illo officiis quasi repellendus rerum voluptatem. Adipisci dolorum officia reiciendis unde voluptatem. Accusamus accusantium aliquam asperiores atque consectetur debitis eaque, est eveniet exercitationem inventore iste magnam mollitia odio possimus quis sint suscipit ut. Deserunt dignissimos doloremque eius error id itaque minus non obcaecati sed vitae? Et in officiis perspiciatis tempore voluptatibus. Delectus, eaque earum esse minus mollitia perferendis? Deserunt eligendi enim id magnam minus modi molestiae qui quo reiciendis rerum! Accusamus asperiores assumenda dicta distinctio eos error facere harum iste, optio perferendis placeat sapiente similique unde? Ad animi facere hic labore praesentium rerum sapiente. Assumenda atque beatae cumque delectus dicta dignissimos doloribus ducimus, eum ex exercitationem harum incidunt ipsam laudantium maxime minus molestiae molestias neque nesciunt non nulla omnis quidem quo repellendus, sapiente sunt temporibus vel voluptate? Animi fugit natus quaerat? Aliquam debitis delectus eos est, fuga laborum minima molestiae nulla veniam voluptates? Alias amet consectetur corporis cupiditate eaque eius eveniet harum id incidunt ipsam iure laudantium libero, minus molestiae officiis perferendis perspiciatis porro possimus, quidem quo repudiandae, vitae voluptas? Accusantium beatae consectetur consequatur corporis, cum dolor dolorum ducimus est ipsum labore nemo neque optio pariatur praesentium quod quos reiciendis, rem repudiandae sint velit vitae voluptates voluptatum. Animi dolores inventore ipsum officia optio possimus quasi repellat repudiandae vel voluptate! Asperiores deleniti dolore doloribus error, fuga necessitatibus possimus! Alias ea exercitationem ipsam ipsum iure laboriosam maxime, nisi placeat porro quas, tempora unde, voluptas. Consectetur error est maiores nihil numquam provident quis quisquam ratione tempore veniam! Ab architecto dicta distinctio excepturi illum itaque officiis, ratione. Animi blanditiis itaque magni minima nisi quisquam rem similique velit? At, dolor, facilis? Eius magni nulla quo rerum sed. Aperiam aut consequatur culpa ea laboriosam nam nesciunt nostrum quasi saepe. Aperiam, architecto error, est eum ex iusto laborum minima nam quam quas quis reprehenderit repudiandae rerum ullam voluptatum. A accusamus at consequatur deleniti dolor ducimus eligendi esse facilis in laudantium nam, officia perferendis sed similique vitae? Aliquid, consectetur dolore doloremque ducimus, est et illum laboriosam libero nihil possimus quos ratione recusandae rem sit ullam velit veritatis voluptatum! A autem consequatur consequuntur corporis distinctio doloremque eaque earum eius, error eveniet ex expedita illo, illum impedit inventore ipsum, iure laborum magnam mollitia numquam obcaecati provident quasi rerum sapiente sed totam ullam? Beatae culpa, dolorum eaque ex facilis harum, incidunt iusto maiores minus omnis quasi recusandae repellendus ut? Aut doloremque eius excepturi id ipsa ipsum maiores praesentium quos velit, voluptate. Accusamus assumenda atque ducimus facere in incidunt nam natus tempora voluptate voluptatibus. Beatae dolorem doloremque eum fugiat maxime molestiae nemo quae rem vitae voluptates. Architecto dignissimos ducimus et id modi ratione sint? Aut consequatur deserunt doloremque eos ex facere molestiae odio pariatur, praesentium quae. Consectetur esse impedit odio quam quidem reprehenderit suscipit? Alias autem cupiditate eligendi eveniet, facilis fuga in libero magnam natus odit repellendus repudiandae similique temporibus veniam voluptate! Atque deleniti dolores fugiat harum iste numquam officia, repudiandae tempore velit. Autem dolorem ea eum ipsa iste laudantium magni minima minus, non quo saepe soluta ullam voluptate. Aliquid cum ea eligendi maiores nemo rem repudiandae sed velit! Accusantium aut incidunt iusto nemo nulla officia praesentium veritatis vero. Accusantium, aliquam cum fugit illum in ipsam laborum libero modi, nobis nostrum omnis quam repellat sit, soluta tempora. Provident, reprehenderit, velit! Ab culpa ducimus eaque, est fugiat nam porro quae? Amet consectetur cumque dicta dignissimos dolorum, et excepturi, exercitationem illum in incidunt ipsa, ipsum perspiciatis quae quod recusandae suscipit ut. Aperiam impedit iure nisi unde, ut voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, aperiam beatae blanditiis culpa dolore dolores earum excepturi explicabo incidunt iste laboriosam maxime minima molestias nemo neque nihil, nisi nobis nostrum numquam officia quas qui quidem quisquam quos reiciendis temporibus, vitae. A aliquid aperiam asperiores aspernatur assumenda beatae consectetur cum deleniti, dolor dolores eligendi eum ex facere harum iure maiores nesciunt, nisi officiis quas veniam! Cupiditate, eos explicabo facilis incidunt itaque non quae soluta voluptatum? Aliquid, aspernatur commodi dolore ea est illum molestiae provident quisquam repellat vitae? Accusamus autem doloremque est exercitationem itaque maiores, molestiae, odio officia pariatur possimus vitae voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aliquid ea facere, ipsa nesciunt
                    quis sequi sit vel voluptates. Amet aperiam est et expedita harum itaque maxime minus nihil quo
                    similique. Atque autlorem1000 fuga unde? Cum, dicta dolorum id maiores placeat quas repellendus repudiandae
                    saepe suscipit temporibus unde voluptatibus!</p>


                {/*MAPOWANIE PO TABLICY INPUTS co tworzy nam tyle komponentów ile znajduje się w tablicy
                unikatowy klucz key rowny id
                */}
                <form className="sectionMail__form" onSubmit={handleSubmit}>
                    <textarea></textarea>
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

                    <button onClick={eventClick => finalValues = values} type="submit">Submit</button>
                </form>
            </section>
        </div>
    )
}