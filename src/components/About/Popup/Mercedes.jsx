import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './popup.css'

function Popup_Mercedes() {
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
                    <Modal.Title>Mercedes</Modal.Title>
                </Modal.Header>
                <Modal.Body><h3>Detail</h3>
                    <p>Mercedes-Benz commonly referred to as Mercedes and sometimes as Benz,
                        is a German luxury and commercial vehicle automotive brand established in 1926. Mercedes-Benz AG
                        (a Mercedes-Benz Group subsidiary established in 2019) is headquartered in Stuttgart, Baden-Württemberg,
                        Germany. Mercedes-Benz AG produces consumer luxury vehicles and light commercial vehicles badged as Mercedes-Benz.
                        From November 2019 onwards, Mercedes-Benz-badged heavy commercial vehicles (trucks and buses) are managed by Daimler Truck,
                        a former part of the Mercedes-Benz Group turned into an independent company in late 2021. In 2018, Mercedes-Benz was the largest
                        brand of premium vehicles in the world, having sold 2.31 million passenger cars</p>
                    <p>The brand's origins lie in Daimler-Motoren-Gesellschaft's 1901 Mercedes and Carl Benz's 1886 Benz
                        Patent-Motorwagen, which is widely regarded as the first internal combustion
                        engine in a self-propelled automobile. The slogan for the brand is "the best or nothing"</p>

                    <h3>History</h3>
                    <p>Mercedes-Benz traces its origins to Karl Benz's first internal combustion engine in a car,
                        seen in the Benz Patent Motorwagen  financed by Bertha Benz's dowry
                        and patented in January 1886  and Gottlieb Daimler and their engineer Wilhelm Maybach's
                        conversion of a stagecoach, with the addition of a petrol engine, introduced later that year.
                        The Mercedes automobile was first marketed in 1901 by Daimler Motoren Gesellschaft (DMG)</p>

                    <p>Emil Jellinek-Mercedes, a Jewish-Austrian automobile entrepreneur who worked with DMG,
                        registered the trademark in 1902, naming the 1901 Mercedes 35 hp after his daughter Mercedes Jellinek.
                        Jellinek was a businessman and marketing strategist who promoted "horseless" Daimler automobiles among the
                        highest circles of society. At the time, it was a meeting place for the haute volée of France and Europe,
                        especially in winter. His customers included the Rothschild family and other wealthy clients, but as early as
                        1901, he was selling Mercedes cars in the "New World" as well, including to billionaires Rockefeller,
                        Astor, Morgan, and Taylor. At the Nice race he attended in 1899, Jellinek drove under the pseudonym "Monsieur
                        Mercédès". Many consider that race the birth of Mercedes-Benz as a brand. In 1901, the name "Mercedes" was
                        re-registered by DMG worldwide as a protected trademark. The first Mercedes-Benz branded vehicles were
                        produced in 1926, following the merger of Karl Benz and Gottlieb Daimler's companies into the Daimler-Benz
                        company on 28 June of the same year</p>

                    <p>Gottlieb Daimler was born on 17 March 1834 in Schorndorf. After training as a
                        gunsmith and working in France, he attended the Polytechnic School in Stuttgart from 1857 to 1859.
                        After completing various technical activities in France and England, he started working as a draftsman
                        in Geislingen in 1862. At the end of 1863, he was appointed workshop inspector at a machine-tool factory
                        in Reutlingen, where he met Wilhelm Maybach in 1865.</p>

                    <p>Throughout the 1930s, Mercedes-Benz produced the 770 model, a car that was notably popular throughout
                        Germany's Nazi period. Adolf Hitler was known to have driven in a model of this car during
                        his time in power, with modified custom bulletproof windshields.
                        Most of the currently surviving 770 models were sold at auctions to private buyers.
                        One of the cars is currently on display at the War Museum in Ottawa, Ontario. The pontiff's
                        Popemobile has often been sourced from Mercedes-Benz</p>

                    <p>From 1937 onward, Daimler Benz focused increasingly on
                        military products such as the LG3000 lorry and the DB600 and the DB601 aero engines.
                        To build the latter, in 1936, it built a factory hidden in the forest at Genshagen around
                        10 km south of Berlin. By 1942, the company had mostly stopped producing cars, and was now devoted
                        to war production. According to its statement, in 1944, almost half of its 63,610 employees were
                        forced labourers, prisoners of war, or concentration-camp detainees.
                        Another source quotes this figure at 46,000. The company later paid $12 million in reparations
                        to the labourers' families</p>

                    <p>In 1958, the two companies began a partnership to sell their cars in the United States with Studebaker.
                        A few American-based Daimler Benz dealerships were converted into Mercedes-Benz dealerships when Daimler's
                        non-Mercedes-partnered company closed in 1966</p>

                    <p>Over the decades, Mercedes-Benz has introduced many electronic and mechanical innovations and
                        safety features that later became common.Currently, Mercedes-Benz is one of the best-known and
                        longest-standing automotive brands in the world</p>

                    <p>In November 2019, Daimler AG announced that Mercedes-Benz, until
                        that point a company marque, would be spun off into a separate, wholly owned subsidiary
                        called Mercedes-Benz AG. The new subsidiary would manage the Mercedes-Benz car and van business.
                        Mercedes-Benz-badged trucks and buses would be part of the Daimler Truck AG subsidiary</p>

                    <p>For information relating to the three-pointed star symbol of the brand, see under the title Daimler-Motoren-Gesellschaft, including the merger into Daimler-Benz</p>

                    <p>In May 2022, Mercedes-Benz announced that it has recently sold the most expensive car at the price
                        of $142 million (€135 million).The car is a very rare 1955 Mercedes-Benz SLR that has been kept
                        in the German automaker's collection and bought by a private owner. Mercedes in an announcement
                        said that the sale will be used to establish the Mercedes-Benz Fund</p>

                    <p>In June 2022, Mercedes-Benz recalled almost one million vehicles built between 2004 and 2015, due to potential problems with their braking system, caused by possible "advanced corrosion"</p>
                
                    <h3>Events</h3>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default Popup_Mercedes;