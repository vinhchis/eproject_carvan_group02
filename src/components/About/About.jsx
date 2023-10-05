import BMW from '../../assets/image/brands/bmw.png'
import BMW_Car from '../../assets/image/image_car/bmw.png'
import Mercedes from '../../assets/image/brands/mercedes.png'
import Mercedes_Car from '../../assets/image/image_car/mercedes.png'
import Toyota from '../../assets/image/brands/toyota.png'
import Toyota_Car from '../../assets/image/image_car/toyota.png'
import Ford from '../../assets/image/brands/ford.png'
import Ford_Car from '../../assets/image/image_car/ford.png'
import Mazda from '../../assets/image/brands/mazda.png'
import Mazda_Car from '../../assets/image/image_car/mazda.png'
import Honda from '../../assets/image/brands/honda.png'
import Honda_Car from '../../assets/image/image_car/honda.png'
import Hyundai from '../../assets/image/brands/hyundai.png'
import Hyundai_Car from '../../assets/image/image_car/hyundai.png'
import KIA from '../../assets/image/brands/kia.png'
import KIA_Car from '../../assets/image/image_car/kia.png'
import CARVAN from '../../assets/image/brands/CARVAN.png'
import './about.css'
import Popup_BMW from './Popup/Bmw'
import Popup_Ford from './Popup/Ford'
import Popup_Honda from './Popup/Honda'
import Popup_Hyundai from './Popup/Hyundai'
import Popup_KIA from './Popup/Kia'
import Popup_Mazda from './Popup/Mazda'
import Popup_Mercedes from './Popup/Mercedes'
import Popup_Toyota from './Popup/Toyota'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';



