import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './popup.css'

function Popup_KIA() {
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
                    <Modal.Title>KIA</Modal.Title>
                </Modal.Header>
                <Modal.Body><h3>Detail</h3>
                    <p>Kia Corporation, commonly known as Kia and formerly known as Kyungsung Precision Industry
                        and Kia Motors Corporation, is a South Korean multinational automobile manufacturer headquartered in Seoul, South Korea. It is South Korea's second largest automobile manufacturer, after its parent company, Hyundai Motor Company, with sales of over 2.8 million vehicles in 2019. As of 2015, the Kia Corporation is minority owned by Hyundai, which holds a 33.88% stake valued at just over US$6 billion. Kia in turn is a minority owner of more than twenty Hyundai subsidiaries ranging from 4.9% up to 45.37%, totaling more than US$8.3 billion
                    </p>

                    <h3>History</h3>
                    {/* Origins and early expansion */}
                    <b>Origins and early expansion</b>

                    <p>Kia was founded on June 9, 1944, as Kyungsung Precision Industry, a manufacturer of steel tubing and bicycle parts, eventually producing Korea's first domestic bicycle, the Samchuly, in 1951.In 1952, Kyungsung Precision Industry changed its name to Kia Industries,and later built Honda-licensed small motorcycles (starting in 1957) and Mazda-licensed trucks (1962) and cars (1974). The company opened its first integrated automotive assembly plant in 1973, the Sohari Plant.Kia built the small Mazda-based Brisa range of cars until 1981, when production came to an end after the new military dictator Chun Doo-hwan enforced industry consolidation. This forced Kia to give up passenger cars and focus entirely on light trucks. Kia assembled a few hundred more cars in 1982 and 1983, after the ban had taken effect, but no passenger cars were built in 1984 and 1985</p>

                    <p>Prior to the forced 1981 shutdown, Kia had rounded out its passenger car lineup with two other foreign models assembled under license: the Fiat 132 and the Peugeot 604.The import of these knock-down kits was permitted as long as Kia exported five cars for every single Fiat or Peugeot brought in (Hyundai had to meet the same requirement)</p>

                    <p>Starting in 1986 (when only 26 cars were manufactured, followed by over 95,000 the next year), Kia rejoined the automobile industry in partnership with Ford. Kia produced several Mazda-derived vehicles for both domestic sales in South Korea and for export into other countries - where they were positioned at the budget end of the market. These models included the Kia Pride, based on the Mazda 121 and the Avella, which were sold in North America and Australasia as the Ford Festiva and Ford Aspire. In 1992, Kia Motors America was incorporated in the United States. The first Kia-branded vehicles in the United States were sold from four dealerships in Portland, Oregon, in 1992.Since then, Kia methodically expanded one region at a time. Dealers in 1994 sold the Sephia and a few years later the United States segment expanded their line with the Sportage. Over one hundred Kia dealerships existed across thirty states by 1995, selling a record 24,740 automobiles</p>

                    {/* Hyundai Motor Company takeover */}
                    <b>Hyundai Motor Company takeover</b>

                    <p>Kia declared bankruptcy in 1997, during the Asian financial crisis, and in 1998 reached an agreement with Hyundai Motor Company to diversify by exchanging ownership between the two companies. Hyundai Motor Company acquired 51% of the company, outbidding Ford Motor Company, which had owned an interest in Kia Motors since 1986.After subsequent divestments,Hyundai Motor Company owns about one third of Kia Motor Corporation. While Hyundai Motor Company remains Kia's largest stakeholder, Kia Motor Company also retains ownership in some 22 Hyundai Motor Company subsidiaries.Since 2005, Kia has focused on the European market and has identified design as its "core future growth engine" – leading to the hiring of Peter Schreyer in 2006 as chief design officer and his subsequent creation of a new corporate grille known as the 'Tiger Nose'. In October 2006, Kia Motors America broke ground for Kia Motors Manufacturing Georgia in West Point, Georgia, representing a US$1 billion investment for the company.Kia Motors Manufacturing Georgia opened in February 2010, after Kia recorded its 15th consecutive year of increased U.S. market share.In August 2014, the company received international attention when Pope Francis of the Catholic Church rode in one of their compact cars, the Kia Soul, during a five-day visit to South Korea.The Kia Soul drew bigger attention than two other vehicles used by the Pope, their Kia Carnival and Hyundai's Santa Fe, because it appeared in the high-profile welcoming ceremony of his arrival at the Seoul Airport on August 14.In 2016, Kia Motors model reliability was ranked first in the United States by J.D. Power and Associates, becoming the first non-luxury automaker since 1989 to top that list.

                        Kia started using an angular "KIA" wordmark logo in early 2021.The logo uses an "I" and an oblique "A" without a crossbar immediately next to each other, which some consumers have misread as the stylized "KИ" as "KN"</p>
                    
                    <h3>Events</h3>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default Popup_KIA;