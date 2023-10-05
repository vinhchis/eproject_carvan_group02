import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './popup.css'

function Popup_Mazda() {
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
                    <Modal.Title>Mazda</Modal.Title>
                </Modal.Header>
                <Modal.Body><h3>Detail</h3>
                    <p>Mazda Motor Corporation  also known as simply Mazda, is a Japanese multinational automotive manufacturer headquartered in Fuchū, Hiroshima, Japan.dThe company was founded on January 30, 1920 as Toyo Cork Kogyo Co., Ltd., a cork-making factory, by Jujiro Matsuda.It changed its name to Toyo Kogyo Co., Ltd. in 1927 and started producing vehicles in 1931.The name Mazda was derived from Ahura Mazda, the god of harmony, intelligence and wisdom in Zoroastrianism, as well as from the surname of the founder.Mazda is one of the largest automakers in Japan and the world. In 2015, it produced 1.5 million vehicles for global sales, of which nearly one million were made in Japan and the rest in various other countries.It ranked as the 15th-largest automaker by production volume globally in 2015.Mazda is known for its innovative technologies, such as the Wankel engine, the SkyActiv platform, and the Kodo Design language. It also has a long history of motorsport involvement, winning the 24 Hours of Le Mans in 1991 with the rotary-powered Mazda 787B. Mazda has several alliances and partnerships with other automakers, such as Toyota, Nissan, Isuzu, Suzuki and Ford</p>

                    <h3>History</h3>
                    <p>Mazda began as the Toyo Cork Kogyo Co., Ltd, as a cork-making factory founded in Hiroshima, Japan, 30 January 1920.Toyo Cork Kogyo renamed itself to Toyo Kogyo Co., Ltd. in 1927. In the late 1920s the company had to be saved from bankruptcy by Hiroshima Saving Bank and other business leaders in Hiroshima.</p>

                    <p>In 1931, Toyo Kogyo moved from manufacturing machine tools to vehicles with the introduction of the Mazda-Go auto rickshaw. The name Mazda came into existence with the production of the company's first three-wheeled trucks. Other candidates for a model name included Sumera-Go, Tenshi-Go, and more</p>

                    <p>Officially, the company states:

                        Mazda comes from Ahura Mazda, the god of harmony, intelligence and wisdom from the earliest civilization in West Asia. Key members of Toyo Kogyo interpreted Mazda as a symbol of the beginning of the East and the West civilization, but also a symbol of the automotive civilization and culture."</p>
                    <p>The company's website further notes that the name also derives from the name of the company's founder, Jujiro Matsuda.The alternative proposed names mean "god" (Sumera) and "angel" (Tenshi); both indicate Matsuda's strong interest in human faith.

                        The Mazda lettering was used in combination with the corporate emblem of Mitsubishi Motors, which was responsible for sales, to produce the Toyo Kogyo three-wheeled truck registered trademark.

                        Toyo Kogyo produced weapons for the Japanese military throughout the Second World War, most notably the series 30 through 35 Type 99 rifle. The company formally adopted the Mazda name in 1984, though every automobile sold from the beginning bore that name. The Mazda R360 was introduced in 1960, followed by the Mazda Carol in 1962 and were sold at a specific retail dealership that sold passenger cars called "Mazda Auto Store" whereas commercial products were sold at "Mazda Store". As Mazda continued to offer passenger cars like the Savanna, Familia, Luce, Cosmo and Capella, they were added to the "Mazda Auto Store" network only. Daimler-Benz</p>
                    <p>Beginning in the 1960s, Mazda was inspired by the NSU Ro 80 and decided to put a major engineering effort into development of the Wankel rotary engine as a way of differentiating itself from other Japanese auto companies. The company formed a business relationship with German company NSU and began with the limited-production Cosmo Sport of 1967, and continuing to the present day with the Pro Mazda Championship, Mazda has become the sole manufacturer of Wankel-type engines for the automotive market, mainly by way of attrition. (NSU and Citroën both gave up on the design during the 1970s, and prototype Corvette efforts by General Motors never made it to production.)

                        This effort to bring attention to itself apparently helped, as Mazda rapidly began to export its vehicles. Both piston-powered and rotary-powered models made their way around the world. The rotary models quickly became popular for their combination of good power and light weight when compared to piston-engined competitors that required heavier V6 or V8 engines to produce the same power. The R100 and the RX series (RX-2, RX-3, and RX-4) led the company's export efforts.

                        During 1968, Mazda started formal operations in Canada (MazdaCanada) although Mazdas were seen in Canada as early as 1959. In 1970, Mazda formally entered the American market (Mazda North American Operations) and was very successful there, going so far as to create the Mazda Rotary Pickup (based on the conventional piston-powered B-Series model) solely for North American buyers. To this day, Mazda remains the only automaker to have produced a Wankel-powered pickup truck. Additionally, it is also the only marque to have ever offered a rotary-powered bus (the Mazda Parkway, offered only in Japan) or station wagon (within the RX-3 and RX-4 lines for certain markets). After nine years of development, Mazda finally launched its new model in the U.S. in 1970.</p>

                    <p>Mazda's rotary success continued until the onset of the 1973 oil crisis. As American buyers (as well as those in other nations) quickly turned to vehicles with better fuel efficiency, the relatively thirsty rotary-powered models began to fall out of favor. Combined with being the least-efficient automaker in Japan (in terms of productivity), inability to adjust to excess inventory and over-reliance on the U.S. market, the company suffered a huge loss in 1975.An already heavily indebted Toyo Kogyo was on the verge of bankruptcy and was only saved through the intervention of Sumitomo keiretsu group, namely Sumitomo Bank, and the company's subcontractors and distributors.However, the company had not totally turned its back on piston engines, as it continued to produce a variety of four-cylinder models throughout the 1970s. The smaller Familia line in particular became very important to Mazda's worldwide sales after 1973, as did the somewhat larger Capella series</p>

                    <p>Mazda refocused its efforts and made the rotary engine a choice for the sporting motorist rather than a mainstream powerplant. Starting with the lightweight RX-7 in 1978 and continuing with the modern RX-8, Mazda has continued its dedication to this unique powerplant. This switch in focus also resulted in the development of another lightweight sports car, the piston-powered Mazda MX-5 Miata (sold as the Eunos and later Mazda Roadster in Japan), inspired by the concept 'jinba ittai'. Introduced in 1989 to worldwide acclaim, the Roadster has been widely credited with reviving the concept of the small sports car after its decline in the late 1970s</p>
                    {/* Partnership with Ford */}
                    <b>Partnership with Ford</b>

                    <p>From 1974 to 2015, Mazda had a partnership with the Ford Motor Company, which acquired a 24.5% stake in 1979, upped to a 33.4% ownership of Mazda in May 1995. Under the administration of Alan Mulally, Ford gradually divested its stake in Mazda from 2008 to 2015, with Ford holding 2.1% of Mazda stock as of 2014 and severing most production as well as development ties</p>
                    
                    <p>This partnership with Ford began owing to Mazda's financial difficulties during the 1960s. Starting in 1979 by expanding their 7 percent financial stake to 24.5%, Ford expanded an existing partnership with Mazda, resulting in various joint projects. The cooperation had begun in 1971 when the Mazda B-Series spawned a Ford Courier variant for North America, a version which was later offered in other markets as well. Mazda's Bongo and Titan cab-over trucks were sold with Ford badging in mainly Asia and the Pacific region beginning in 1976.These included large and small efforts in all areas of the automotive landscape, most notably in the realm of pickup trucks and smaller cars. Mazda began supplying manual transaxles to Ford in the spring of 1980. Mazda's Familia platform was used for Ford models like the Laser and Escort beginning in 1980, while the Capella architecture found its way into Ford's Telstar sedan and Probe sports models</p>
                    
                    <p>During the 1980s, Ford-badged Mazda products replaced much of their own European-sourced lineup, especially in the Asia-Pacific markets, with the Laser replacing the Escort and the Telstar replacing the Cortina.In some cases, such as New Zealand and South Africa, these were assembled alongside their Mazda-badged equivalents, the Mazda 323 (Familia) and 626 (Capella)</p>
                    
                    <p>Following the closure of its own assembly plant in New Zealand, Mazda established a joint venture with Ford New Zealand known as Vehicle Assemblers of New Zealand (VANZ), while in South Africa, Ford's local subsidiary merged with Sigma Motor Corporation, which already assembled Mazdas in the country, to form Samcor, although the sharing of models proved unpopular with both Ford and Mazda customers.In other markets such as Australia, however, the 323 and 626 were always fully imported, with only the Laser and Telstar assembled locally.In Japan, the Laser and Telstar were also sold alongside their Mazda-badged brethren, but the Festiva was not sold as a Mazda 121 on the Japanese market</p>
                    
                    <p>In North America, the Probe was built in a new Mazda company plant in Flat Rock, Michigan, along with the mainstream 626 sedan and a companion Mazda MX-6 sports coupe. Ford also lent Mazda some of its capacity when needed: the Mazda 121 sold in Europe and South Africa was, for a time, a variant of the Ford Fiesta built in plants in Europe and South Africa. Mazda also made an effort in the past to sell some of Ford's cars in Japan, mainly through its Autorama dealer group</p>
                    
                    <p>Mazda also helped Ford develop the 1991 Explorer, which Mazda sold as the 2-door only Mazda Navajo from 1991 through 1994. However, Mazda's version was unsuccessful, while the Ford (available from the start as a 4-door or 2-door model) instantly became the best-selling sport-utility vehicle in the United States and kept that title for over a decade.Mazda has used Ford's Ranger pickup as the basis for its North American–market B-Series trucks, starting in 1994 and continuing through 2010, when Mazda discontinued importing its B-Series trucks to North America, due to costs associated with the chicken tax</p>
                    
                    <p>Following its long-held fascination with alternative engine technology, Mazda introduced the first Miller cycle engine for automotive use in the Millenia luxury sedan of 1995. Though the Millenia (and its Miller-type V6 engine) were discontinued in 2002, the company has recently introduced a much smaller Miller-cycle four-cylinder engine for use in its Demio starting in 2008. As with its leadership in Wankel technology, Mazda remains (so far) the only automaker to have used a Miller-cycle engine in the automotive realm</p>
                    
                    <p>Further financial difficulties at Mazda during the 1990s (partly caused by losses related to the 1997 Asian financial crisis)  caused Ford to increase its stake to a 33.4-percent controlling interest in May 1996. In June 1996, Henry Wallace was appointed president, and he set about restructuring Mazda and setting it on a new strategic direction. He laid out a new direction for the brand including the design of the present Mazda marque; he laid out a new product plan to achieve synergies with Ford, and he launched Mazda's digital innovation program to speed up the development of new products. At the same time, he started taking control of overseas distributors, rationalized dealerships and manufacturing facilities, and driving much-needed efficiencies and cost reductions in Mazda's operations. Much of his early work put Mazda back into profitability and laid the foundations for future success. Wallace was succeeded by James Miller in November 1997, followed in December 1999 by Ford executive Mark Fields, who has been credited with expanding Mazda's new product lineup and leading the turnaround during the early 2000s. Ford's increased influence during the 1990s allowed Mazda to claim another distinction in history, having maintained the first foreign-born head of a Japanese car company, Henry Wallace</p>

                    {/* Divestment by Ford */}
                    <b>Divestment by Ford</b>

                    <p>Amid the world financial crisis in the fall of 2008, reports emerged that Ford was contemplating a sale of its stake in Mazda as a way of streamlining its asset base. BusinessWeek explained the alliance between Ford and Mazda has been a very successful one, with Mazda saving perhaps $90 million a year in development costs and Ford "several times" that, and that a sale of its stake in Mazda would be a desperate measure.On November 18, 2008, Ford announced that it would sell a 20% stake in Mazda, reducing its stake to 13.4%, thus surrendering control of the company, which it held since 1996.The following day, Mazda announced that, as part of the deal, it was buying back 6.8% of its shares from Ford for about US$185 million while the rest would be acquired by business partners of the company. It was also reported that Hisakazu Imaki would be stepping down as chief executive, to be replaced by Takashi Yamanouchi.On November 18, 2010, Ford reduced its stake further to 3%, citing the reduction of ownership would allow greater flexibility to pursue growth in emerging markets, and Sumitomo Mitsui Financial Group was believed to become its largest shareholder. Ford and Mazda remained strategic partners through joint ventures and exchanges of technological information</p>

                    <p>On September 30, 2015, when Ford's shares had sunk to a little over 2% due to stock dilution, Ford sold its remaining shares in Mazda</p>

                    {/* Post-Ford efforts */}
                    <b>Post-Ford efforts</b>

                    <p>In 2011, Mazda raised more than 150 billion yen (US$1.9 billion) in a record share sale to replenish capital, as it suffered its biggest annual loss in 11 years. Part of the proceeds were used to build an auto plant in Salamanca, Mexico.The Mexican plant was built jointly by the company and Sumitomo Corporation</p>

                    <p>In May 2015, the company signed an agreement with Toyota to form a "long-term partnership", that would, among others, see Mazda supply Toyota with fuel-efficient SkyActiv gasoline and diesel engine technology in exchange for hydrogen fuel cell systems</p>
                    
                    <h3>Events</h3>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default Popup_Mazda;