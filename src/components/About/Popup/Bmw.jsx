import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './popup.css'

function Popup_BMW() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                See More
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>BMW</Modal.Title>
                </Modal.Header>
                <Modal.Body><h3>Detail</h3>
                    <p>Bayerische Motoren Werke AG, abbreviated as BMWis a German multinational manufacturer of
                        luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany. The company was founded in 1916 as
                        a manufacturer of aircraft engines, which it produced from 1917 to 1918 and again from 1933 to 1945</p>
                    <p>Automobiles are marketed under the brands BMW, Mini and Rolls-Royce, and motorcycles are marketed under
                        the brand BMW Motorrad. In 2017, BMW was the world's fourteenth-largest producer of motor vehicles, with
                        2,279,503 vehicles produced and in 2022 the 7th largest by revenue.The company has significant motor-sport
                        history, especially in touring cars, sports cars, and the Isle of Man TT</p>
                    <p>BMW is headquartered in Munich and produces motor vehicles in Germany, Brazil, China, India, Mexico,
                        the Netherlands, South Africa, the United Kingdom, and the United States.
                        The Quandt family is a long-term shareholder of the company, following investments by the brothers Herbert
                        and Harald Quandt in 1959 that saved BMW from bankruptcy, with the remaining shares owned by the public</p>
                    <h3>History</h3>
                    <p>Otto Flugmaschinenfabrik was founded in 1910 by Gustav Otto in Bavaria.
                        The firm was reorganized on 7 March 1916 into Bayerische Flugzeugwerke AG.
                        This company was then renamed to Bayerische Motoren Werke (BMW) in 1922. However,
                        the name BMW dates back to 1913, when the original company to use the name was founded by Karl Rapp
                        (initially as Rapp Motorenwerke GmbH). The name and Rapp Motorenwerke's engine-production assets
                        were transferred to Bayerische Flugzeugwerke in 1922, who adopted the name the same year.BMW's first
                        product was a straight-six aircraft engine called the BMW IIIa, designed in the spring of 1917 by engineer Max Friz.
                        Following the end of World War I, BMW remained in business by producing motorcycle engines, farm equipment, household
                        items and railway brakes. The company produced its first motorcycle, the BMW R 32 in 1923</p>

                    <p>BMW became an automobile manufacturer in 1928 when it
                        purchased Fahrzeugfabrik Eisenach, which, at the time, built Austin Sevens under licence under the Dixi marque.
                        The first car sold as a BMW was a rebadged Dixi called the BMW 3/15, following BMW's acquisition
                        of the car manufacturer Automobilwerk Eisenach. Throughout the 1930s, BMW expanded its range into sports
                        cars and larger luxury cars</p>

                    <p>Aircraft engines, motorcycles, and automobiles would be BMW's main products until World War II. During the war,
                        BMW concentrated on aircraft engine production using as many as 40,000 slave laborers.These consisted
                        primarily of prisoners from concentration camps, most prominently Dachau. Motorcycles remained as a
                        side-line and automobile manufacture ceased altogether</p>
                    <p>BMW's factories were heavily bombed during the war and its remaining West
                        German facilities were banned from producing motor vehicles or aircraft after the war.
                        Again, the company survived by making pots, pans, and bicycles. In 1948, BMW restarted motorcycle production.
                        BMW resumed car production in Bavaria in 1952 with the BMW 501 luxury saloon. The range of cars was expanded in 1955,
                        through the production of the cheaper Isetta microcar under licence. Slow sales of luxury cars and small profit margins
                        from microcars meant BMW was in serious financial trouble and in 1959 the company was nearly taken over by rival Daimler-Benz</p>
                    <p>A large investment in BMW by Herbert Quandt and Harald Quandt resulted in the company surviving as a separate entity.
                        The Quandts' father, Günther Quandt, was a well-known German industrialist. Quandt joined
                        the Nazi party in 1933 and made a fortune arming the German Wehrmacht, manufacturing weapons and batteries.
                        Many of his enterprises were appropriated from Jewish owners under duress with minimal compensation.
                        At least three of his enterprises made extensive use of slave laborers, as many as 50,000 in all.
                        One of his battery factories had its own on-site concentration camp, complete with gallows.
                        Life expectancy for laborers was six months.While Quandt and BMW were not directly connected during
                        the war, funds amassed in the Nazi era by his father allowed Herbert Quandt to buy BMW</p>
                    <p>The relative success of the small BMW 700 assisted in the company's recovery, allowing them to develop the New Class sedans</p>
                    <p>The 1962 introduction of the BMW New Class compact sedans was the beginning of BMW's reputation as a leading manufacturer of sport-oriented cars. Throughout the 1960s, BMW expanded its range by adding coupé and luxury sedan models. The BMW 5 Series mid-size sedan range was introduced in 1972, followed by the BMW 3 Series compact sedans in 1975, the BMW 6 Series luxury coupés in 1976 and the BMW 7 Series large luxury sedans in 1978</p>
                    <p>The BMW M division released its first road car, a mid-engine supercar, in 1978. This was followed by the BMW M5 in 1984 and the BMW M3 in 1986. Also in 1986, BMW introduced its first V12 engine in the 750i luxury sedan</p>
                    <p>The company purchased the Rover Group in 1994, however the takeover was not successful and was causing BMW large financial losses. In 2000, BMW sold off most of the Rover brands, retaining only the Mini brand</p>
                    <p>In 1998, BMW also acquired the rights to the Rolls-Royce brand from Vickers Plc</p>
                    <p>The 1995 BMW Z3 expanded the line-up to include a mass-production two-seat roadster and the 1999 BMW X5 was the company's entry into the SUV marke</p>
                    <p>The first modern mass-produced turbocharged petrol engine was introduced in 2006,
                        (from 1973 to 1975, BMW built 1672 units of a turbocharged M10 engine for the BMW 2002 turbo),
                        with most engines switching over to turbocharging over the 2010s. The first hybrid BMW was the 2010
                        BMW ActiveHybrid 7, and BMW's first mass-production electric car was the BMW i3 city car, which was released in 2013, (from 1968 to 1972, BMW built two battery-electric BMW 1602 Elektro saloons for the 1972 Olympic Games). After many years of establishing a reputation for sporting rear-wheel drive cars, BMW's first front-wheel drive car was the 2014 BMW 2 Series Active Tourer multi-purpose vehicle (MPV)</p>
                    <p>In January 2021, BMW announced that its sales in 2020 fell by 8.4% due to the impact of the COVID-19 pandemic and the restrictions. However, in the fourth quarter of 2020, BMW witnessed a rise of 3.2% in its customers' demands</p>
                    <p>On 18 January 2022, BMW announced a new limited edition M760Li xDrive simply called "The Final V12," the last BMW series production vehicle to be fitted with a V-12 engine</p>
                    <p>BMW and Toyota aim to sell jointly-developed hydrogen fuel cell vehicles as soon as 2025</p>
                    <h3>Events</h3>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default Popup_BMW;