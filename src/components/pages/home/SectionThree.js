import React from 'react'
import Img1 from "../../../img/h_1.jpg"

function SectionThree() {
    return (
        <section className="section container">
            <div className="row" >
                <div className="col s12 l5 ">

                    <form action="" >
                        <div className="input-field ">
                            <label for="email" className="">Email</label>
                            <input type="email" id="email" />
                            <i className="material-icons prefix" >email</i>

                        </div>

                        <div className="input-field">
                            <label for="message">Your message</label>
                            <textarea name="message" dir="rtl" className="materialize-textarea"></textarea>
                            <i className="material-icons prefix ">message</i>


                        </div>
                    </form>
                </div>



                <div className="col s12 l5 offset-l2" dir="rtl">
                    <h3 className="black-text text-darken-4" >צרי קשר</h3>
                    <p className="flow-text" >
                        אם יש לך שאלות אודות המוצרים באתר או בכל נושא אחר ניתן לפנות אליי דרך האימייל.
                        רשמי את האימייל שלך ואת ההודעה/שאלה ואני מבטיחה לחזור אליך בהקדם.
                    </p>

                </div>

            </div>
        </section>
    )
}

export default SectionThree;


