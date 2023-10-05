import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './popup.css'

function Popup_Hyundai() {
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
                    <Modal.Title>Hyundai</Modal.Title>
                </Modal.Header>
                <Modal.Body><h3>Detail</h3>
                    <p>Hyundai Motor Company, often abbreviated to Hyundai Motors and commonly known as Hyundai , is a South Korean multinational automotive manufacturer headquartered in Seoul, South Korea, and founded in 1967. Currently, the company owns 33.88 percent of Kia Corporation,and also fully owns two marques including its luxury cars subsidiary, Genesis Motor, and an electric vehicle sub-brand, Ioniq.Those three brands altogether comprise the Hyundai Motor Group</p>
                    <p>Hyundai operates the world's largest integrated automobile manufacturing facility in Ulsan, South Korea which has an annual production capacity of 1.6 million units.The company employs about 75,000 people worldwide. Hyundai vehicles are sold in 193 countries through 5,000 dealerships and showrooms.As of 2022, Hyundai is the world's third-largest carmaker in terms of production, behind Toyota and Volkswagen</p>

                    <h3>History</h3>
                    <p>Chung Ju-Yung (1915–2001) founded the Hyundai Engineering and Construction Company in 1947. Hyundai Motor Company was later established in 1967, and the company's first model, the Cortina, was released in cooperation with Ford Motor Company in 1968.When Hyundai wanted to develop their own car, they hired George Turnbull in February 1974, the former managing director of Austin Morris at British Leyland. He in turn hired five other top British car engineers. They were body designer Kenneth Barnett, engineers John Simpson and Edward Chapman, John Crosthwaite, formerly of BRM, as chassis engineer and Peter Slater as chief development engineer.In 1975, the Pony, the first South Korean car, was released, with styling by Giorgio Giugiaro of ItalDesign and powertrain technology provided by Japan's Mitsubishi Motors. Exports began in the following year to Ecuador and soon thereafter to the Benelux countries. Hyundai entered the British market in 1982, selling 2993 cars in their first year there</p>

                    <p>In 1984, Hyundai began exporting the Pony to Canada, but not to the United States, as the Pony would not pass emissions standards there. Canadian sales greatly exceeded expectations, and it was at one point the top-selling car on the Canadian market. In 1985, the one millionth Hyundai car was built.Until the 1986 introduction of the larger Hyundai Grandeur, Hyundai offered a locally assembled Ford Granada for the South Korean executive market. The import of these knocked down kits was permitted as long as Hyundai exported five cars for every single Granada brought in (the same demands were placed on Kia)</p>

                    <p>In 1986, Hyundai began to sell cars in the United States, and the Excel was nominated as "Best Product #10" by Fortune magazine, largely because of its affordability. The company began to produce models with its own technology in 1988, beginning with the midsize Sonata. In the spring of 1990, aggregate production of Hyundai automobiles reached the four million mark.In 1991, the company succeeded in developing its first proprietary gasoline engine, the four-cylinder Alpha, and also its own transmission, thus paving the way for technological independence</p>

                    <p>In 1996, Hyundai Motor India Limited was established with a production plant in Irungattukottai near Chennai, India</p>

                    <p>In 1998, Hyundai began to overhaul its image in an attempt to establish itself as a world-class brand. Chung Ju Yung transferred leadership of Hyundai Motor to his son, Chung Mong Koo, in 1999. Hyundai's parent company, Hyundai Motor Group, invested heavily in the quality, design, manufacturing, and long-term research of its vehicles. It added a 10-year or 100,000-mile (160,000 km) warranty to cars sold in the United States and launched an aggressive marketing campaign</p>

                    <p>In 2004, Hyundai was ranked second in "initial quality" in a survey/study by J.D. Power and Associates in North America.Hyundai is now one of the top 100 most valuable brands worldwide according to Interbrand. Since 2002, Hyundai has also been one of the worldwide official sponsors of the FIFA World Cup.

                        In 2006, the South Korean government initiated an investigation of Chung Mong Koo's practices as head of Hyundai, suspecting him of corruption. On 28 April 2006, Chung was arrested, and charged for embezzlement of 100 billion South Korean won (US$106 million).As a result, Hyundai vice chairman and CEO, Kim Dong-jin, replaced him as head of the company.

                        On 30 September 2011, Yang Seung Suk announced his retirement as CEO of Hyundai Motor Co. In the interim replacement period, Chung Mong-koo and Kim Eok-jo will divide the duties of the CEO position.

                        In 2014, Hyundai started an initiative to focus on improving vehicle dynamics in its vehicles and hired Albert Biermann, former Vice President of Engineering at BMW M, to direct chassis development for Hyundai vehicles, stating: "The company intends to become a technical leader in ride and handling, producing vehicles that lead their respective segments for driver engagement."

                        On 14 October 2020, Euisun Chung was inaugurated as the new chairman of the Hyundai Motor Group. His father, Chung Mong-Koo, has been made Honorary Chairman.

                        In April 2021, the company said that its profits rose by 187%, the highest rise in four years. The company recorded a profit of $1.16 billion from the beginning of 2021 until March.</p>

                    {/* Research and development */}
                    <b>Research and development</b>

                    <p>Hyundai has six research and development centers, located in South Korea (three offices), Germany, Japan and India. Additionally, a center in California develops designs for the United States.

                        Hyundai established the Hyundai Design Center in Fountain Valley, California in 1990. The center moved to a new $30 million facility in Irvine, California, in 2003, and was renamed the Hyundai Kia Motors Design and Technical Center. The facility also housed Hyundai America Technical Center, Inc, a subsidiary responsible for all engineering activities in the U.S. for Hyundai. Hyundai America Technical Center moved to its new 200,000-square-foot (19,000 m2), $117 million headquarters in Superior Township, Michigan (near Ann Arbor) in 2005.

                        In 2004, Hyundai America Technical Center completed construction of its Hyundai/Kia proving ground in California City, California. The 4,300-acre (17 km2) facility is located in the Mojave Desert and features a 6.4-mile (10.3 km) oval track, a Vehicle Dynamics Area, a vehicle-handling course inside the oval track, a paved hill road, and several special surface roads. A 30,000-square-foot (2,800 m2) complex featuring offices and indoor testing areas is located on the premises as well. The facility was built at a cost of $50 million.

                        In the 2021 review of WIPO's annual World Intellectual Property Indicators Hyundai ranked as 4th in the world for its 141 industrial design registrations being published under the Hague System during 2020. This position is up on their previous 7th-place ranking for 57 industrial design registrations being published in 2019.</p>

                    {/* Business */}
                    <b>Business</b>

                    <p>In 1998, after a shake-up in the South Korean auto industry caused by overambitious expansion and the Asian financial crisis, Hyundai acquired the majority of rival Kia Motors.

                        In 2000, the company established a strategic alliance with DaimlerChrysler and severed its partnership with the Hyundai Group. In 2001, the Daimler-Hyundai Truck Corporation was formed. In 2004, however, DaimlerChrysler divested its interest in the company by selling its 10.5% stake for $900 million</p>

                    <p>Hyundai has invested in manufacturing plants in North America, India, the Czech Republic, Russia, China and Turkey as well as research and development centers in Europe, Asia, North America and the Pacific Rim. In 2004, Hyundai Motor Company had $57.2 billion in sales in South Korea making it the country's second largest corporation, or chaebol, after Samsung. Worldwide sales in 2005 reached 2,533,695 units, an 11 percent increase over the previous year. In 2011, Hyundai sold 4.05 million cars worldwide and the Hyundai Motor Group was the world's fourth largest automaker behind GM, Volkswagen and Toyota.Hyundai vehicles are sold in 193 countries through some 5,000 dealerships.

                        In February 2021, CNBC reported that Apple and Hyundai-Kia are close to finalizing a deal to build an autonomous Apple car. The vehicle was said to be completely designed by Apple and would be built in Hyundai or Kia plants, and could potentially go into production in 2024.However, Hyundai Motor announced shortly after that it is no longer in talks with Apple.

                        In June 2021, Hyundai Motor Group completed its acquisition of a controlling interest in the robotics firm, Boston Dynamics. Hyundai Motor Group now takes an 80% share of the company</p>

                    <h3>Events</h3>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default Popup_Hyundai;