const About = () => {
    return (
        <div className="carvan-content container-fluid">
            <p className="title">About Us</p>
            <Row>
                <Col className='col-item'>
                    <p className="content-about">
                        <h2 className="whoweare">Who we are</h2>
                        <p className="describe">The ‘CARVAN’ is largest online car market. It caters to needs of everyone, be it a
                            family, business or individuals. This initiative is aimed towards providing information
                            and details about CAR’s to buyers.
                            <br />The site provides details and specifications of various models offered by the
                            companies. It also provide pictures and images to have a better look.
                            ‘CARVAN’ is looking to restructure the entire website to provide information and also
                            connect with prospective customers.
                            <br />The website is to be developed for the Windows Platform using HTML5, JavaScript
                            and Geolocation. The site should work well in all leading browsers including Chrome,
                            IE, Firefox etc.
                        </p>
                    </p>
                </Col>
                <Col className='about-logo'>
                    <img src={CARVAN} alt="" />
                </Col>
            </Row>




            {/* BMW */}

            <div className="bmw">
                <Row>
                    <Col className='grid-layout'>
                        <img src={BMW} alt="BMW" height={250} />
                        <p className="brand-bmw">BMW</p>
                        <img src={BMW_Car} alt="BMW_Car" height={250} />
                    </Col>
                    <Col>
                        <div className="detail-bmw">
                            <b>Detail of the company</b>
                            <p>Bayerische Motoren Werke AG, abbreviated as BMW , is a German multinational manufacturer of
                                luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany
                            </p>
                            <b>History</b>
                            <p>Otto Flugmaschinenfabrik was founded in 1910 by Gustav Otto in Bavaria
                                The name BMW dates back to 1913
                                The company produced its first motorcycle, the BMW R 32 in 1923
                            </p>
                            <b>Upcoming Events</b>
                            <p>BMW MOTORRAD</p>
                            <Popup_BMW />
                        </div>
                    </Col>
                </Row>

            </div >

            {/* Mercedes */}

            <div className="mercedes">
                <Row>
                    <Col>
                        <div className="detail-mercedes">
                            <b>Detail of the company</b>
                            <p>Mercedes-Benz commonly referred to as Mercedes and sometimes as Benz, is a German luxury and commercial vehicle automotive brand established in 1926 </p>
                            <b>History</b>
                            <p>Mercedes-Benz traces its origins to Karl Benz's first internal combustion engine in a car, seen in the Benz Patent Motorwagen – financed by Bertha Benz's dowry and patented in January 1886

                            </p>
                            <b>Upcoming Events</b>
                            <p>25 YEARS OF CREATING VALUES</p>
                            <Popup_Mercedes />
                        </div>
                    </Col>
                    <Col className='grid-layout'>
                        <img src={Mercedes} alt="Mercedes" height={250} />
                        <p className="brand-mercedes">MERCEDES</p>
                        <img src={Mercedes_Car} alt="Mercedes_Car" height={250} />
                    </Col>
                </Row>

            </div >

            {/* Toyota */}

            <div className="toyota">
                <Row>
                    <Col className='grid-layout'>
                        <img src={Toyota} alt="Toyota" height={250} />
                        <p className="brand-toyota">TOYOTA</p>
                        <img src={Toyota_Car} alt="Toyota_Car" height={250} />
                    </Col>
                    <Col>
                        <div className="detail-toyota">
                            <b>Detail of the company</b>
                            <p>Toyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan
                                It was founded by Kiichiro Toyoda and incorporated on August 28, 1937
                            </p>
                            <b>History</b>
                            <p>1920s–1930s <br />
                                In 1924, Sakichi Toyoda invented the Toyoda Model G Automatic Loom
                            </p>
                            <b>Upcoming Events</b>
                            <p>SMASHING PUMPKINS<br />
                                DEPECHE MODE</p>
                            <Popup_Toyota />
                        </div>
                    </Col>
                </Row>


            </div >

            {/* Ford */}

            <div className="ford">
                <Row>
                    <Col>
                        <div className="detail-ford">
                            <b>Detail of the company</b>
                            <p>Ford Motor Company (commonly known as Ford)
                                is an American multinational automobile manufacturer headquartered in Dearborn,
                                Michigan, United States
                            </p>
                            <b>History</b>
                            <p>The Henry Ford Company was Henry Ford's first attempt at a car manufacturing company and was established on November 3, 1901
                            </p>
                            <b>Upcoming Events</b>
                            <p>NO EVENT</p>
                            <Popup_Ford />
                        </div>
                    </Col>
                    <Col className='grid-layout'>
                        <img src={Ford} alt="Ford" height={120} />
                        <p className="brand-ford">FORD</p>
                        <img src={Ford_Car} alt="Ford_Car" height={180} />
                    </Col>
                </Row>

            </div >

            {/* Mazda */}

            <div className="mazda">
                <Row>
                    <Col className='grid-layout'>
                        <img src={Mazda} alt="Mazda" height={250} />
                        <p className="brand-mazda">MAZDA</p>
                        <img src={Mazda_Car} alt="Mazda_Car" height={200} />
                    </Col>
                    <Col>
                        <div className="detail-mazda">
                            <b>Detail of the company</b>
                            <p>Mazda Motor Corporation also known as simply Mazda,
                                is a Japanese multinational automotive manufacturer headquartered in Fuchū, Hiroshima, Japan</p>
                            <b>History</b>
                            <p>Mazda began as the Toyo Cork Kogyo Co., Ltd, as a cork-making factory founded in Hiroshima, Japan, 30 January 1920
                            </p>
                            <b>Upcoming Events</b>
                            <p>MAZDA MX-5 SETS SUSTAINABLE FUEL BENCHMARK ON ROAD AND TRACK</p>
                            <Popup_Mazda />
                        </div>
                    </Col>
                </Row>


            </div >

            {/* Honda */}

            <div className="honda">
                <Row>
                    <Col>
                        <div className="detail-honda">
                            <b>Detail of the company</b>
                            <p>Honda Motor is a Japanese public multinational conglomerate manufacturer of automobiles,
                                motorcycles, and power equipment, headquartered in Minato, Tokyo, Japan</p>
                            <b>History</b>
                            <p>Throughout his life, Honda's founder, Soichiro Honda (1906–1991), had an interest in automobiles
                            </p>
                            <b>Upcoming Events</b>
                            <p>WINNER X</p>
                            <Popup_Honda />
                        </div>
                    </Col>
                    <Col className='grid-layout'>
                        <img src={Honda} alt="Honda" height={250}/>
                        <p className="brand-honda">HONDA</p>
                        <img src={Honda_Car} alt="Honda_Car" height={250} />
                    </Col>
                </Row>


            </div >

            {/* Hyundai */}

            <div className="hyundai">
                <Row>
                    <Col className='grid-layout'>
                        <img src={Hyundai} alt="Huyndai" height={250} />
                        <p className="brand-hyundai">HYUNDAI</p>
                        <img src={Hyundai_Car} alt="Huyndai_Car" height={150} />
                    </Col>
                    <Col>
                        <div className="detail-hyundai">
                            <b>Detail of the company</b>
                            <p>Hyundai Motor Company, often abbreviated to Hyundai Motors and commonly known as Hyundai
                                , is a South Korean multinational automotive manufacturer headquartered in Seoul, South Korea, and founded in 1967
                            </p>
                            <b>History</b>
                            <p>
                                Chung Ju-Yung (1915–2001) founded the Hyundai Engineering and Construction Company in 1947
                            </p>
                            <b>Upcoming Events</b>
                            <p>NO EVENT</p>
                            <Popup_Hyundai />
                        </div>
                    </Col>
                </Row>


            </div >

            {/* KIA */}

            <div className="kia">
                <Row>
                    <Col>
                        <div className="detail-kia">
                            <b>Detail of the company</b>
                            <p>Kia Corporation, commonly known as Kia and formerly known as Kyungsung Precision Industry
                                and Kia Motors Corporation, is a South Korean multinational automobile manufacturer headquartered in Seoul, South Korea
                            </p>
                            <b>History</b>
                            <p>ia was founded on June 9, 1944, as Kyungsung Precision Industry, a manufacturer of steel tubing
                                and bicycle parts, eventually producing Korea's first domestic bicycle, the Samchuly, in 1951
                            </p>
                            <b>Upcoming Events</b>
                            <p>TRIPPLE REDD<br />
                                SAN HOLO</p>
                            <Popup_KIA />
                        </div>
                    </Col>
                    <Col className='grid-layout'>
                        <img src={KIA} alt="KIA" height={70} />
                        <p className="brand-kia">KIA</p>
                        <img src={KIA_Car} alt="KIA_Car" height={200} />
                    </Col>
                </Row>



            </div >
        </div>
    );
}

export default About;