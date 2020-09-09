import React from 'react'

function SectionThree() {
    return (
        <section className="section container">
            <div className="row" >
                <div className="col s12 l5 ">

                    <form action="" >
                        <div className="input-field ">
                            <i className="material-icons prefix" >email</i>
                            <label htmlFor="email" className="">אימייל</label>
                            <input type="email" id="email" />
                        </div>

                        <div className="input-field">
                            <i className="material-icons prefix ">message</i>
                            <label htmlFor="message">ההודעה שלך</label>
                            <textarea name="message" dir="rtl" className="materialize-textarea"></textarea>
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


