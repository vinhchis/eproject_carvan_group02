import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './popup.css'

function Popup_Honda() {
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
                    <Modal.Title>Honda</Modal.Title>
                </Modal.Header>
                <Modal.Body><h3>Detail</h3>
                    <p>Honda Motor Co., Ltd is a Japanese public multinational conglomerate manufacturer of automobiles, motorcycles, and power equipment, headquartered in Minato, Tokyo, Japan</p>
                    <p>Honda has been the world's largest motorcycle manufacturer since 1959,reaching a production of 400 million by the end of 2019.It is also the world's largest manufacturer of internal combustion engines measured by volume, producing more than 14 million internal combustion engines each year. Honda became the second-largest Japanese automobile manufacturer in 2001.In 2015, Honda was the eighth largest automobile manufacturer in the world.</p>
                    <p>Honda was the first Japanese automobile manufacturer to release a dedicated luxury brand, Acura, in 1986. Aside from their core automobile and motorcycle businesses, Honda also manufactures garden equipment, marine engines, personal watercraft, power generators, and other products. Since 1986, Honda has been involved with artificial intelligence/robotics research and released their ASIMO robot in 2000. They have also ventured into aerospace with the establishment of GE Honda Aero Engines in 2004 and the Honda HA-420 HondaJet, which began production in 2012. Honda has two joint-ventures in China: Dongfeng Honda and GAC Honda</p>
                    <p>In 2013, Honda invested about 5.7% (US$6.8 billion) of its revenues into research and development.Also in 2013, Honda became the first Japanese automaker to be a net exporter from the United States, exporting 108,705 Honda and Acura models, while importing only 88,357</p>
                    <h3>History</h3>
                    <p>Throughout his life, Honda's founder, Soichiro Honda (1906–1991), had an interest in automobiles. He worked as a mechanic at the Art Shokai garage, where he tuned cars and entered them in races. In 1937, with financing from his acquaintance Kato Shichirō, Honda founded Tōkai Seiki (Eastern Sea Precision Machine Company) to make piston rings working out of the Art Shokai garage.After initial failures, Tōkai Seiki won a contract to supply piston rings to Toyota, but lost the contract due to the poor quality of their products.After attending engineering school without graduating, and visiting factories around Japan to better understand Toyota's quality control processes known as "Five whys", by 1941 Honda was able to mass-produce piston rings acceptable to Toyota, using an automated process that could employ even unskilled wartime laborers</p>

                    <p>Tōkai Seiki was placed under the control of the Ministry of Commerce and Industry (called the Ministry of Munitions after 1943) at the start of World War II, and Soichiro Honda was demoted from president to senior managing director after Toyota took a 40% stake in the company.Honda also aided the war effort by assisting other companies in automating the production of military aircraft propellers.The relationships Honda cultivated with personnel at Toyota, Nakajima Aircraft Company and the Imperial Japanese Navy would be instrumental in the postwar period.A US B-29 bomber attack destroyed Tōkai Seiki's Yamashita plant in 1944, and the Itawa plant collapsed on 13 January 1945 Mikawa earthquake. Soichiro Honda sold the salvageable remains of the company to Toyota after the war for ¥450,000 and used the proceeds to found the Honda Technical Research Institute in October 1946</p>

                    <p>With a staff of 12 men working in a 16 m2 (170 sq ft) shack, they built and sold improvised motorized bicycles, using a supply of 500 two-stroke 50 cc Tohatsu war surplus radio generator engines. When the engines ran out, Honda began building their own copy of the Tohatsu engine, and supplying these to customers to attach to their bicycles. This was the Honda A-Type, nicknamed the Bata Bata for the sound the engine made.In 1949, the Honda Technical Research Institute was liquidated for ¥1,000,000, or about US$5,000 today; these funds were used to incorporate Honda Motor Co., Ltd.At about the same time Honda hired engineer Kihachiro Kawashima, and Takeo Fujisawa who provided indispensable business and marketing expertise to complement Soichiro Honda's technical bent.The close partnership between Soichiro Honda and Fujisawa lasted until they stepped down together in October 1973</p>

                    <p>The first complete motorcycle with both the frame and engine made by Honda was the 1949 D-Type, the first Honda to go by the name Dream.In 1961, Honda achieved its first Grand Prix victories and World Championships in the 125 cc and 250 cc categories. Honda Motor Company grew in a short time to become the world's largest manufacturer of motorcycles by 1964.The first production automobile from Honda was the T360 mini pick-up truck, which went on sale in August 1963.Powered by a small 356 cc straight-4 gasoline engine, it was classified under the cheaper Kei car tax bracket.The second production car from Honda was the S500 sports car, which followed the T360 into production in October 1963. Its chain-driven rear wheels pointed to Honda's motorcycle origins</p>

                    <p>Over the next few decades, Honda worked to expand its product line, operations and exports to numerous countries around the world. In 1986, Honda introduced the successful Acura brand to the American market in an attempt to gain ground in the luxury vehicle market. The year 1991 saw the introduction of the Honda NSX supercar, the first all-aluminum monocoque vehicle that incorporated a mid-engine V6 with variable-valve timing</p>

                    <p>In 1990, CEO Tadashi Kume was succeeded by Nobuhiko Kawamoto. Kawamoto was selected over Shoichiro Irimajiri, who oversaw the successful establishment of Honda of America Manufacturing, Inc. in Marysville, Ohio. Irimajiri and Kawamoto shared a friendly rivalry within Honda; owing to health issues, Irimajiri would resign in 1992</p>

                    <p>Following the death of Soichiro Honda and the departure of Irimajiri, Honda found itself quickly being outpaced in product development by other Japanese automakers and was caught off-guard by the truck and sport utility vehicle boom of the 1990s, all which took a toll on the profitability of the company. Japanese media reported in 1992 and 1993 that Honda was at serious risk of an unwanted and hostile takeover by Mitsubishi Motors, which at the time was a larger automaker by volume and was flush with profits from its successful Pajero and Diamante models</p>

                    <p>Kawamoto acted quickly to change Honda's corporate culture, rushing through market-driven product development that resulted in recreational vehicles such as the first-generation Odyssey and the CR-V, and a refocusing away from some of the numerous sedans and coupes that were popular with the company's engineers but not with the buying public. The most shocking change to Honda came when Kawamoto ended the company's successful participation in Formula One after the 1992 season, citing costs in light of the takeover threat from Mitsubishi as well as the desire to create a more environmentally friendly company image</p>

                    <p>The Honda Aircraft Company as established in 2006 as a wholly owned subsidiary to manufacture and sell the HondaJet family of aircraft. The first deliveries to customers began in December 2015</p>

                    <p>On February 23, 2015, Honda announced that CEO and President Takanobu Ito would step down and be replaced by Takahiro Hachigo in June of that year; additional retirements by senior managers and directors were expected</p>

                    <p>In October 2019, Honda was reported to be in talks with Hitachi to merge the two companies' car parts businesses, creating a components supplier with almost $17 billion in annual sales</p>

                    <p>In January 2020, Honda announced that it would be withdrawing employees working in the city of Wuhan, Hubei, China due to the COVID-19 pandemic. On March 23, 2020 due to the global spread of the virus, Honda became the first major automaker with operations in the US to suspend production in its factories. It resumed automobile, engine and transmission production at its US plants on May 11, 2020 (from 1968 to 1972, BMW built two battery-electric BMW 1602 Elektro saloons for the 1972 Olympic Games). After many years of establishing a reputation for sporting rear-wheel drive cars, BMW's first front-wheel drive car was the 2014 BMW 2 Series Active Tourer multi-purpose vehicle (MPV)</p>

                    <p>Honda and General Motors announced in September 2020 a North American alliance to begin in 2021.According to The Detroit Free Press, "The proposed alliance will include sharing a range of vehicles, to be sold under each company’s distinct brands, as well as cooperation in purchasing, research and development, and connected services</p>
                    <p>In 2021, Honda announced its intention to become the world's first carmaker to sell a vehicle with level 3 self-driving technology.

                        In March 2022, Honda announced it would develop and build electric vehicles in a joint venture with Sony. The latter is set to provide its imaging, sensing, network and other technologies while Honda would be responsible for the car manufacturing processes. The venture is set to fully launch later in 2022 with the release of first cars scheduled for 2025.

                        In 2023, Honda announced a deal with American car company General Motors to produce cars using a new hydrogen fuel system. The aim is to ramp up the hydrogen powered cells in their Electric vehicles as well as trucks, construction machinery, and power stations.

                        In 2023, Honda recalled 500,000 vehicles in the United States and Canada due to an issue with seat belts in the car not latching correctly. Among the models recalled were the 2017-2020 CR-V, the 2018 and 2019 Accord, the 2018-2020 Odyssey, the 2019 Insight, and the Acura RDX from 2019 and 2020. According to the recall, the seat belts in the front seats would break open on impact increasing the risk of injury in a crash</p>
                    <h3>Events</h3>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default Popup_Honda;